import React,{useContext} from "react";
import profilePic from "../assets/hasnat.jpg";
import SideMenu from './SideMenu'
import useThemeMode from '../hooks/useThemeMode';
import { Layout,Typography } from "antd";
import {themeModeContext} from '../App';
const { Sider } = Layout;
const { Title, Text } = Typography;


const Sidebar = () => {
  const {mode:{background,background1,color1,color01,color2,color02,color3,color03,paddingTop,paddingTop1,width,width1}} = useThemeMode();
  const {collapsed,isDarkMode} = useContext(themeModeContext);
  
  return (
    <Sider
      style={{
        height: "100vh",
        padding: "0 10px",
        background: isDarkMode ? background : background1,
        transition: "all .7s"
      }}
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      {!collapsed ? (
        <Title
          style={{
            color: isDarkMode ?color1:color01,
            marginTop: "15px"
          }}
          level={4}
        >
          React Dashboard
        </Title>
      ) : (
        ""
      )}

      <div
        className="profile-photo"
        style={{ paddingTop: collapsed ? paddingTop: paddingTop1 }}
      >
        <img
          style={{
            width: collapsed ? width : width1,
            borderRadius: "50%"
          }}
          src={profilePic}
          alt="profile pic"
        />
        {!collapsed ? (
          <Title
            level={5}
            style={{
              margin: "10px 0 0",
              color: isDarkMode ?color2: color02
            }}
          >
            Hasnat Masum
          </Title>
        ) : (
          ""
        )}
        <Text
          style={{
            color: isDarkMode ? color3: color03,
            textTransform: "uppercase",
            fontSize: "10px",
            fontWeight: "bold",
            marginTop: "6px"
          }}
        >
          Admin 
        </Text>
      </div>
      
      <SideMenu />
    </Sider>
  );
};

export default Sidebar;
