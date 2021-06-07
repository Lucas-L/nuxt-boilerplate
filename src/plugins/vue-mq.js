import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
    breakpoints: {
        xs: 641,
        s: 769,
        m: 1025,
        l: 1281,
        xl: Infinity,
    },
})
