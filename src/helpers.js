import { resolve } from 'bluebird'
import { dispatch } from 'nact'
import { init, last, map, propEq } from 'ramda'

const fnToCallback = f => (...args) =>
    resolve(f(...init(args))).asCallback(last(args))

export const asCallbacks = map(fnToCallback)

export const typeEq = type => (...args) => propEq('type', type, args[1])

export const sendSuccess = (context, payload) =>
    dispatch(context.sender, { data: payload })

export const sendError = (context, message) =>
    dispatch(context.sender, { error: { message } })
