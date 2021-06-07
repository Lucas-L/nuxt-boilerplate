/* eslint-disable no-empty-pattern */
/* eslint-disable no-async-promise-executor */

import { baseUser } from '~/assets/scripts/utils/firebase'

export const state = () => ({
    isLoggedIn: false,
    ...baseUser,
})

export const actions = {
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
