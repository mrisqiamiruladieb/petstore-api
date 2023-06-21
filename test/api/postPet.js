const request = require('supertest')
const baseUrl = require('../../env')
const DATA = require('../../data/userData.js')

describe('Post Request Pet', () => {

    it('Add a new pet to the store', async () => {
        const response = request(baseUrl())
        .post('/pet')
        .send(DATA.ADD_PET_DATA)
        console.log((await response).status)
        console.log((await response).body)
    })

})