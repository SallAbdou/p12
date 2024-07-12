import PropTypes from 'prop-types';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer,  } from 'recharts';
import '../styles/Session.scss';


const AverageSessionsChart = ({ data }) => {
    // Pour les jours de la semaine
    const daysOfWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

    return (
        <div className="average-sessions-chart">
            <h2>Durée moyenne des sessions</h2>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                        dataKey="day" 
                        tickFormatter={(dayIndex) => daysOfWeek[dayIndex - 1]}  // Ajustement pour commencer à 0
                        tick={{ fill: '#8884d8', fontSize: 12 }}
                    />
                    <YAxis 
                        domain={['auto', 'auto']} 
                        tick={{ fill: '#8884d8', fontSize: 12 }}
                    />
                    <Tooltip 
                        contentStyle={{ backgroundColor: '#F00', borderColor: '#ddd' }}
                    />
                    <Line 
                        type="monotone" 
                        dataKey="sessionLength" 
                        stroke="#F00" 
                        strokeWidth={2} 
                        dot={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

AverageSessionsChart.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            day: PropTypes.number.isRequired, 
            sessionLength: PropTypes.number.isRequired
        })
    ).isRequired
};

export default AverageSessionsChart;