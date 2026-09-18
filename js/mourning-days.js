/**
 * Date-based mourning display engine.
 *
 * Register a recurring local-calendar date:
 *   window.SiteMourningDays.register({ month: 8, day: 6 })
 *
 * `year` can be supplied for a one-off date. `homeIntro` optionally replaces
 * the home-page subtitle and its reading-mode description on matching dates.
 */
(function () {
  'use strict'

  if (window.SiteMourningDays) {
    window.SiteMourningDays.refresh()
    return
  }

  var root = document.documentElement
  var rules = []
  var midnightTimer
  var routeTimers = []
  var originalTextAttribute = 'data-mourning-original-text'
  var originalDescriptionAttribute = 'data-mourning-original-description'
  var routeChangeEvent = 'site:mourning-route-change'

  function normalizeRule(input) {
    var month = Number(input && input.month)
    var day = Number(input && input.day)
    var year = input && input.year != null ? Number(input.year) : null

    if (!Number.isInteger(month) || month < 1 || month > 12) {
      throw new TypeError('Mourning day month must be an integer from 1 to 12')
    }
    if (!Number.isInteger(day) || day < 1 || day > 31) {
      throw new TypeError('Mourning day must be an integer from 1 to 31')
    }
    if (year != null && !Number.isInteger(year)) {
      throw new TypeError('Mourning day year must be an integer when provided')
    }

    return {
      id: String(input.id || [year || 'annual', month, day].join('-')),
      month: month,
      day: day,
      year: year,
      homeIntro:
        typeof input.homeIntro === 'string' ? input.homeIntro : undefined,
    }
  }

  function matchesDate(rule, date) {
    return (
      rule.month === date.getMonth() + 1 &&
      rule.day === date.getDate() &&
      (rule.year == null || rule.year === date.getFullYear())
    )
  }

  function isHomePage() {
    return (
      window.location.pathname === '/' ||
      /^\/page\/\d+\/?$/.test(window.location.pathname)
    )
  }

  function getHomeIntroElement() {
    var title = document.getElementById('inner-page-title')
    var subtitle = title && title.nextElementSibling
    return subtitle && subtitle.querySelector('span')
  }

  function applyHomeIntro(text) {
    var intro = getHomeIntroElement()
    if (intro) {
      if (!intro.hasAttribute(originalTextAttribute)) {
        intro.setAttribute(originalTextAttribute, intro.textContent || '')
      }
      if (intro.textContent !== text) intro.textContent = text
    }

    var postContent = document.getElementById('post-content')
    if (postContent) {
      if (!postContent.hasAttribute(originalDescriptionAttribute)) {
        postContent.setAttribute(
          originalDescriptionAttribute,
          postContent.getAttribute('data-post-description') || ''
        )
      }
      postContent.setAttribute('data-post-description', text)
    }
  }

  function restoreHomeIntro() {
    var intro = document.querySelector('[' + originalTextAttribute + ']')
    if (intro) {
      intro.textContent = intro.getAttribute(originalTextAttribute) || ''
      intro.removeAttribute(originalTextAttribute)
    }

    var postContent = document.querySelector(
      '[' + originalDescriptionAttribute + ']'
    )
    if (postContent) {
      postContent.setAttribute(
        'data-post-description',
        postContent.getAttribute(originalDescriptionAttribute) || ''
      )
      postContent.removeAttribute(originalDescriptionAttribute)
    }
  }

  function scheduleMidnightRefresh() {
    window.clearTimeout(midnightTimer)
    var now = new Date()
    var nextMidnight = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1
    )
    midnightTimer = window.setTimeout(
      refresh,
      Math.max(1000, nextMidnight.getTime() - now.getTime() + 100)
    )
  }

  function refresh() {
    var now = new Date()
    var activeRules = rules.filter(function (rule) {
      return matchesDate(rule, now)
    })

    if (activeRules.length > 0) {
      root.setAttribute(
        'data-mourning-day',
        activeRules
          .map(function (rule) {
            return rule.id
          })
          .join(' ')
      )
    } else {
      root.removeAttribute('data-mourning-day')
    }

    var introRule
    for (var i = 0; i < activeRules.length; i += 1) {
      if (activeRules[i].homeIntro != null) introRule = activeRules[i]
    }
    if (introRule && isHomePage()) applyHomeIntro(introRule.homeIntro)
    else restoreHomeIntro()

    scheduleMidnightRefresh()
  }

  function register(input) {
    var rule = normalizeRule(input)
    rules = rules.filter(function (existing) {
      return existing.id !== rule.id
    })
    rules.push(rule)
    refresh()

    return function unregister() {
      rules = rules.filter(function (existing) {
        return existing.id !== rule.id
      })
      refresh()
    }
  }

  function refreshAfterRouteChange() {
    routeTimers.forEach(function (timer) {
      window.clearTimeout(timer)
    })
    routeTimers = [0, 100, 500].map(function (delay) {
      return window.setTimeout(refresh, delay)
    })
  }

  function installNavigationHooks() {
    ;['pushState', 'replaceState'].forEach(function (methodName) {
      var original = window.history[methodName]
      window.history[methodName] = function () {
        var result = original.apply(this, arguments)
        window.dispatchEvent(new Event(routeChangeEvent))
        return result
      }
    })
    window.addEventListener('popstate', refreshAfterRouteChange)
    window.addEventListener(routeChangeEvent, refreshAfterRouteChange)
  }

  var style = document.getElementById('mourning-days-style')
  if (!style) {
    style = document.createElement('style')
    style.id = 'mourning-days-style'
    style.textContent =
      'html { transition: filter 0.5s ease; }' +
      'html[data-mourning-day] { filter: grayscale(1); }'
    document.head.appendChild(style)
  }

  window.SiteMourningDays = {
    register: register,
    refresh: refresh,
  }

  window.addEventListener('focus', refresh)
  window.addEventListener('pageshow', refresh)
  document.addEventListener('visibilitychange', function () {
    if (!document.hidden) refresh()
  })
  installNavigationHooks()
  refresh()
})()
