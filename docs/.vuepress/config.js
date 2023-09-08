import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'
import { themeConfig } from './config/index'



  

export default defineUserConfig({
    title: 'LSC', // 头部左侧title
    theme: recoTheme(themeConfig)
})