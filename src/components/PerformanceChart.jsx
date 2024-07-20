import { ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis, Tooltip } from 'recharts';
import '../styles/PerformanceChart.scss';

const PerformanceChart = ({ data }) => {

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
                    <p className="label">{`${payload[0].value}`}</p>
                </div>
            )
        }

        return null
    }

    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart
                cx="50%"
                cy="50%"
                outerRadius="80%"
                data={data.performances}
                startAngle={90}
                endAngle={-270}
            >
                <PolarGrid radialLines={false} />
                <PolarAngleAxis
                    dataKey="kind"
                    tickFormatter={(value) => data.dataKind[value].name}
                    tick={{ fill: 'white', fontSize: '12px' }}
                />
                <Radar
                    dataKey="value"
                    stroke="rgba(255, 1, 1, 0.7)"
                    fill="rgba(255, 1, 1, 0.7)"
                />
                <Tooltip
                    content={<CustomTooltip />}
                    wrapperStyle={{ outline: 'none' }}
                />
            </RadarChart>
        </ResponsiveContainer>
    )
}



export default PerformanceChart;
