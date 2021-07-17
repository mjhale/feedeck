export const setDarkMode = (mode) => {
  document.documentElement.classList.add('color-theme-in-transition');
  document.documentElement.setAttribute('data-theme', mode ? 'dark' : 'light');
  window.setTimeout(function() {
    document.documentElement.classList.remove('color-theme-in-transition')
  }, 700)
  return isDarkMode();
};

export const isDarkMode = () => {
  return document.documentElement.getAttribute('data-theme') !== 'light';
};

export const toggleDarkMode = () => {
  return setDarkMode(!isDarkMode());
};
