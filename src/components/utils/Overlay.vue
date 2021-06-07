<template>
    <transition name="fade">
        <section
            class="fixed top-0 left-0 w-full h-full flex-center bg-black z-90 pointer-events-none"
            :class="`bg-opacity-${opacity}`"
        />
    </transition>
</template>

<script>
export default {
    props: {
        opacity: {
            type: Number,
            default: 50,
        },
    },
}
</script>
