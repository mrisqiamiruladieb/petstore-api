const request = require('supertest')
const baseUrl = require('../../env')
const DATA = require('../../data/userData.js')

describe('Get Request User', () => {
    
    it('Get User by Username', async () => {
        const response = request(baseUrl())
        
        // error
        // .get('/user/' + DATA.USERNAME_USER_DATA)

        .get('/user/' + DATA.LOGIN_USER_DATA.username)

        // .get('/user/ming_990')
        console.log((await response).status)
        console.log((await response).body)
    })

})