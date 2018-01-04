import { expect } from 'chai'
import { query } from '../src/kittens'

describe('Kittens service', () => {
    it('should create a kitten', () =>
        query({ type: 'create', payload: { name: 'Ritalina', age: 1, toys: [{ description: 'pink yarn' }] } })
            .then(res => {
                expect(res.error).to.be.undefined
                expect(res.data.id).to.be.a('string')
                expect(res.data.id.length).to.be.equal(32)
                expect(res.data.name).to.be.equal('Ritalina')
                expect(res.data.age).to.be.equal(1)
                expect(res.data.toys).to.be.an('array')
                expect(res.data.toys.length).to.be.equal(1)
                expect(res.data.toys[0].description).to.be.equal('pink yarn')
            }))
    // TODO: other tests
})
