const request = require('supertest')
const baseUrl = require('../../env')
const DATA = require('../../data/userData.js')

describe('Delete Request User', () => {

    it('Delete an user', async () => {
        const response = request(baseUrl())
        .delete('/user/' + DATA.LOGIN_USER_DATA.username)
        console.log((await response).status)
        console.log((await response).body)
    })

})