module.exports = {
    apps: [{
        name: 'patfeng',
        script: 'npx',
        args: 'parcel serve index.html',
        env: {
            NODE_ENV: 'production',
            PORT: 80,
            OPENAI_API_KEY: '',
        },
        watch: false,
        instances: 1,
        autorestart: true,
        max_memory_restart: '1G'
    }]
}; 