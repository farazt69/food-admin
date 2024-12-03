import './home.scss';
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from '../../components/navbar/navbar';
import Title from '../../components/title/Title';
import Widget from '../../components/widget/Widget';
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import Orders from '../../components/orders/Orders';
import Stat from '../../components/stat/Stat';
import Comments from '../../components/comments/comments';

function Home() {
    return (
        <main className="main">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="container">
                    <Title />
                    <div className="widgets">
                        <Widget type="allIncome" />
                        <Widget type="allCancels" />
                        <Widget type="allSuccess" />
                        <Widget type="allToday" />
                    </div>
                    <Row>
                        <Col>
                            <Orders />
                        </Col>
                        <Col>
                            <Stat />
                        </Col>
                    </Row>
                    <Comments />
                </div>
            </div>
        </main>
    )
}

export default Home