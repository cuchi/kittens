import { asCallbacks } from './helpers'
import { query } from './kittens'

export default asCallbacks({
    create: call => query({ type: 'create', payload: call.request }),
    readAll: ~query({ type: 'readAll' }),
    readOne: call => query({ type: 'readOne', payload: call.request }),
    update: call => query({ type: 'update', payload: call.request }),
    delete: call => query({ type: 'delete', payload: call.request })
})
