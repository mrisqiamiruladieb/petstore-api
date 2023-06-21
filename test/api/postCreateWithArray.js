const request = require('supertest')
const baseUrl = require('../../env')
const DATA = require('../../data/userData.js')

describe('Post Request Create With Array', () => {

    it('Creates list of users with given input array', async () => {
        const response = request(baseUrl())
        .post('/user/createWithArray')
        .send(DATA.CREATE_WITH_ARRAY)
        console.log((await response).status)
        console.log((await response).body)
    })

})