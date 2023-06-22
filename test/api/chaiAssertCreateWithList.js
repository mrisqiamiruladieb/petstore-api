const { expect } = require('chai')
const request = require('supertest')
const baseUrl = require('../../env')
const DATA = require('../../data/userData.js')

describe('Post Request Create With List', () => {
    const response = request(baseUrl())
    .post('/user/createWithList')
    .send(DATA.CREATE_WITH_ARRAY)

    it('response status equal to 200', async () => {
        expect((await response).status).to.equal(200)
    })

    it('response body to haveOwnProperty', async () => {
        expect((await response).body).to.haveOwnProperty('message')
    })

})