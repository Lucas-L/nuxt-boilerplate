require('dotenv').config()

const redirectSSL = require('redirect-ssl')
const logger = require('consola').withScope('nuxt')
const resolveConfig = require('tailwindcss/resolveConfig')
const tailwindConfig = require('./tailwind.config')

const color = '#ffffff'

const config = async () => {
    const meta = [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Craft is an NFT marketplace owned by the community. Each week, users will earn $CFT tokens based on their buying and selling activities. Craft is currently under development. Subscribe to the newsletter to be informed of the project progress.' },
        { name: 'twitter:title', content: 'Craft | NFT Marketplace' },
        { name: 'twitter:url', content: 'https://alpha.craft.network' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@craftdotnetwork' },
        { name: 'twitter:image', content: 'https://craft-landing.herokuapp.com/images/banner.png' },
        { name: 'twitter:description', content: 'Craft is an NFT marketplace owned by the community. Each week, users will earn $CFT tokens based on their buying and selling activities. Craft is currently under development. Subscribe to the newsletter to be informed of the project progress.' },
        { name: 'og:url', content: 'https://alpha.craft.network' },
        { name: 'og:title', content: 'Craft | NFT Marketplace' },
        { name: 'og:description', content: 'Craft is an NFT marketplace owned by the community. Each week, users will earn $CFT tokens based on their buying and selling activities. Craft is currently under development. Subscribe to the newsletter to be informed of the project progress.' },
        { name: 'og:image', content: 'https://craft-landing.herokuapp.com/images/banner.png' },
    ]

    const link = [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color },
    ]

    const script = []

    logger.info({
        global: {
            version: process.env.npm_package_version,
        },
    })

    return {
        head: {
            htmlAttrs: {
                lang: 'en',
            },
            title: 'Craft and sell unique NFTs on ICON blockchain — Craft',
            meta,
            link,
            script,
        },

        components: true,

        /*
         ** Customize the progress-bar color
         */
        loading: { color, height: '4px' },

        serverMiddleware: [
            redirectSSL.create({
                enabled: process.env.NODE_ENV === 'production',
            }),
        ],

        /*
         ** Environment variables
         */
        env: {
            isDev: process.env.NODE_ENV === 'development',
            // baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:' : '',
            tailwindConfig: resolveConfig(tailwindConfig),
        },

        /*
         ** Global CSS
         */
        css: [
            '~/assets/styles/fonts.css',
            '~/assets/styles/global.css',
            '~/assets/styles/overrides.css',
            '~/assets/styles/animations.css',
            '~/assets/styles/transitions.css',
            '~/assets/styles/typography.css',
            '~/assets/styles/utils.css',
        ],

        /*
         ** Tailwind configuration
         */
        tailwindcss: {
            configPath: '../tailwind.config.js',
            cssPath: '~/assets/styles/tailwind.css',
            exposeConfig: true,
        },

        /*
         ** Color mode configuration
         */
        colorMode: {
            preference: 'light',
            fallback: 'light',
            componentName: 'color-scheme',
        },

        /*
         ** Plugins to load before mounting the App
         */
        plugins: [
            { src: '~/plugins/element' },
            { src: '~/plugins/mixin' },
            { src: '~/plugins/vue-click-outside', mode: 'client' },
            { src: '~/plugins/vue-fragment' },
            { src: '~/plugins/vue-mq' },
            { src: '~/plugins/vue-scrollto' },
            { src: '~/plugins/vue-skeleton' },
            { src: '~/plugins/vue-time-ago', mode: 'client' },
            { src: '~/plugins/vuex-persist', mode: 'client' },
        ],

        /*
         ** Nuxt.js modules
         */
        modules: [
            // '@nuxtjs/firebase',
            '@nuxtjs/robots',
            '@nuxtjs/device',
        ],

        /*
         ** Nuxt.js build modules
         */
        buildModules: [
            '@teamnovu/nuxt-breaky',
            '@nuxtjs/sitemap',
            '@nuxtjs/tailwindcss',
            '@nuxtjs/color-mode',
        ],

        /*
         ** Firebase module configuration
         */
        // firebase: {
        //     config: {
        //         apiKey: process.env.FIREBASE_API_KEY,
        //         authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        //         databaseURL: process.env.FIREBASE_DATABASE_URL,
        //         projectId: process.env.FIREBASE_PROJECT_ID,
        //         storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        //         messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
        //         appId: p@rocess.env.FIREBASE_APP_ID,
        //         measurementId: process.env.FIREBASE_MEASUREMENT_ID,
        //     },
        //     services: {
        //         auth: true,
        //         firestore: true,
        //         storage: true,
        //         functions: true,
        //         database: true,
        //         analytics: true,
        //     },
        // },

        /*
         ** Sitemap generation configuration
         */
        sitemap: {
            hostname: process.env.SITE_URL,
            gzip: true,
        },

        /*
         ** Source directory
         */
        srcDir: 'src/',

        /*
         ** Production base directory
         */
        router: {
            base: '/',
        },

        /*
         ** Build configuration
         */
        build: {
            extractCSS: { ignoreOrder: true },
            html: {
                minify: {
                    collapseBooleanAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    minifyCSS: true,
                    minifyJS: true,
                    trimCustomFragments: true,
                    removeComments: true,
                    collapseWhitespace: true,
                    collapseInlineTagWhitespace: true,
                },
            },
            /*
             ** You can extend webpack config here
             */
            extend(configuration, { isDev, isClient }) {
                configuration.resolve.alias.vue = 'vue/dist/vue.common'

                configuration.node = {
                    fs: 'empty',
                }

                configuration.module.rules.push({
                    test: /\.worker\.js$/,
                    use: { loader: 'worker-loader' },
                })

                if (isDev && isClient) {
                    configuration.module.rules.push({
                        enforce: 'pre',
                        test: /\.(js|vue)$/,
                        loader: 'eslint-loader',
                        exclude: /(node_modules)/,
                    })
                }
            },
            babel: {
                plugins: [
                    '@babel/plugin-proposal-optional-chaining',
                    '@babel/plugin-proposal-nullish-coalescing-operator',
                ],
            },
        },

        render: {
            bundleRenderer: {
                shouldPreload: (file, type) => {
                    if (type === 'font') {
                        return /.woff2/.test(file)
                    }
                    return ['script', 'style'].includes(type)
                },
            },
        },

        /*
         ** Generate configuration
         */
        generate: {
            fallback: true,
            exclude: [/^\/dev/],
        },
    }
}

export default config
