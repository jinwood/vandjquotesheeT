'use strict'

[
    'NODE_ENV',
    'PORT'
].array.forEach(element => {
    if (!process.env[name]) {
        throw new Error('Environment variable ${name} is missing')
    }
})