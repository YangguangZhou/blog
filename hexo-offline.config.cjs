// offline config passed to workbox-build.
module.exports = {
    globPatterns: ['**/*.{js,html,css,png,jpg,gif,svg,webp,eot,ttf,woff,woff2}'],
    // 静态文件合集，如果你的站点使用了例如 webp 格式的文件，请将文件类型添加进去。
    globDirectory: 'public',
    swDest: 'public/service-worker.js',
    maximumFileSizeToCacheInBytes: 10485760, // 缓存的最大文件大小，以字节为单位。
    skipWaiting: true,
    clientsClaim: true,
    // runtimeCaching: [ // 如果你需要加载 CDN 资源，请配置该选项，如果没有，可以不配置。
    //   // CDNs - should be CacheFirst, since they should be used specific versions so should not change
    //   {
    //     urlPattern: /^https:\/\/cdn\.jsdelivr\.net\/.*/, // 可替换成你的 URL
    //     handler: 'CacheFirst'
    //   },
    //   {
    //     urlPattern: /^https:\/\/at\.alicdn\.com\/.*/, // 可替换成你的 URL
    //     handler: 'CacheFirst'
    //   }
    // ]
}