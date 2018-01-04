import { randomBytes } from 'crypto'
import { query as _query, spawn, start } from 'nact'
import {
    append,
    assoc,
    cond,
    evolve,
    find,
    findIndex,
    merge,
    propEq,
    remove,
    update
} from 'ramda'
import { sendError, sendSuccess, typeEq } from './helpers'

const reducer = cond([
    [typeEq('create'), (state, { payload }, context) => {
        const kitten = assoc('id', randomBytes(16).toString('hex'), payload)
        sendSuccess(context, kitten)
        return evolve({ kittens: append(kitten) }, state)
    }],

    [typeEq('readAll'), (state, message, context) => {
        sendSuccess(context, state.kittens)
        return state
    }],

    [typeEq('readOne'), (state, { payload: { id } }, context) => {
        const kitten = find(propEq('id', id), state.kittens)
        if (kitten) {
            sendSuccess(context, kitten)
        } else {
            sendError(context, `Kitten with { id: ${id} } not found!`)
        }
        return state
    }],

    [typeEq('update'), (state, { payload }, context) => {
        const index = findIndex(propEq('id', payload.id), state.kittens)
        if (index === -1) {
            sendError(context, `Kitten with { id: ${payload.id} } not found!`)
            return state
        }
        const kitten = merge(state.kittens[index], payload)
        sendSuccess(context, kitten)
        return evolve({ kittens: update(index, kitten) }, state)
    }],

    [typeEq('delete'), (state, { payload: { id } }, context) => {
        const index = findIndex(propEq('id', id), state.kittens)
        if (index === -1) {
            sendError(context, `Kitten with { id: ${id} } not found!`)
            return state
        }
        sendSuccess(context, state.kittens[index])
        return evolve({ kittens: remove(index, 1) }, state)
    }]])

const service = spawn(
    start(),
    (state = { kittens: [] }, message, context) => reducer(state, message, context),
    'kittens')

export const query = _query(service, _, 100)
