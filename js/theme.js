const toggleButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    document.documentElement.setAttribute('data-theme', currentTheme);

    toggleButton.addEventListener('click', () => {
      let theme = document.documentElement.getAttribute('data-theme');
      if (theme === 'light') {
        theme = 'dark';
      } else {
        theme = 'light';
      }
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    });