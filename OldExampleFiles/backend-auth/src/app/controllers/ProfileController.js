const { User } = require('../models');
const jwt = require('jsonwebtoken');

class ProfileController {
    async store(req,res) {
        
        return res.status(200).send();

    }
}



module.exports = new ProfileController();