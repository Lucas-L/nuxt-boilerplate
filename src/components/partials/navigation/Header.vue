<template>
    <header
        class="text-14 shadow-m py-16"
        :class="$style['component-nav-header']"
    >
        <Container class="flex justify-between items-center">
            <div class="flex justify-start items-center">
                <nuxt-link
                    :to="{ name: 'index' }"
                    class="mr-24"
                >
                    Logo
                </nuxt-link>
            </div>
            <div class="flex justify-end items-center">
                <nuxt-link
                    :class="linkClass"
                    :to="{ name: 'about' }"
                >
                    About
                </nuxt-link>
                <nuxt-link
                    :class="linkClass"
                    :to="{ name: 'contact' }"
                >
                    Contact
                </nuxt-link>
                <nuxt-link
                    :class="linkClass"
                    :to="{ name: 'blog' }"
                >
                    Blog
                </nuxt-link>
            </div>
        </Container>
    </header>
</template>

<script>
export default {
    computed: {
        linkClass() {
            return [
                'p-10 mr-16 text-grey-800 hover:text-grey-900 transition-color duration-150',
            ]
        },
    },
}
</script>

<style lang="stylus" module>
.component-nav-header {

}
</style>
