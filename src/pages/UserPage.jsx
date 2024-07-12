import React from 'react';
import { useParams } from 'react-router-dom';
import ActivityChart from '../components/ActivityChart';
import AverageSessionsChart from '../components/Session';
import { getActivityByUserId, getAverageSessionsByUserId } from '../utils/apiHandler';
import { useGet } from '../utils/hooks';
import '../styles/UserPage.scss';

function UserPage() {
  const { id } = useParams();
  const userActivity = useGet(getActivityByUserId(id));
  const userAverageSessions = useGet(getAverageSessionsByUserId(id)); 

  if (userActivity.error || userAverageSessions.error) {
    return <p>No user data found.</p>;
  }

  if (userActivity.isLoading || userAverageSessions.isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section className='charts'>
      <ActivityChart data={userActivity.data.sessions} />
      <AverageSessionsChart data={userAverageSessions.data.sessions} />
    </section>
  );
}

export default UserPage;
