/**
 * Class representing the user's objective.
 */
class Objectif {
    /**
     * Creates the user's objective data.
     * @param   {Object}  data                    The user's objective data.
     * @param   {Number}  data.userId             The user's id.
     * @param   {Number}  data.calorieCount       The user's calorie objective.
     * @param   {Number}  data.totalCaloriesBurned The total calories burned by the user.
     * @param   {Number}  data.percentage         The percentage of the objective completed.
     */
    constructor(data) {
        this.userId = data.userId;
        this.calorieCount = data.calorieCount;
        this.totalCaloriesBurned = data.totalCaloriesBurned;
        this.percentage = data.percentage;
    }
}

export default Objectif;