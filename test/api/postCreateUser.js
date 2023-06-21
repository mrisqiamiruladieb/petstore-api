const request = require('supertest')
const baseUrl = require('../../env')
const DATA = require('../../data/userData.js')

describe('Post Request Create User', () => {

    it('Post Create User', async () => {
        const response = request(baseUrl())
        .post('/user')
        .send(DATA.CREATE_USER_DATA)
        console.log((await response).status)
        console.log((await response).body)
    })
    
})