import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
    window.onNuxtReady(() => {
        new VuexPersistence({
            modules: ['user'],
        }).plugin(store)
    })
}
