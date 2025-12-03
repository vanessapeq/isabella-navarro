/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Formatos suportados (Next.js converte automaticamente para WebP/AVIF quando suportado)
    formats: ['image/avif', 'image/webp'],
    // Domínios externos permitidos (se precisar carregar de CDN no futuro)
    remotePatterns: [],
    // Tamanhos de imagem gerados automaticamente para diferentes dispositivos
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Tamanhos para imagens responsivas (usadas com sizes prop)
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Desabilitar otimização apenas em desenvolvimento (opcional, para debug)
    // unoptimized: process.env.NODE_ENV === 'development',
  },
};

export default nextConfig;


