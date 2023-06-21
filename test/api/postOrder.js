const request = require('supertest')
const baseUrl = require('../../env')
const DATA = require('../../data/userData.js')

describe('Post Request Order', () => {

    it('Place an order for a pet', async () => {
        const response = request(baseUrl())
        .post('/store/order')
        .send(DATA.CREATE_ORDER)
        console.log((await response).status)
        console.log((await response).body)
    })

})