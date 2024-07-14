import Activity from "../models/Activity";
import AverageSessions from "../models/AverageSessions";
import User from "../models/User";

const BASE_URL = `${URL_API}/user`;
const URL_USER = id => `${BASE_URL}/${id}`
const URL_ACTIVITY = id => `${BASE_URL}/${id}/activity`;
const URL_AVERAGE_SESSIONS = id => `${BASE_URL}/${id}/average-sessions`;

const get = (url, model) =>
    fetch(url)
        .then(res => res.json())
        .then(data => model(data.data));

export const getUserByUserId = id => get(URL_USER(id), data => new User(data));
export const getActivityByUserId = id => get(URL_ACTIVITY(id), data => new Activity(data));
export const getAverageSessionsByUserId = id => get(URL_AVERAGE_SESSIONS(id), data => new AverageSessions(data));
