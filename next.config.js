/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Para que te deje añadir imagenes de Cloudinary, hay que añadir el dominio
  images: {
    domains: ['res.cloudinary.com']
  }
}

module.exports = nextConfig
