import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/libs/i18n/request.ts')

const nextConfig: NextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'pub-a83eb796c4cf49b3bee01a1a080b7842.r2.dev',
				pathname: '/**'
			}
		]
	}
}

export default withNextIntl(nextConfig)
