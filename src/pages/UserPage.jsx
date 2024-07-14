import React from 'react';
import { useParams } from 'react-router-dom';
import ActivityChart from '../components/ActivityChart';
import AverageSessionsChart from '../components/Session';
import { getActivityByUserId, getAverageSessionsByUserId, getUserByUserId } from '../utils/apiHandler';
import { useGet } from '../utils/hooks';

function UserPage() {
  const { id } = useParams();
  const userActivity = useGet(getActivityByUserId(id));
  const userAverageSessions = useGet(getAverageSessionsByUserId(id));
  const userInfo = useGet(getUserByUserId(id))

  if (userInfo.error || userActivity.error || userAverageSessions.error) {
    return <p>No user data found.</p>;
  }


  return (
    <section>
      <div>
        <div className="profile-header">
          <span>Bonjour </span>
          <span>{userInfo.data.firstName}</span>
          <div>Félicitation ! Vous avez explosé vos objectifs hier 👏</div>
        </div>
        <div className="charts-layout">
          <div className="charts">
            <div className='activity'>
              <ActivityChart data={userActivity.data.sessions} />
            </div>
            <div className="average-sessions">
              <span>Durée moyenne des sessions</span>
              <AverageSessionsChart data={userAverageSessions.data.sessions} />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default UserPage;
