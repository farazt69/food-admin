import Chart from '../chart/Chart'
import './orders.scss'

function Orders() {
    return (
        <div className='widgetCard orders'>
            <div className="header">
                <div className="title">
                    <h6>سفارشات</h6>
                    <span>میزان سفارشات اخیر در بازه زمانی 30 روزه</span>
                </div>
                <button>
                    خروجی
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 19H2.99996C2.73475 19 2.48039 19.1053 2.29285 19.2929C2.10532 19.4804 1.99996 19.7348 1.99996 20C1.99996 20.2652 2.10532 20.5195 2.29285 20.7071C2.48039 20.8946 2.73475 21 2.99996 21H21C21.2652 21 21.5195 20.8946 21.7071 20.7071C21.8946 20.5195 22 20.2652 22 20C22 19.7348 21.8946 19.4804 21.7071 19.2929C21.5195 19.1053 21.2652 19 21 19Z" fill="#2D9CDB" />
                        <path d="M12.0001 2.00006C11.7349 2.00006 11.4805 2.10542 11.293 2.29295C11.1054 2.48049 11.0001 2.73484 11.0001 3.00006V13.5901L7.71007 10.2901C7.52177 10.1018 7.26637 9.99597 7.00007 9.99597C6.73377 9.99597 6.47837 10.1018 6.29007 10.2901C6.10177 10.4784 5.99598 10.7338 5.99598 11.0001C5.99598 11.2664 6.10177 11.5218 6.29007 11.7101L11.2901 16.7101C11.383 16.8038 11.4936 16.8782 11.6155 16.929C11.7374 16.9797 11.8681 17.0059 12.0001 17.0059C12.1321 17.0059 12.2628 16.9797 12.3846 16.929C12.5065 16.8782 12.6171 16.8038 12.7101 16.7101L17.7101 11.7101C17.8033 11.6168 17.8773 11.5061 17.9277 11.3843C17.9782 11.2625 18.0042 11.1319 18.0042 11.0001C18.0042 10.8682 17.9782 10.7376 17.9277 10.6158C17.8773 10.494 17.8033 10.3833 17.7101 10.2901C17.6168 10.1968 17.5061 10.1229 17.3843 10.0724C17.2625 10.0219 17.1319 9.99597 17.0001 9.99597C16.8682 9.99597 16.7376 10.0219 16.6158 10.0724C16.494 10.1229 16.3833 10.1968 16.2901 10.2901L13.0001 13.5901V3.00006C13.0001 2.73484 12.8947 2.48049 12.7072 2.29295C12.5196 2.10542 12.2653 2.00006 12.0001 2.00006Z" fill="#2D9CDB" />
                    </svg>
                </button>
            </div>
            <div className="content">
                <Chart />
            </div>
        </div>
    )
}

export default Orders