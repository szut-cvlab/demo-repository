import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// 该仓库是 <org>.github.io 用户/组织页，base 为根路径 '/'
export default defineConfig({
  site: 'https://szut-cvlab.github.io',
  base: '/',
  devToolbar: { enabled: false },
  server: {
    host: true, // 监听 0.0.0.0，放行 CloudStudio 等外部预览代理
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
