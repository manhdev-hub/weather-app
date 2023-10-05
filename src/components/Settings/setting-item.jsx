import React from 'react';
import { AppContext } from "../../context/app-provider";


export const SettingItem = React.memo(({title, iconLeft, iconRight, subInfo, defaultSetting = true, onChangeSettings }) => {
    const {isOpenSetting} = React.useContext(AppContext);
  return (
    <li className={isOpenSetting ? "slideAnimation" : ""}>
      <div className="text">
        <p>{title}</p>
      </div>
      <label className="switch" onClick={onChangeSettings}>
        <input type="checkbox" id="unit" defaultChecked={defaultSetting} />
        <div className="slider">
          <p className="left">
           {iconLeft}
          </p>
          <p className="right">
            {iconRight}
          </p>
        </div>
      </label>
      <div className="sub-info">{subInfo}</div>
    </li>
  );
});
