// bcryptFunctions.js
const bcrypt = require('bcrypt');

const createHashPassword = (password,size=10)=>{
    return new Promise((resolve, reject)=>{
        bcrypt.genSalt(size, (err , salt)=>{
            if(err) reject(err);

            bcrypt.hash(password,salt,(err , hash)=>{
                if(err) reject(err);

                resolve(hash)
            })
        })
    })
};

const comparePassword = (password, hashed) =>{
    return bcrypt.compare(password, hashed);
};

module.exports = {
    createHashPassword,
    comparePassword
};
