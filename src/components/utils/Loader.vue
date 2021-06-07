<template>
    <div
        :class="[$style.loader, `w-${size}`, `h-${size}`, `text-${color}`]"
        class="rounded-full border-1 border-solid border-transparent animate-spin will-change-transform"
    />
</template>

<style lang="stylus" module>
.loader {
    animation-timing-function: cubic-bezier(.5, 0.1, 0.1, 0.7);
    border-top-color: currentColor !important;
}
</style>

<script>
export default {
    props: {
        color: {
            type: String,
            default: 'primary',
        },
        size: {
            type: Number,
            default: 24,
        },
    },
}
</script>
