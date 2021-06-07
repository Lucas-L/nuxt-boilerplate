<template>
    <component
        :is="icon"
        :class="[
            `text-${color}`,
            {
                [`w-${width}`]: !height && width,
                [`h-${height}`]: height,
            }
        ]"
        class="transition-color duration-100"
        v-bind="$attrs"
        v-on="$listeners"
    />
</template>

<script>
import set from './set'

export default {
    name: 'Icon',
    props: {
        name: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            default: 'grey-800',
        },
        width: {
            type: [Number, String],
            default: 12,
        },
        height: {
            type: [Number, String],
            default: 0,
        },
    },
    computed: {
        icon() {
            return set[this.name]
        },
    },
}
</script>
