<template>
    <footer class="py-16">
        <Container class="flex justify-between items-center">
            <div class="flex justify-start items-center">
                <nuxt-link
                    :to="{ name: 'index' }"
                    class="mr-24"
                >
                    Logo
                </nuxt-link>
                <p class="text-12">
                    © 2020 - All rights reserved
                </p>
            </div>
            <div class="flex justify-end items-center text-14">
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
    </footer>
</template>

<script>
export default {
    computed: {
        linkClass() {
            return [
                'p-10 mr-12 last:mr-0 last:pr-0 text-grey-800 hover:text-grey-900 transition-color duration-150',
            ]
        },
    },
}
</script>
