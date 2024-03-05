function setTheme() {
    if (localStorage.getItem('theme') === null) {
        localStorage.setItem('theme', "light");
    }
    document.documentElement.setAttribute('data-theme', localStorage.getItem('theme'));

    // giscus https://blog.jvav.me/posts/change-giscus-theme-at-runtime
    document.querySelectorAll("iframe.giscus-frame")?.forEach(frame => {
        frame.contentWindow.postMessage(
          {
            giscus: {
              setConfig: {
                theme: localStorage.getItem('theme') === 'light' ? 'light' : 'dark_high_contrast',
              },
            },
          },
          "https://giscus.app"
        );
      });
}

function setToggleThemeButtonListener() {
    const toggleButton = document.getElementById('js-toggle_theme');
    toggleButton.addEventListener('click', toggleTheme);
    function toggleTheme() {
        localStorage.setItem('theme', localStorage.getItem('theme') === 'light' ? 'dark' : 'light');
        setTheme();
    }
}