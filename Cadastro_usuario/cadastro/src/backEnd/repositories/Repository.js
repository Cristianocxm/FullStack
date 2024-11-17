const User = require('../models/Model');

class UserRepository {
    async getUserByEmail(email) {
        return await User.findOne({ email });
    }

    async create(userData) {
        const user = new User(userData);
        return await user.save();
    }
}

module.exports = new UserRepository();
