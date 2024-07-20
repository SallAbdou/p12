const dataKind = {
    1: { name: 'Cardio', order: 6 },
    2: { name: 'Energie', order: 5 },
    3: { name: 'Endurance', order: 4 },
    4: { name: 'Force', order: 3 },
    5: { name: 'Vitesse', order: 2 },
    6: { name: 'Intensité', order: 1 },
}

class Performance {

    /**
     * Creates the user's performance data.
     * @param   {Number}    data.userId The user's id.
     * @param   {Object[]}  data.data   The user's performance data.
     * @param   {Object}    data.kind   Performance kind.
     */
    constructor(data) {
        this.dataKind = dataKind
        this.performances = data.data.map((item) => {
            const kind = dataKind[item.kind]
            return { ...item, ...kind }
        })
            .sort((a, b) => (a.order < b.order ? -1 : 1))
    }
}

export default Performance