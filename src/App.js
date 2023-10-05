import React from 'react';
import './styles/main.scss';
import { RemindHeading } from "./components/RemindHeading";
import { Settings } from "./components/Settings";
import { SettingButton } from './components/SettingButton';
import { Central } from './components/Central';
import {AppContext} from './context/app-provider'

const App = React.memo(() => {
  const { isOpenSetting, currentTheme } =
    React.useContext(AppContext);
  return (
    <div className="App">
      <div className={isOpenSetting ? `wrapper ${currentTheme}` : "wrapper"}>
        <div className="align">
          <RemindHeading />
          <div className="app">
            <div id="main" className={`${currentTheme} poor-Mozilla`}>
              {/* <!-- Settings Button --> */}
              <SettingButton/>
              {/* <!-- Info Message--> */}
              <div id="info-msg">
                <div className="msg-box">
                  <h1></h1>
                  <p></p>
                </div>
              </div>
              <Settings />
              <Central/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default App;
