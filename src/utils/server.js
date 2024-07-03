import { createServer } from 'miragejs'
import { USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_MAIN_DATA, USER_PERFORMANCE } from './data'

const routes = [
    { name: '', data: USER_MAIN_DATA, findBy: 'id' },
    {
        name: '/activity',
        data: USER_ACTIVITY,
        findBy: 'userId',
    },
    {
        name: '/average-sessions',
        data: USER_AVERAGE_SESSIONS,
        findBy: 'userId',
    },
    {
        name: '/performance',
        data: USER_PERFORMANCE,
        findBy: 'userId',
    },
]

const create = () => {
    console.log('mirage server started')
    createServer({
        routes() {
            this.urlPrefix = 'http://localhost:3001'
            this.namespace = 'user'

            routes.forEach(
                (route) =>
                    this.get(
                        `/:id${route.name}`,
                        (schema, request) => {
                            const id = parseInt(request.params.id)
                            return {
                                data: route.data.find((user) => user[route.findBy] === id),
                            }
                        }
                    )
            )
        },
    })
}

export default create