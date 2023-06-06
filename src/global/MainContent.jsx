import { useContext } from 'react';
import useThemeMode from '../hooks/useThemeMode';
import {themeModeContext} from '../App';
import { Layout } from "antd";
import {Routes,Route} from 'react-router-dom';
import Dashboard from '../dashboard';
import ContactInfo from '../contacts';
import Invoice from '../invoice';
import Profile from '../profile';
import Calender from '../calender';
import FaqPage from '../faq';
import Team from '../team';
import BarChart from '../charts/BarChart';
import LineChart from '../charts/LineChart';
import PiChart from '../charts/PiChart';
const {  Content } = Layout;

const MainContent = ()=>{
    const {mode:{background,background1,color4,color04}} = useThemeMode();
    const {isDarkMode} = useContext(themeModeContext);
    return(
        <Content
            style={{
            //   margin: "16px",
              padding: 24,
            //   background: isDarkMode ? background : background1,
            //background: isDarkMode ? '#212F3D ' : '#AED6F1' ,
            background: isDarkMode ? '#212F3D ' : '#d2e0fa' ,
              color: isDarkMode ? color4 : color04,
            }}
          >
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/team' element={<Team />} />
                <Route path='/contact-info' element={<ContactInfo />} />
                <Route path='/invoice' element={<Invoice />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/calender' element={<Calender />} />
                <Route path='/faq-page' element={<FaqPage />} />
                <Route path='/pi-chart' element={<PiChart />} />
                <Route path='/bar-chart' element={<BarChart />} />
                <Route path='/line-chart' element={<LineChart />} />
            </Routes>
          </Content>
    )
}

export default MainContent;