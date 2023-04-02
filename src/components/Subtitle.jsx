import { Card,Typography } from 'antd';
const Subtitle = ({text})=>{
    return (
        <Card style={{padding:'5px'}} className="sub-title">
            <Typography.Title level={5} style={{margin:'0',color:'rgb(210, 224, 250)'}}>{text}</Typography.Title>
        </Card>
    )
}

export default Subtitle;