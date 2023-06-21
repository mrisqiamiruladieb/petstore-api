const request = require('supertest')
const baseUrl = require('../../env')

describe('Get Request Logout', () => {

    it('Get Logout', async () => {
        const response = request(baseUrl())
        .get('/user/logout')
        console.log((await response).status)
        console.log((await response).body)
    })
    
})