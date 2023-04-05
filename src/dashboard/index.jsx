import { Card,Col, Row, Statistic } from 'antd';
import Subtitle from '../components/Subtitle';

const Dashboard = ()=>{
    return(
        <>
       <Subtitle text="Dashboard" />
        <Row gutter={16}>
        
    <Col span={8}>
    <Card>
      <Statistic title="Feedback" value={1128} prefix="hello" />
      </Card>
    </Col>
    <Col span={8}>
    <Card>
      <Statistic title="Unmerged" value={93} suffix="/ 100" />
      </Card>
    </Col>
  </Row>
  </>
    )
}

export default Dashboard;
