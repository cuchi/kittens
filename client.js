#!/usr/bin/env node

const grpc = require('grpc')
const { always, isEmpty, join, pipe, slice, tryCatch, unary, when } = require('ramda')

const KittensService = grpc.load('./proto/kittens.proto').kittens.KittensCRUD
const client = new KittensService('localhost:9002', grpc.credentials.createInsecure())

const getPayload = pipe(
    slice(3, Infinity),
    join(''),
    when(isEmpty, always('{}')),
    tryCatch(unary(JSON.parse), err => {
        console.error(err.message)
        process.exit(1)
    }))

const payload = getPayload(process.argv)
const method = client[process.argv[2]]

if (!method) {
    console.error(`Method ${process.argv[2]} does not exist!`)
    process.exit(1)
}

client[process.argv[2]](payload, (err, res) => {
    if (err) {
        console.error(err.message)
        process.exit(1)
    }
    console.log(JSON.stringify(res, null, 2))
})
