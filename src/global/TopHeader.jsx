import React,{useContext} from 'react'
import { BsFillMoonFill, BsBrightnessHighFill } from "react-icons/bs";
import { VscSettingsGear, VscBell, VscAccount } from "react-icons/vsc";
import {MenuFoldOutlined,MenuUnfoldOutlined } from "@ant-design/icons";
import useThemeMode from '../hooks/useThemeMode';
import { Layout } from "antd";
import {themeModeContext} from '../App';
const { Header } = Layout;

const TopHeader = () => {
      const {mode:{background,background1,color4,color04}} = useThemeMode();
      const {collapsed,setCollapsed,isDarkMode,
        setIsDarkMode} = useContext(themeModeContext);
       
    return (
        <Header
            className="top-header"
            style={{
              background: isDarkMode ? background : background1,
              color: isDarkMode ? color4 : color04
            }}
          >
            <div
              style={{ cursor: "pointer" }}
              onClick={() => setCollapsed(!collapsed)}
            >
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </div>
            <div className="top-header-right">
              {isDarkMode ? (
                <BsFillMoonFill onClick={() => setIsDarkMode(!isDarkMode)} />
              ) : (
                <BsBrightnessHighFill
                  onClick={() => setIsDarkMode(!isDarkMode)}
                />
              )}

              <VscBell />
              <VscSettingsGear />
              <VscAccount />
            </div>
          </Header>
    )
}

export default TopHeader
