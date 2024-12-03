import './widget.scss';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import allIncome from '../../assets/images/allIncome.png';
import allSuccess from '../../assets/images/allSuccess.png';
import allCancels from '../../assets/images/allCancels.png';
import allToday from '../../assets/images/allToday.png';
function Widget({type}) {
  let data;
  switch(type){
    case "allIncome":
      data = {
        counter: "$128",
        desc: "درآمد کل",
        percentageNumber: '12',
        days: '30',
        icon: allIncome,
        status: 'negative'
      };
      break;
    case "allCancels":
      data = {
        counter: "65",
        desc: "میزان کنسلی",
        percentageNumber: '25',
        days: '30',
        icon: allCancels,
        status: 'negative'
      };
      break;
    case "allSuccess":
      data = {
        counter: "375",
        desc: "میزان موفق",
        percentageNumber: '4',
        days: '30',
        icon: allSuccess,
        status: 'positive'
      };
      break;
    case "allToday":
      data = {
        counter: "75",
        desc: "سفارشات امروز",
        percentageNumber: '4',
        days: '30',
        icon: allToday,
        status: 'positive'
      };
      break;
  }
  return (
    <div className="widget">
        <div className="content">
          <span className='counter'>{data.counter}</span>
          <span className='desc'>{data.desc}</span>
          <div className={`percentage ${data.status}`}>
            <span className='days'>({data.days} days)</span>
            <span className={`percentageNumber ${data.status}`}>{data.percentageNumber} %</span>
            <ArrowUpwardIcon style={{ fontSize: 20 }} />
          </div>
        </div>
        <div className="icon"><img src={data.icon} /></div>
    </div>
  )
}

export default Widget