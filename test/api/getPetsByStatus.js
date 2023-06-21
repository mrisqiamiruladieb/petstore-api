const request = require('supertest')
const baseUrl = require('../../env')
const DATA = require('../../data/userData.js')

describe('Get Request Pets by Status', () => {

    it('Finds Pets by Status', async () => {
        const response = request(baseUrl())
        .get('/pet/findByStatus' + '?' + 'status=' + DATA.PET_STATUS.status1)
        console.log((await response).status)
        console.log((await response).body)
    })

})