/**
 * Class representing the user's performance.
 */
class Performance {

    /**
     * Creates the user's performance data.
     * @param   {Number}    data.userId           The user's id.
     * @param   {Object}    data.kind             The kind of performance metrics.
     * @param   {Object[]}  data.data             The user's performance data.
     * @param   {Number}    data.data[].value     Performance value.
     * @param   {Number}    data.data[].kind      Performance kind.
     */
    constructor(data) {
        this.userId = data.userId;
        this.kind = data.kind;
        this.data = data.data.map(item => ({
            value: item.value,
            kind: data.kind[item.kind]
        }));
    }
}

export default Performance;
