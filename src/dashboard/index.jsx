import { useContext } from "react";
import { Card, Col, Row, Typography } from "antd";
import {
  AiOutlineLike,
  AiOutlineShareAlt,
  AiOutlineCloudDownload,
} from "react-icons/ai";
import useThemeMode from "../hooks/useThemeMode";
import { themeModeContext } from "../App";
import ChartLine from "../components/ChartLine";
import ChartPi from "../components/ChartPi";
import DashboardCard from "../components/DashboardCard";

const Dashboard = () => {
  const {
    mode: { background, background1, color4, color04 },
  } = useThemeMode();
  const { isDarkMode } = useContext(themeModeContext);
  return (
    <>
      <Card
        style={{
          background: isDarkMode ? background : background1,
          boxShadow: "0 0 5px #d2e0fa",
          border: "0",
          marginBottom: "16px",
        }}
      >
        <Typography.Title
          level={5}
          style={{ color: isDarkMode ? color4 : color04, margin: "0" }}
        >
          Dashboard
        </Typography.Title>
      </Card>

      <Row gutter={16}>
        <Col span={8}>
          <DashboardCard
            title="Likes"
            icon={<AiOutlineLike />}
            parcent="70"
            count="544620"
          />
        </Col>
        <Col span={8}>
          <DashboardCard
            title="Share"
            icon={<AiOutlineShareAlt />}
            parcent="60"
            count="144530"
          />
        </Col>
        <Col span={8}>
          <DashboardCard
            title="Download"
            icon={<AiOutlineCloudDownload />}
            parcent="50"
            count="54620"
          />
        </Col>
        <Col span={16}>
          <ChartLine height="40vh" />
        </Col>
        <Col span={8}>
          <ChartPi legends={true} height="40vh" />
        </Col>
      </Row>
      <Row gutter={16}></Row>
    </>
  );
};

export default Dashboard;
