const request = require('supertest');
const app = require('../../src/app');
const truncate = require('../utils/truncate');
const factory = require('../factories')

describe('Authentication', () => {
    beforeEach( async () => {
        await truncate();
    })

    it('should be able to authenticate with valid email', async () => {
        const user = await factory.create('User', {
            email: 'teste@teste.com.br',
            password: '123456'
        });
 
        const response = await request(app)
         .post('/sessions')
         .send({
             email: 'teste@teste.com.br',
             password: '123456'
         });

         expect(response.status).toBe(200);
    })

    it('should not be able to authenticate with an invalid email', async () => {
        const user = await factory.create('User', {
            email: 'teste@teste.com.br',
            password: '123456'
        });
 
        const response = await request(app)
         .post('/sessions')
         .send({
             email: 'testeErrado@teste.com.br',
             password: '123456'
         });

         expect(response.status).toBe(401);
    });


    it('should authenticate with valid credentials', async () => {
       const user = await factory.create('User', {
           password: '123456'
       });

       const response = await request(app)
        .post('/sessions')
        .send({
            email: user.email,
            password: '123456'
        });

        expect(response.status).toBe(200);

    });


    it ('should not authenticate with invalid credentials', async () => {
        const user = await factory.create('User', {
            password: '123456'
        });
 
        const response = await request(app)
         .post('/sessions')
         .send({
             email: user.email,
             password: '123123'
         });
 
         expect(response.status).toBe(401);
    });


    it('should return jwt token when authenticated', async () => {
        const user = await factory.create('User', {
            password: '123456'
        });
 
        const response = await request(app)
         .post('/sessions')
         .send({
             email: user.email,
             password: '123456'
         });
 
         expect(response.body).toHaveProperty('token');

    });

    it('should be able to acess private routes when authenticated with a jwt token', async () => {
        const user = await factory.create('User', {
            password: '123456'
        });
 
        const response = await request(app)
         .get('/profile')
         .set('Authorization', `Bearer ${user.generateToken()}`)
 
         expect(response.status).toBe(200);
    })

    it('should not be able to access private routes when not authenticated with the jwt token', async () => {
        const response = await request(app)
        .get('/profile');

        expect(response.status).toBe(401);
    })

    it('should not be able to acess private routes with the wrong jwt token', async () => {
        const response = await request(app)
        .get('/profile')
        .set('Authorization', `Bearer ${123123}`)

        expect(response.status).toBe(401);
    })
});



