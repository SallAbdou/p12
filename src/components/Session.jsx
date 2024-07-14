import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer, Rectangle, YAxis } from 'recharts'
import '../styles/Session.scss';


const AverageSessions = ({ data }) => {
    const weekDays = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

    console.log(data)


    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div
                    className="custom-tooltip"
                    style={{
                        backgroundColor: '#FFFFFF',
                        color: '#000000',
                        fontSize: '8px',
                        fontWeight: '500',
                        textAlign: 'center',
                        lineHeight: '24px',
                        fontStyle: 'normal',
                        width: '39px',
                        height: '25px',
                        borderColor: 'transparent',
                    }}
                >
                    <p className="label">{`${payload[0].value} min`}</p>
                </div>
            )
        }

        return null
    }

    const CustomCursor = ({ points }) => {
        return (
            <Rectangle
                fill="#000000"
                opacity={0.2}
                x={points[1].x}
                width={1000}
                height={700}
            />
        );
    };

    return (
        <ResponsiveContainer
            className="average-sessions"
            width="100%"
            height="100%"
        >
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <XAxis
                    dataKey="day"
                    type="number"
                    domain={[1, 7]}
                    tickCount="7"
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(value) => weekDays[value - 1]}
                    tick={{ fill: 'white', fontSize: '12px' }}
                    tickMargin={0}
                />
                <YAxis hide={true} padding={{ top: 80, bottom: 40 }} />
                <Tooltip
                    content={<CustomTooltip />}
                    cursor={<CustomCursor />}
                    wrapperStyle={{ outline: 'none' }}
                />
                <Line
                    type="natural"
                    dataKey="sessionLength"
                    dot={false}
                    stroke="#FFFFFF"
                    strokeWidth={2}
                    activeDot={{ r: 4 }}
                    legendType="none"
                />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default AverageSessions