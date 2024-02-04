// /** @type {import('next').NextConfig} */

// const {withContentlayer} = require("next-contentlayer")

// const nextConfig = {
//     compiler:{
//         removeConsole: true,
//     }
// };

// module.exports = withContentlayer({ ...nextConfig });
/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
      },
      env: {
        SERVER_URL: process.env.BACKEND_URL,

      },
      async rewrites() {
        return [
          {
            source: '/api/:path*',
            // destination: "http://13.200.168.255:3010/api/v1/:path*",
            destination: `http://localhost:3010/api/v1/:path*`,
          },
        ];
      },
}

module.exports = nextConfig
