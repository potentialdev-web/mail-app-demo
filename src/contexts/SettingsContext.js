import React, {
  createContext,
  useEffect,
  useState
} from 'react';
import _ from 'lodash';
import { THEMES } from '../constants';

const defaultSettings = () => ({
  theme: THEMES.ONE_DARK
});

export const restoreSettings = () => {
  let settings = null;

  try {
    const storedData = window.localStorage.getItem('settings');

    if (storedData) {
      settings = JSON.parse(storedData);
    }
    console.log('settings', settings);
  } catch (err) {
    console.error(err);
    // If stored data is not a strigified JSON this will fail,
    // that's why we catch the error
  }

  return settings;
};

export const storeSettings = (settings) => {
  window.localStorage.setItem('settings', JSON.stringify(settings));
};

const SettingsContext = createContext({
  settings: defaultSettings,
  saveSettings: () => { }
});

export const SettingsProvider = ({ children }) => {
  const [currentSettings, setCurrentSettings] = useState(restoreSettings());

  const handleSaveSettings = (update = {}) => {
    const mergedSettings = _.merge({}, currentSettings, update);

    setCurrentSettings(mergedSettings);
    storeSettings(mergedSettings);
  };
  console.log('current settings', currentSettings);

  return (
    <SettingsContext.Provider
      value={{
        settings: currentSettings,
        saveSettings: handleSaveSettings
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const SettingsConsumer = SettingsContext.Consumer;

export default SettingsContext;
  