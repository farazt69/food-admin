import './donat.scss';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
function Donat({ percentage, title, color }) {
    return (
        <div className='donat'>
            <Gauge
                width={150}
                height={150}
                value={percentage}
                innerRadius="60%"
                outerRadius="80%"
                sx={(theme) => ({
                    [`& .${gaugeClasses.valueText}`]: {
                        fontSize: 40,
                    },
                    [`& .${gaugeClasses.valueArc}`]: {
                        fill: color,
                    },
                    [`& .${gaugeClasses.referenceArc}`]: {
                        fill: theme.palette.text.disabled,
                    },
                })}
            />
            <span>{title}</span>
        </div>
    )
}

export default Donat