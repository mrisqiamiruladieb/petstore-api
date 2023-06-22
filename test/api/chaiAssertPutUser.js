const { expect } = require('chai')
const request = require('supertest')
const baseUrl = require('../../env')
const DATA = require('../../data/userData.js')

describe('Put Request User', () => {
    const response = request(baseUrl())
    .put('/user/' + DATA.LOGIN_USER_DATA.username)
    .send(DATA.UPDATE_USER_DATA)

    it('response status equal to 200', async () => {
        expect((await response).status).to.equal(200)
    })

    it('response body to haveOwnProperty', async () => {
        expect((await response).body).to.haveOwnProperty('message')
    })

})