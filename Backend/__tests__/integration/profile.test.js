const request = require('supertest');
const app = require('../../src/app');
const truncate = require('../utils/truncate');
const factory = require('../factories');
const faker = require('faker');

describe('User Creation', () => {
    beforeEach( async () => {
        await truncate();
    })

    it('should be able to create an user profile providing a fresh email, a name and a password', async () => {
        const response = await request(app)
        .post('/sessions/new')
        .send({
            name: 'Fulanodetal',
            email: faker.internet.email(),
            password: '123456'
        });

        expect(response.status).toBe(201);
    });

    it('should not be able to create an user profile with an email that it already registered', async () => {
        const user = await factory.create('User', {
            email: 'teste@teste.com.br',
            password: '123456'
        });
        
        const response = await request(app)
        .post('/sessions/new')
        .send({
            name: 'Fulanodetal',
            email: 'teste@teste.com.br',
            password: '5555555'
        });

        expect(response.status).toBe(401);
    });

})