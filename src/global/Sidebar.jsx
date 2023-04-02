import React from "react";
import profilePic from "../assets/hasnat.jpg";
import SideMenu from './SideMenu'
import { Layout,Typography } from "antd";
const { Sider } = Layout;
const { Title, Text } = Typography;


const Sidebar = ({ background,color1,color2,color3,color4,paddingTop,width,collapsed }) => {
  return (
    <Sider
      style={{
        height: "100vh",
        padding: "0 15px",
        background: background,
        transition: "all .7s"
      }}
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      {!collapsed ? (
        <Title
          style={{
            color: color1,
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
        style={{ paddingTop: paddingTop }}
      >
        <img
          style={{
            width: width,
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
              color: color2
            }}
          >
            Hasnat Masum
          </Title>
        ) : (
          ""
        )}
        <Text
          style={{
            color: color3,
            textTransform: "uppercase",
            fontSize: "10px",
            fontWeight: "bold",
            marginTop: "6px"
          }}
        >
          Admin 
        </Text>
      </div>
      
      <SideMenu background={background} color={color4} />
    </Sider>
  );
};

export default Sidebar;
