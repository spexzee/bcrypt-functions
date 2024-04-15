# bcrypt-functions

bcrypt-functions is a simple npm package that provides utility functions for hashing and comparing passwords using bcrypt.

## Installation

You can install bcrypt-functions via npm:
```bash
npm install bcrypt-functions

```
# Note : 
You must install bcrypt package also.
```bash
npm install bcrypt

```

## Functions
```bash
createHashPassword(password: string, size: number): Promise<string>
```
Generates a hashed password using bcrypt.

options.password (string): The password to hash.
options.size (number): The salt size to use for hashing.
Returns a Promise that resolves to the hashed password.

```bash
comparePassword(password: string, hashed: string): Promise<boolean>
```
Compares a password with its hashed version.

password (string): The password to compare.
hashed (string): The hashed password.
Returns a Promise that resolves to a boolean indicating whether the password matches its hash.


# Example Usage

## Import the module
```bash
const bcryptFunctions = require('bcrypt-functions');
```
## Hashing a Password
```bash
// Generate a hashed password with a custom salt size
(async () => {
    try {
        const hash = await bcryptFunctions.createHashPassword('your_password', 'size'); //size-example - 10
        console.log('Hashed password:', hash);
    } catch (err) {
        console.error('Error:', err);
    }
})();
```

## Comparing a Password with a Hash
```bash
// Compare a password with its hash
(async () => {
    try {
        const isMatch = await bcryptFunctions.comparePassword('your_password', 'hashed-password');
        if (isMatch) {
            console.log('Password matches!');
        } else {
            console.log('Password does not match.');
        }
    } catch (err) {
        console.error('Error:', err);
    }
})();
```