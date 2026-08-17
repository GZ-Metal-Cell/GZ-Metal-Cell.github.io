/**
 * August 6th memorial day script.
 *
 * On every August 6 (local time):
 *   - grayscale the whole site
 *   - on the home page (/ and /page/N), replace the header intro subtitle
 *
 * Loaded via _config.yml `inject.head` (global inject, applied to every page).
 */
(function () {
  'use strict'

  var now = new Date()
  // getMonth() is 0-based: August === 7
  if (now.getMonth() !== 7 || now.getDate() !== 6) return

  // 1. Grayscale the whole document with a smooth transition.
  var root = document.documentElement
  root.style.transition = 'filter 0.5s ease'
  // Force a reflow so the browser captures the start state and animates the filter.
  void root.offsetWidth
  root.style.filter = 'grayscale(1)'

  // 2. Home page only: override the intro subtitle under the header title.
  var isHome =
    window.location.pathname === '/' ||
    /^\/page\/\d+\/?$/.test(window.location.pathname)
  if (!isHome) return

  var homeIntro = '没有数字的公交车是王庄车'

  var title = document.getElementById('inner-page-title')
  var subtitle = title && title.nextElementSibling
  if (subtitle) {
    var intro = subtitle.querySelector('span')
    if (intro) intro.textContent = homeIntro
  }

  // Keep the reading-mode header description in sync.
  var postContent = document.getElementById('post-content')
  if (postContent) postContent.setAttribute('data-post-description', homeIntro)
})()
