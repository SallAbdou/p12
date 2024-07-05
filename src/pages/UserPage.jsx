// Page de test de Recharts 
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {BarChart, Bar, XAxis,  YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,} from 'recharts';

function UserPage() {
  const { id } = useParams(); 
  const [userActivity, setUserActivity] = useState(null);

  useEffect(() => {
    const fetchUserActivity = async () => {
      try {
        const response = await fetch(`http://localhost:3000/user/${id}/activity`);
        const data = await response.json();
        console.log('Fetched user activity:', data);
        if (data && data.data && data.data.sessions) {
          setUserActivity(data.data.sessions); 
        }
      } catch (error) {
        console.error('Error fetching user activity:', error);
      } 
    };

    fetchUserActivity();
  }, [id]);


  if (!userActivity) {
    return <p>No user activity data found.</p>; 
  }

  return (
    <div>
      <h2>Activité Quotidienne</h2>
      <ResponsiveContainer width={500} height={400}>
        <BarChart data={userActivity} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="kilogram" fill="#282D30" name="Poids (kg)" />
          <Bar dataKey="calories" fill="#E60000" name="Calories brûlées (kCal)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default UserPage;
