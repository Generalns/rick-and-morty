/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["rickandmortyapi.com"],
	},
	webpack(config, options) {
		config.module.rules.push({
			test: /\.mp3$/,
			use: {
				loader: "url-loader",
			},
		});
		return config;
	},
};

module.exports = nextConfig;
