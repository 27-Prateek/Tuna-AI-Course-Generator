// // // /** @type {import('next').NextConfig} */

// // // const nextConfig = {
// // //   /* config options here */
// // // };

// // // export default nextConfig;
// // /** @type {import('next').NextConfig} */
// // const nextConfig = {
// //   experimental: {
// //     serverActions: {
// //       bodySizeLimit: "10mb", // 👈 increase limit
// //     },
// //   },
// // };

// // module.exports = nextConfig;
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     serverActions: {
//       bodySizeLimit: "10mb",
//     },
//   },
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
