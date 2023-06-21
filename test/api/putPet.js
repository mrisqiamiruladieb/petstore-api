const request = require('supertest')
const baseUrl = require('../../env')
const DATA = require('../../data/userData.js')

describe('Put Request Pet', () => {

    it('Update an existing pet', async () => {
        const response = request(baseUrl())
        .put('/pet')
        .send(DATA.UPDATE_PET_DATA)
        console.log((await response).status)
        console.log((await response).body)
    })

})