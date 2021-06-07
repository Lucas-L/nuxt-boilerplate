const Vue = require('vue')
const VueScrollTo = require('vue-scrollto')

Vue.use(VueScrollTo, {
    duration: 500,
    easing: 'cubic-bezier(.5, 0, 0, 1)',
    offset: 0,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true,
})
