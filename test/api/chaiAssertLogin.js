const { expect } = require('chai')
const request = require('supertest')
const baseUrl = require('../../env')
const DATA = require('../../data/userData.js')

describe('Get Request Login', () => {
    const response = request(baseUrl())
    .get('/user/login' + '?' + DATA.LOGIN_USER_DATA)

    it('response status equal to 200', async () => {
        expect((await response).status).to.equal(200)
    })

    it('response body to haveOwnProperty', async () => {
        expect((await response).body).to.haveOwnProperty('message')
    })

})