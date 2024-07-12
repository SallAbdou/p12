import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, } from 'recharts';

const ActivityChart = ({ data }) => {

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div
                    className="custom-tooltip"
                    style={{
                        backgroundColor: '#E60000',
                        color: '#FFFFFF',
                        fontSize: '7px',
                        fontWeight: '500',
                        textAlign: 'center',
                        lineHeight: '24px',
                        fontStyle: 'normal',
                        width: '39px',
                        height: '63px',
                    }}
                >
                    <p className="label">{`${payload[0].value}Kg`}</p>
                    <p className="label">{`${payload[1].value}Kcal`}</p>
                </div>
            )
        }

        return null
    }

    const RenderLegend = ({ payload }) => (
        <div className="activity-legend-container">
            <span className="activity-title">Activité quotidienne</span>
            <span className="flex-1"></span>
            {payload.map((entry, index) => (
                <div className="activity-legend" key={`activity-legend-${index}`}>
                    <div
                        className="legend-circle"
                        style={{ backgroundColor: entry.color }}
                    ></div>
                    <span className="activity-legend-title">{entry.value}</span>
                </div>
            ))}
        </div>
    )

    return (
        <ResponsiveContainer className="activity" width="100%" height="100%">
            <BarChart width={500} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }} barGap={10} barSize={7} >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis
                    dataKey="day"
                    tickLine={false}
                    tickFormatter={(value, index) => index + 1}
                    tick={{ fill: 'rgba(155, 158, 172, 1)', fontSize: '14px' }}
                    tickMargin={10}
                />
                <YAxis
                    hide={true}
                    yAxisId="left"
                    orientation="left"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: 'rgba(155, 158, 172, 1)', fontSize: '14px' }}
                    tickMargin={10}
                    tickCount={3}
                />
                <YAxis
                    yAxisId="right"
                    orientation="right"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: 'rgba(155, 158, 172, 1)', fontSize: '14px' }}
                    tickMargin={10}
                    tickCount={4}
                    type="number"
                    domain={[(dataMin) => dataMin - 1, (dataMax) => dataMax + 1]}
                />
                <Tooltip
                    content={<CustomTooltip />}
                    wrapperStyle={{ outline: 'none' }}
                />
                <Legend
                    verticalAlign="top"
                    align="right"
                    iconType="circle"
                    iconSize={8}
                    height={50}
                    wrapperStyle={{
                        paddingBottom: '30px',
                    }}
                    content={<RenderLegend />}
                />
                <Bar
                    yAxisId="right"
                    name="Poids (kg)"
                    dataKey="kilogram"
                    fill="#282D30"
                    radius={[10, 10, 0, 0]}
                />
                <Bar
                    yAxisId="left"
                    name="Calories brûlées (kCal)"
                    dataKey="calories"
                    fill="#E60000"
                    radius={[10, 10, 0, 0]}
                />
            </BarChart>
        </ResponsiveContainer>

    )


}

export default ActivityChart