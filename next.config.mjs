/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SEND_EMAIL_SERVICE_ID: process.env.SEND_EMAIL_SERVICE_ID,
    SEND_EMAIL_PUBLIC_KEY: process.env.SEND_EMAIL_PUBLIC_KEY,
    SEND_EMAIL_TEMPLATE_ID: process.env.SEND_EMAIL_TEMPLATE_ID,
    SEND_EMAIL_PRIVATE_KEY: process.env.SEND_EMAIL_PRIVATE_KEY,
  },
};

export default nextConfig;
