import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {},
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/', component: '@/pages/index' },
        { path: '/shop', microApp: 'shop' },
        { path: '/user', microApp: 'user' },
      ],
    },
  ],
  fastRefresh: {},
  qiankun: {
    master: {
      apps: [
        {
          name: 'shop',
          entry: 'http://localhost:8001',
        },
        {
          name: 'user',
          entry: 'http://localhost:8002',
        },
      ],
    },
  },
});
