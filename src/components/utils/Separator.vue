<template>
    <div :class="[`px-${paddingX}`, `py-${paddingY}`, { ['h-full']: isVertical }]">
        <div :class="[isVertical ? 'w-1 h-full' : 'h-1 w-full', `bg-${background}`]" />
    </div>
</template>

<script>
export default {
    props: {
        isVertical: {
            type: Boolean,
            default: false,
        },
        paddingX: {
            type: Number,
            default: 0,
        },
        paddingY: {
            type: Number,
            default: 0,
        },
        background: {
            type: String,
            default: 'grey-400',
        },
    },
}
</script>
