<template>
    <section :class="$style.container">
        <h1 :class="$style.title">
            {{ error.statusCode }}
        </h1>
        <h2 :class="$style.info">
            {{ error.message }}
        </h2>
        <nuxt-link
            v-if="error.statusCode === 404"
            :class="$style.button"
            to="/"
        >
            Homepage
        </nuxt-link>
    </section>
</template>

<script>
export default {
    props: {
        error: {
            type: Object,
            default: () => ({}),
        },
    },
}
</script>

<style lang="stylus" module>
.title {
    margin-top 15px
    font-size 5em
}

.info {
    font-weight 300
    color #9aabb1
    margin 0
}

.button {
    margin-top 50px
}
</style>
