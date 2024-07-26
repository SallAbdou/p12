import React from 'react';
import { useParams } from 'react-router-dom';
import ActivityChart from '../components/ActivityChart';
import AverageSessionsChart from '../components/Session';
import PerformanceChart from '../components/PerformanceChart';
import ObjectifChart from '../components/ObjectifChart';
import { getActivityByUserId, getAverageSessionsByUserId, getUserByUserId, getPerformanceByUserId } from '../utils/apiHandler';
import { useGet } from '../utils/hooks';
import Keydata from '../components/Keydata'


function UserPage() {
  const { id } = useParams();
  const userActivity = useGet(getActivityByUserId(id));
  const userAverageSessions = useGet(getAverageSessionsByUserId(id));
  const userInfo = useGet(getUserByUserId(id))
  const userPerformance = useGet(getPerformanceByUserId(id));


  if (userInfo.error || userActivity.error || userAverageSessions.error || userPerformance.error) {
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
      
        <div className='charts-and-data'>
            <div className="charts-layout">
              <div className="charts">
                <div className='activity'>
                  <ActivityChart data={userActivity.data.sessions} />
                </div>
                <div className="average-sessions">
                  <span>Durée moyenne des sessions</span>
                  <AverageSessionsChart data={userAverageSessions.data.sessions} />
                </div>
                <div className="performance-chart">
                  <PerformanceChart data={userPerformance.data} />
                </div>
                <div className="objectif">
                  <span>Objectif</span>
                  <ObjectifChart data={userInfo.data.score} />
                </div>
              </div>
            </div>
            <div className="key-data">
              {userInfo.isLoading ? <div>loading...</div> : userInfo?.data.keyDatas.map(item => <Keydata key={item.name} data={item} />)}
            </div>
       </div>
     
      </div>   

    </section>
  );
}

export default UserPage;
