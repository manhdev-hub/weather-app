import React from "react";
import { AppContext } from "../../context/app-provider";

export const SettingButton = () => {
  const { isOpenSetting, setIsOpenSetting, setListCites } = React.useContext(AppContext);
  const handlerToggleSetting = () => {
    setIsOpenSetting(!isOpenSetting);
    setListCites([]);
  };
  return (
    <span
      id="btn-right"
      className={isOpenSetting ? "open" : ""}
      onClick={handlerToggleSetting}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </span>
  );
};
