import React, { useState } from "react";



import Sidebar from './global/Sidebar';
import TopHeader from './global/TopHeader';
import MainContent from './global/MainContent';
import { Layout } from "antd";

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className="App">
      <Layout>
        <Sidebar 
        background={isDarkMode ? "#001529" : "#d2e0fa"} 
        color1={isDarkMode ? "#fff" : "rgb(0, 21, 41)"} 
        color2={isDarkMode ? "#f3b765" : "#aa6215"} 
        color3={isDarkMode ? "#7f9ef3" : "#2b4acb"}
        color4={isDarkMode ? "#d2e0fa" : "#001529"} 
        paddingTop={collapsed ? "64px" : "20px"}
        width={collapsed ? "3vw" : "4vw"}
        collapsed={collapsed}
        />
        <Layout className="site-layout">
          <TopHeader 
          background={isDarkMode ? "#001529" : "#d2e0fa"} 
          color={isDarkMode ? "#d2e0fa" : "#001529"} 
          collapsed={collapsed} 
          setCollapsed={setCollapsed} 
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          />
          <MainContent 
          background={isDarkMode ? "#001529" : "#d2e0fa"} 
          color={isDarkMode ? "#d2e0fa" : "#001529"}
          />
          
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
