/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['cloudflare-ipfs.com'],
	},

	basePath: '/test'
}

module.exports = nextConfig
