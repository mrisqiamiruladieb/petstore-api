const { expect } = require('chai')
const request = require('supertest')
const baseUrl = require('../../env')
const DATA = require('../../data/userData.js')

describe('Get Request Pet by Id', () => {
    const response = request(baseUrl())
    .get('/pet/' + DATA.ADD_PET_DATA.id)

    it('response status equal to 200', async () => {
        expect((await response).status).to.equal(200)
    })

    it('response body to haveOwnProperty', async () => {
        expect((await response).body).to.haveOwnProperty('id')
    })
    
})