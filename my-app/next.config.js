/** @type {import('next').NextConfig} */
const nextConfig = {
        experimental: {
          forceSwcTransforms: true,
        },
        images:{
          domains:['th.bing.com'],
        }
      
}

module.exports = nextConfig
