import grpc from 'grpc'
import api from './api'

const kittensProto = grpc.load('./proto/kittens.proto').kittens.KittensCRUD.service

const server = new grpc.Server()

server.addService(kittensProto, api)
server.bind('0.0.0.0:9002', grpc.ServerCredentials.createInsecure())
server.start()
