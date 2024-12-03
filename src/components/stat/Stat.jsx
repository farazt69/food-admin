import Donat from '../donat/Donat';
import './stat.scss';
import { Row, Col } from "react-bootstrap";

function Stat() {
    return (
        <div className='widgetCard orders'>
            <div className="header">
                <div className="title">
                    <h6>سفارشات</h6>
                </div>
            </div>
            <div className="content">
                <Row>
                    <Col><Donat percentage={62} title='درآمد کل' color='#2D9CDB' /></Col>
                    <Col><Donat percentage={22} title='میزان رشد مشتری' color='#00B074' /></Col>
                    <Col><Donat percentage={81} title='سفارشات کل' color='#FF5B5B' /></Col>
                </Row>
                
            </div>
        </div>
    )
}

export default Stat