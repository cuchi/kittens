# Kittens

![Kittens Microservice](https://i.imgur.com/PGCGaRf.png)

## What
This is an example of a microservice application that implements a simple CRUD,
built using Node.js + nact + gRPC.

## Why
The sole purpose of this project is to use bleeding-edge technologies to build a
scaffold of a microservice, which should be by default:
- Safe
- Performatic
- Scalable
- Resilient
- Easy to build
- Easy to understand
- Easy to maintain
- Flexible

## How
Every piece of technology used in this repository can help the developer (you!)
to achieve the goals above, let's see how:

- **Node.js** provides a very powerful event-driven javascript runtime with a
    great balance between performance and memory footprint.
- **Babel** is used to compile the source code to run inside Node.js. The code
    used in this project is the modern JavaScript (ES7) with custom operators
    that enable easier and more idiomatic functional programming style.
- **nact** implements the actor model of the good ol' Erlang. This is a very
    efficient approach to handle concurrency of applications that are either
    stateful or stateless. Also, code decoupling comes for absolutely free.
- **gRPC** is a minimalist high-performance RPC framework. It uses protocol
    buffers, which are a great way to define _type-safe_ requisitions and
    responses of microservices.

## DISCLAIMER
The text above is **mostly** opinionated and this example is not meant to be an
silver bullet for everything. If some of this doesn't work for you, open an
issue! Maybe we both can improve our knowledge :)

## Checklist
- [x] `.proto` definitions
- [x] Initial CRUD
- [ ] Tests
- [x] Docker
- [ ] Travis CI
