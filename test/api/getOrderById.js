const request = require('supertest')
const baseUrl = require('../../env')
const DATA = require('../../data/userData.js')

describe('Get Request Order by ID', () => {

    it('Find purchase order by id', async () => {
        const response = request(baseUrl())
        .get('/store/order/' + DATA.CREATE_ORDER.id)
        console.log((await response).status)
        console.log((await response).body)
    })
    
})