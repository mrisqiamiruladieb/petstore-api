const request = require('supertest')
const baseUrl = require('../../env')
const DATA = require('../../data/userData.js')

describe('Delete Request Order', () => {
    
    it('Delete purchase order by ID', async () => {
        const response = request(baseUrl())
        .delete('/store/order/' + DATA.CREATE_ORDER.id)
        console.log((await response).status)
        console.log((await response).body)
    })

})