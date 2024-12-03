import { LineChart, lineElementClasses } from '@mui/x-charts/LineChart';

import './chart.scss';

const data = [
    { date: new Date(1990, 0, 1), fr: 28129, gb: 26189, dl: 25391 },
    { date: new Date(1991, 0, 1), fr: 28294.264, gb: 25792.014, dl: 26769.96 },
    { date: new Date(1992, 0, 1), fr: 28619.805, gb: 25790.186, dl: 27385.055 },
    { date: new Date(1993, 0, 1), fr: 28336.16, gb: 26349.342, dl: 27250.701 },
    { date: new Date(1994, 0, 1), fr: 28907.977, gb: 27277.543, dl: 28140.057 },
    { date: new Date(1995, 0, 1), fr: 29418.863, gb: 27861.215, dl: 28868.945 },
    { date: new Date(1996, 0, 1), fr: 29736.645, gb: 28472.248, dl: 29349.982 },
    { date: new Date(1997, 0, 1), fr: 30341.807, gb: 29259.764, dl: 30186.945 },
    { date: new Date(1998, 0, 1), fr: 31323.078, gb: 30077.385, dl: 31129.584 },
    { date: new Date(1999, 0, 1), fr: 32284.611, gb: 30932.537, dl: 32087.604 },
    { date: new Date(2000, 0, 1), fr: 33409.68, gb: 31946.037, dl: 33367.285 },
    { date: new Date(2001, 0, 1), fr: 33920.098, gb: 32660.441, dl: 34260.29 },
    { date: new Date(2002, 0, 1), fr: 34152.773, gb: 33271.3, dl: 34590.93 },
    { date: new Date(2003, 0, 1), fr: 34292.03, gb: 34232.426, dl: 34716.44 },
    { date: new Date(2004, 0, 1), fr: 35093.824, gb: 34865.78, dl: 35528.715 },
    { date: new Date(2005, 0, 1), fr: 35495.465, gb: 35623.625, dl: 36205.574 },
    { date: new Date(2006, 0, 1), fr: 36166.16, gb: 36214.07, dl: 38014.137 },
    { date: new Date(2007, 0, 1), fr: 36845.684, gb: 36816.676, dl: 39752.207 },
    { date: new Date(2008, 0, 1), fr: 36761.793, gb: 36264.79, dl: 40715.434 },
    { date: new Date(2009, 0, 1), fr: 35534.926, gb: 34402.36, dl: 38962.938 },
    { date: new Date(2010, 0, 1), fr: 36086.727, gb: 34754.473, dl: 41109.582 },
    { date: new Date(2011, 0, 1), fr: 36691, gb: 34971, dl: 43189 },
    { date: new Date(2012, 0, 1), fr: 36571, gb: 35185, dl: 43320 },
    { date: new Date(2013, 0, 1), fr: 36632, gb: 35618, dl: 43413 },
    { date: new Date(2014, 0, 1), fr: 36527, gb: 36436, dl: 43922 },
    { date: new Date(2015, 0, 1), fr: 36827, gb: 36941, dl: 44293 },
    { date: new Date(2016, 0, 1), fr: 37124, gb: 37334, dl: 44689 },
    { date: new Date(2017, 0, 1), fr: 37895, gb: 37782.83, dl: 45619.785 },
    { date: new Date(2018, 0, 1), fr: 38515.918, gb: 38058.086, dl: 46177.617 },
]

function Chart() {
    return (
        <div className="chart">
            <LineChart
                dataset={data}
                sx={{
                    [`& .${lineElementClasses.root}`]: {
                        strokeDasharray: '10 5',
                        strokeWidth: 2,
                    },
                    '& .MuiAreaElement-series-Germany': {
                        fill: "url('#myGradient')",
                    },
                }}
                xAxis={[
                    {
                        id: 'Years',
                        dataKey: 'date',
                        scaleType: 'time',
                        valueFormatter: (date) => date.getFullYear().toString(),
                    },
                ]}
                series={[
                    {
                        id: 'Germany',
                        dataKey: 'dl',
                        stack: 'total',
                        area: true,
                        showMark: false,
                    },
                ]}
                margin={{ left: 0, top: 10, right: 0 }}
                width={600}
                height={200}
            >
                <defs>
                    <linearGradient id="myGradient" gradientTransform="rotate(90)">
                        <stop offset="5%" stopColor="rgba(110,200,239,1)" />
                        <stop offset="85%" stopColor="rgba(110,200,239,.4)" />
                        <stop offset="10%" stopColor="rgba(255,255,255,1)" />
                    </linearGradient>
                </defs>
            </LineChart>
        </div>
    )
}

export default Chart