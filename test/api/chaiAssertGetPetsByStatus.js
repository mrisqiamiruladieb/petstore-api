const { expect } = require('chai')
const request = require('supertest')
const baseUrl = require('../../env')
const DATA = require('../../data/userData.js')

describe('Get Request Pets by Status', () => {
    const response = request(baseUrl())
    .get('/pet/findByStatus' + '?' + 'status=' + DATA.PET_STATUS.status1)

    it('response status equal to 200', async () => {
        expect((await response).status).to.equal(200)
    })
    
})