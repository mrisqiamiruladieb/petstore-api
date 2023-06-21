const request = require('supertest')
const baseUrl = require('../../env')
const DATA = require('../../data/userData.js')

describe('Delete Request Pet', () => {

    it('Deletes a pet', async () => {
        const response = request(baseUrl())
        .delete('/pet/' + DATA.ADD_PET_DATA.id)
        console.log((await response).status)
        console.log((await response).body)
    })
    
})