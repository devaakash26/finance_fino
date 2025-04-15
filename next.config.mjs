/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "randomuser.me",
            }
        ]
    },
    experimental: {
        serverActions: {
            bodySizeLimit: "5mb"
        }
    },
    output: 'standalone'
};

export default nextConfig;
