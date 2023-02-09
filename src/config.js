require('dotenv').config()

const configs = {
    api: {
        nodeEnv: process.env.NODE_ENV,
        port: process.env.PORT,
        host: process.env.HOST
    },
    db: {
        development: {
            dialect: 'postgres',
            host: 'localhost',
            username: 'postgres',
            password: 'PacoRo0t',
            database: 'posts',
            define: {
                timestamps: true,
                underscore: true
            }
        },
        test: {

        },
        production: {

        }
    }
}

module.exports = configs