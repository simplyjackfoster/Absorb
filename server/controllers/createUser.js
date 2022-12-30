const User = require('../models/user');

let newUser = new User({
    email: 'user@example.com',
    name: 'User',
    password: 'password'
});

newUser.save((error) => {
    if (error) {
        console.error(error);
    } else {
        console.log('User saved successfully');
    }
});