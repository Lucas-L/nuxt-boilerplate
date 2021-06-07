/* eslint-disable no-empty-pattern */
/* eslint-disable no-async-promise-executor */

export const state = () => ({
})

export const actions = {
    // async nuxtServerInit({ dispatch }) {
    //     await dispatch('getData')
    // },
    setData({ commit }, data) {
        commit('setData', data)
    },
}

export const getters = {
    getData(s) {
        return s
    },
}

export const mutations = {
    setData(s, payload) {
        Object
            .entries(
                Object
                    .entries(payload)
                    .reduce((accu, [key, value]) => ({
                        ...accu,
                        ...Object.keys(accu).includes(key) && { [key]: value },
                    }), { ...s }),
            )
            .forEach(([key, value]) => { if (s[key] !== value) s[key] = value })
    },
}
