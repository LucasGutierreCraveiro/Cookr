const bcrypt = require('bcryptjs');
const factory = require('../factories');
const { User } = require('../../src/app/models');
const truncate = require('../utils/truncate');

describe('User', () => {
    beforeEach(async () => {
        await truncate();
    });

    it ('should encrypt an user password', async () => {
        const user = await factory.create('User', {
            password: '123456'
        });

        const hash = await bcrypt.hash('123456',8);

        const compareHash = await bcrypt.compare('123456',user.password_hash)
        
        expect(compareHash).toBe(true)
    });
})