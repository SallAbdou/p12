/**
 * Class representing the user's activity.
 */
class Activity {

    /**
     * Creates the user's activity data.
     * @param   {Number}    data.userId               The user's id.
     * @param   {Object[]}  data.sessions             The user's session.
     * @param   {Number}    data.sessions[].day       Session day.
     * @param   {Number}    data.sessions[].kilogram  Session kilogram.
     * @param   {Number}    data.sessions[].calories  Session calories.
     */
    constructor(data) {
        this.sessions = data.sessions
    }
}

export default Activity