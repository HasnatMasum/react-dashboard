import React from 'react'
import {  Menu } from "antd";
  import { AiOutlineTeam,
    AiOutlineHome,
    AiOutlineContacts,
    AiOutlineUser,
    AiOutlineCalendar,
    AiOutlineQuestionCircle,
    AiOutlinePieChart,
    AiOutlineBarChart,
    AiOutlineLineChart 
  } from "react-icons/ai";
  import { TbFileInvoice } from "react-icons/tb";
  import { useNavigate } from "react-router-dom";

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
    getItem('dashboard', '/', <AiOutlineHome />,null),
    getItem('Data', 'data', null, [
      getItem('team', '/team',<AiOutlineTeam />), 
      getItem('contacts info', '/contact-info',<AiOutlineContacts />),
      getItem('invoice', '/invoice',<TbFileInvoice />)
    ], 'group'),
    getItem('Pages', 'page', null, [
      getItem('profile', '/profile',<AiOutlineUser />), 
      getItem('calender', '/calender',<AiOutlineCalendar />),
      getItem('faq page', '/faq-page',<AiOutlineQuestionCircle />)
    ], 'group'),
    getItem('Charts', 'charts', null, [
      getItem('pi chart', '/pi-chart',<AiOutlinePieChart />), 
      getItem('bar chart', '/bar-chart',<AiOutlineBarChart />),
      getItem('line chart', '/line-chart',<AiOutlineLineChart />)
    ], 'group'),
  ];
const SideMenu = ({background,color}) => {
  const navigate = useNavigate();
    return (
        <Menu
          onClick = {(item)=>navigate(item.key)}
            style={{
              background: background,
              color: color,
              // marginTop:'10px'
              marginBottom: '0px',
              fontSize: '13px'
            }}
            
            mode="inline"
            defaultSelectedKeys={["/"]}
            items = {items}
            
          />
    )
}

export default SideMenu
