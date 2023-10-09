/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true
    },
    images: {
        domains: ['limewire-ai2-production.s3.amazonaws.com']
    }
}

module.exports = nextConfig
