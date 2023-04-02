import React from 'react'
import { BsFillMoonFill, BsBrightnessHighFill } from "react-icons/bs";
import { VscSettingsGear, VscBell, VscAccount } from "react-icons/vsc";
import {MenuFoldOutlined,MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout } from "antd";
const { Header } = Layout;

const TopHeader = ({background,color,collapsed,setCollapsed,isDarkMode,
    setIsDarkMode}) => {
    return (
        <Header
            className="top-header"
            style={{
              background: background,
              color: color
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
