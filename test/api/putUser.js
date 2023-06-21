const request = require('supertest')
const baseUrl = require('../../env')
const DATA = require('../../data/userData.js')

describe('Put Request User', () => {

    it('Update an user', async () => {
        const response = request(baseUrl())
        .put('/user/' + DATA.LOGIN_USER_DATA.username)
        .send(DATA.UPDATE_USER_DATA)
        console.log((await response).status)
        console.log((await response).body)
    })

})