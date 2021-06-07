import Vue from 'vue'

Vue.mixin({
    computed: {
        $mod() {
            return (n, m) => ((n % m) + m) % m
        },
        $camelToSnake() {
            return (str) => str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)
        },
        $snakeToCamel() {
            return (str) => str
                .toLowerCase()
                .replace(/([-_][a-z])/g, (group) => group.toUpperCase().replace('-', '').replace('_', ''))
        },
        $formattedValue() {
            /**
             * @param {Object} options - Options to format the value
             * @param {Number} options.value
             * @param {String} options.prefix
             * @param {String} options.suffix
             * @param {Number} options.limit
             * @param {Boolean} options.hasSNA - Scientific Notation Abbreviation
             * @return {String}
             */
            return ({
                value = isRequired('$formattedValue'),
                prefix = '',
                suffix = '',
                limit = 3,
                hasSNA = false,
            }) => {
                const [int, float] = value.toFixed(hasSNA ? 0 : limit).toString().split('.')
                const result = `${int.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}${float ? `.${float}` : ''}`.trim()

                if (!hasSNA) return `${prefix}${result} ${suffix}`.trim()

                const abbr = ['', 'K', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc', 'No', 'Dc', 'Ud', 'Dd', 'Td', 'Qad', 'Qid', 'Sxd', 'Spd', 'Ocd', 'Nod', 'Vg', 'Uvg', 'Dvg', 'Tvg', 'Qavg', 'Qivg', 'Sxvg', 'Spvg', 'Ocvg']
                const parts = result.split(',')

                if (parts.length > abbr.length) throw new Error('value number is too big')

                const partIndex = parts.length - 1
                const mantissa = value / (1000 ** partIndex)
                const mantissaFixed = mantissa.toFixed(partIndex ? 3 - String(mantissa).split('.')[0].length : 0)
                const mantissaCleared = mantissaFixed.replace(partIndex && mantissaFixed.includes('.') ? /0+$/g : '', '').replace(/\.$/, '')

                return `${prefix}${mantissaCleared}${abbr[partIndex]} ${suffix}`.trim()
            }
        },
        $isDev() {
            return process.env.isDev
        },
        $colors() {
            return process.env.tailwindConfig.theme.colors
        },
        $screens() {
            return process.env.tailwindConfig.theme.screens
        },
        $isMobile() {
            return ['xs', 's'].includes(this.$mq)
        },
        $isTablet() {
            return ['xs', 's', 'm'].includes(this.$mq)
        },
        $isDesktop() {
            return ['l', 'xl', 'xxl'].includes(this.$mq)
        },
        $isXs() {
            return ['xs'].includes(this.$mq)
        },
        $isDevice() {
            return (...args) => args.includes(this.$mq)
        },
    },
})
