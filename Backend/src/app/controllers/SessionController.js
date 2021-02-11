const { User } = require('../models');
const jwt = require('jsonwebtoken');

class SessionController {
    async store(req,res) {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email }});

        if (!user) {
            return res.status(401).json({ message: 'Usuario nao encontrado'});
        }

        if (!(await user.checkPassword(password))) {
            return res.status(401).json({ message: 'Senha Invalida'});
        }
        
        return res.json({ user, token: user.generateToken() });

    }

    async create(req,res) {
        const { name, email, password } = req.body;

        const user = await User.findOne({ where: { email }});

        if (!user) {
            const newUser = await User.create({
                name: name,
                email: email,
                password: password,
            });
            return res.status(201).send();
        } else {
            return res.status(401).json({ message: 'Usuario ja possui email cadastrado'});
        }

    }


}



module.exports = new SessionController();