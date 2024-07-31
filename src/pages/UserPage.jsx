import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ActivityChart from '../components/ActivityChart';
import AverageSessionsChart from '../components/Session';
import PerformanceChart from '../components/PerformanceChart';
import ObjectifChart from '../components/ObjectifChart';
import { getActivityByUserId, getAverageSessionsByUserId, getUserByUserId, getPerformanceByUserId } from '../utils/apiHandler';
import Keydata from '../components/Keydata'


function UserPage() {
  const { id } = useParams();

  const [user, setUser] = useState({});
  const [activity, setActivity] = useState([]);
  const [averageSessions, setAverageSessions] = useState([]);
  const [performance, setPerformance] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true)
    setError(null)
    Promise.all([
      getActivityByUserId(id),
      getAverageSessionsByUserId(id),
      getUserByUserId(id),
      getPerformanceByUserId(id)
    ])
      .then(([userActivity, userSessions, userData, userPerformance]) => {
        setUser(userData);
        setActivity(userActivity);
        setAverageSessions(userSessions);
        setPerformance(userPerformance);
      })
      .catch(() => {
        setError(new Error('API is not available. Please try again later.'));
      }).finally(() => setLoading(false))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isLoading) return <div className="loader">Chargement...</div>;
  if (error) return <p className="error-message">{error.message}</p>;

  return (
    <section>
      <div>
        <div className="profile-header">
          <span>Bonjour </span>
          <span>{user?.firstName}</span>
          <div>Félicitation ! Vous avez explosé vos objectifs hier 👏</div>
        </div>

        <div className='charts-and-data'>
          <div className="charts-layout">
            <div className="charts">
              <div className='activity'>
                <ActivityChart data={activity?.sessions} />
              </div>
              <div className="average-sessions">
                <span>Durée moyenne des sessions</span>
                <AverageSessionsChart data={averageSessions?.sessions} />
              </div>
              <div className="performance-chart">
                <PerformanceChart data={performance} />
              </div>
              <div className="objectif">
                <span>Objectif</span>
                <ObjectifChart data={user?.score} />
              </div>
            </div>
          </div>
          <div className="key-data">
            {user?.keyDatas.map(item => <Keydata key={item.name} data={item} />)}
          </div>
        </div>

      </div>

    </section>
  );
}

export default UserPage;