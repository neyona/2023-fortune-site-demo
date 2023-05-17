
import React, { useState, useEffect, useContext } from 'react';

const ThemeDyslexiaContext = React.createContext({
  isDyslexia: false,
  toggleDyslexiaTheme: () => {},
});

// Can only be used within the ThemeDyslexiaContext provider
const useDyslexiaTheme = () => {
  const context = useContext(ThemeDyslexiaContext);
  if (!context) {
    throw new Error(
      'useDyslexiaTheme must be used within ThemeDyslexiaProvider'
    );
  }
  return context;
};

// A custom hook to add ".dyslexia" class to the the body
// element if the persisted mode on localStorage is dyslexia.
const useDyslexiaThemeEffect = () => {
  const [themeDyslexiaState, setThemeDyslexiaState] = useState({
    isDyslexia: false,
    hasDyslexiaThemeLoaded: false,
  });
  useEffect(() => {
    const lsDyslexia = localStorage.getItem('isDyslexia') === 'true';
    if (lsDyslexia) {
      document.querySelector('body').classList.add('dyslexia');
    }
    setThemeDyslexiaState({
      ...themeDyslexiaState,
      isDyslexia: lsDyslexia,
      hasDyslexiaThemeLoaded: true,
    });
  }, []);
  return { themeDyslexiaState, setThemeDyslexiaState };
};

const ThemeDyslexiaProvider = ({ children }) => {
  const { themeDyslexiaState, setThemeDyslexiaState } = useDyslexiaThemeEffect();
  // Render <div /> if the mode is not loaded yet
  // to avoid rendering in the regular font by default
  if (!themeDyslexiaState.hasDyslexiaThemeLoaded) return <div />;
  // Add or remove the dyslexia class from the body element
  // when a user toggles the switch
  const toggleDyslexiaTheme = () => {
    const isDyslexia = !themeDyslexiaState.isDyslexia;
    localStorage.setItem('isDyslexia', JSON.stringify(isDyslexia));
    const bodyEl = document.querySelector('body');
    isDyslexia
      ? bodyEl.classList.add('dyslexia')
      : bodyEl.classList.remove('dyslexia')
    setThemeDyslexiaState({ ...themeDyslexiaState, isDyslexia });
  };

  return (
    <ThemeDyslexiaContext.Provider
      value={{
        isDyslexia: themeDyslexiaState.isDyslexia,
        toggleDyslexiaTheme,
      }}
    >
      {children}
    </ThemeDyslexiaContext.Provider>
  );
};

export { ThemeDyslexiaProvider, useDyslexiaTheme };
