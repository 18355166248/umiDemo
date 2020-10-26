import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { title: '首页', path: '/', component: '@/pages/index' },
    { title: '色号设置', path: '/colorNumberSetting', component: '@/pages/externalMachiningSetting/colorNumberSetting.tsx' },
  ],
});
