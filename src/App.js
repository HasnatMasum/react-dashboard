import React, { useState,createContext } from "react";
import Sidebar from './global/Sidebar';
import TopHeader from './global/TopHeader';
import MainContent from './global/MainContent';
import { Layout } from "antd";

export const themeModeContext = createContext();

function App() {
   const [collapsed, setCollapsed] = useState(false);
   const [isDarkMode, setIsDarkMode] = useState(true);
  
  return (
    <themeModeContext.Provider value={{collapsed, setCollapsed,isDarkMode, setIsDarkMode}}>
    <div className="App">
      <Layout>
        <Sidebar />
        <Layout className="site-layout">
          <TopHeader />
          <MainContent />
        </Layout>
      </Layout>
    </div>
    </themeModeContext.Provider>
  );
}

export default App;
