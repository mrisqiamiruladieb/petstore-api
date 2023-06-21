const request = require('supertest')
const baseUrl = require('../../env')
const DATA = require('../../data/userData.js')

describe('Get Request Pet by Id', () => {

    it('Find pet by ID', async () => {
        const response = request(baseUrl())
        .get('/pet/' + DATA.ADD_PET_DATA.id)
        console.log((await response).status)
        console.log((await response).body)
    })
    
})