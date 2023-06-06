import { useContext } from "react";
import { Card, Progress } from "antd";
import useThemeMode from "../hooks/useThemeMode";
import { themeModeContext } from "../App";

const DashboardCard = ({ title, icon, parcent }) => {
  const {
    mode: { background, background1, color4, color04 }
  } = useThemeMode();
  const { isDarkMode } = useContext(themeModeContext);
  return (
    <Card
      style={{
        background: isDarkMode ? background : background1,
        boxShadow: "0 0 5px #d2e0fa",
        border: "0"
      }}
    >
      <div
        style={{
          display: "flex",
          color: isDarkMode ? color4 : color04,
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <div>
          <h3>{title}</h3>
          <p>{icon} 1211</p>
        </div>
        <div>
          <Progress
            type="circle"
            strokeColor="#54B254"
            trailColor="#F4D03F"
            percent={parcent}
            size={40}
          />
        </div>
      </div>
    </Card>
  );
};

export default DashboardCard;
