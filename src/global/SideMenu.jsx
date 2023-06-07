import React, { useContext } from "react";
import { Menu } from "antd";
import {
  AiOutlineTeam,
  AiOutlineHome,
  AiOutlineContacts,
  AiOutlineUser,
  AiOutlineCalendar,
  AiOutlineQuestionCircle,
  AiOutlinePieChart,
  AiOutlineBarChart,
  AiOutlineLineChart,
} from "react-icons/ai";
import { TbFileInvoice } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import useThemeMode from "../hooks/useThemeMode";
import { themeModeContext } from "../App";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("Dashboard", "/", <AiOutlineHome />, null),
  getItem(
    "Data",
    "data",
    null,
    [
      getItem("Team", "/team", <AiOutlineTeam />),
      getItem("Contacts info", "/contact-info", <AiOutlineContacts />),
      getItem("Invoice", "/invoice", <TbFileInvoice />),
    ],
    "group"
  ),
  getItem(
    "Pages",
    "page",
    null,
    [
      getItem("Profile", "/profile", <AiOutlineUser />),
      getItem("Calender", "/calender", <AiOutlineCalendar />),
      getItem("Faq page", "/faq-page", <AiOutlineQuestionCircle />),
    ],
    "group"
  ),
  getItem(
    "Charts",
    "charts",
    null,
    [
      getItem("Pi chart", "/pi-chart", <AiOutlinePieChart />),
      getItem("Bar chart", "/bar-chart", <AiOutlineBarChart />),
      getItem("Line chart", "/line-chart", <AiOutlineLineChart />),
    ],
    "group"
  ),
];
const SideMenu = () => {
  const {
    mode: { background, background1, color4, color04 },
  } = useThemeMode();
  const { isDarkMode } = useContext(themeModeContext);
  const navigate = useNavigate();
  return (
    <Menu
      onClick={(item) => navigate(item.key)}
      style={{
        background: isDarkMode ? background : background1,
        color: isDarkMode ? color4 : color04,
        marginBottom: "0px",
        fontSize: "13px",
      }}
      mode="inline"
      defaultSelectedKeys={["/"]}
      items={items}
    />
  );
};

export default SideMenu;
