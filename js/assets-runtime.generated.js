window.SiteAssets={version:"bfa3f59135754a5aefb238e1cbcb4d428c1b98fa26908c19db35ad2ce19ddb9e",resolve:(function createAssetResolver(mapping, development = false) {
  const files = new Set(mapping.files)
  const active = mapping.enabled && !(development && mapping.devMode === 'local')
  return function resolve(url, postSlug) {
    if (!active || typeof url !== 'string') return url
    const raw = url.trim()
    if (!raw || /^(?:[a-z][a-z0-9+.-]*:|\/\/|#|\?)/i.test(raw)) return url
    if (!raw.startsWith('/') && !postSlug) return url
    const base = postSlug
      ? '/posts/' + postSlug.split('/').map(encodeURIComponent).join('/') + '/'
      : '/'
    try {
      const parsed = new URL(raw, 'https://assets.invalid' + base)
      const segments = parsed.pathname.split('/').filter(Boolean).map(decodeURIComponent)
      if (segments.some(s => s === '.' || s === '..' || /[\\/\u0000]/.test(s))) return url
      let key = segments.join('/')
      if (!files.has(key)) key = mapping.directories[key] || ''
      if (!key || !files.has(key)) return url
      const objectKey = [mapping.keyPrefix, key].filter(Boolean).join('/')
      return mapping.baseUrl + '/' + objectKey.split('/').map(encodeURIComponent).join('/') + parsed.search + parsed.hash
    } catch {
      return url
    }
  }
})({"enabled":false,"devMode":"local","baseUrl":"","keyPrefix":"","files":[],"directories":{}},false)};
(function(){var resolve=window.SiteAssets.resolve;window.SiteAssets.resolve=function(url,slug){if(slug===undefined && location.pathname.startsWith("/posts/")){try{slug=location.pathname.slice(7).replace(/\/+$/,"").split("/").map(decodeURIComponent).join("/")}catch(e){}}return resolve(url,slug)}})();
