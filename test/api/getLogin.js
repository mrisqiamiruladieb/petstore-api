const request = require('supertest')
const baseUrl = require('../../env')
const DATA = require('../../data/userData.js')

describe('Get Request Login', () => {

    it('Get Login', async () => {
        const response = request(baseUrl())
        .get('/user/login' + '?' + DATA.LOGIN_USER_DATA)
        console.log((await response).status)
        console.log((await response).body)
    })
    
})