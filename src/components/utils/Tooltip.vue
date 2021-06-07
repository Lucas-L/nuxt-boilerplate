<template>
    <div
        class="
            hidden
            m:block
            tooltip
            absolute
            z-100
            w-auto
            max-w-none
            px-8
            py-4
            bg-black
            bg-opacity-85
            rounded-5
            typo-caption
            text-white
            scale-90
            whitespace-no-wrap
            select-none
            pointer-events-none
            opacity-0
            transform
            transition-composite
            will-change-all
        "
        :class="{
            [`tooltip-top bottom-full -translate-y-${translateY}`]: position === 'top',
            [`tooltip-bottom top-full translate-y-${translateY}`]: position === 'bottom',
            [`tooltip-left right-full -translate-x-${translateX}`]: position === 'left',
            [`tooltip-right left-full translate-x-${translateX}`]: position === 'right',
            ['isActive']: isActive,
        }"
    >
        <slot />
    </div>
</template>

<style lang="stylus">
.tooltip {
    @apply scale-90;
    transition-duration: .175s;
    transition-timing-function: cubic-bezier(.5, 0, 0, 1.5);
}

.tooltip-container {
    &:hover .tooltip,
    .tooltip.isActive {
        @apply opacity-100 scale-100;
    }

    &.top {
        &:hover .tooltip,
        .tooltip.isActive {
            @apply -translate-y-5;
        }
    }

    &.bottom {
        &:hover .tooltip,
        .tooltip.isActive {
            @apply translate-y-5;
        }
    }

    &.left {
        &:hover .tooltip,
        .tooltip.isActive {
            @apply -translate-x-5;
        }
    }

    &.right {
        &:hover .tooltip,
        .tooltip.isActive {
            @apply translate-x-5;
        }
    }
}

.tooltip-click-container {
    .tooltip.isActive {
        @apply opacity-100 scale-100;
    }

    &.top {
        .tooltip.isActive {
            @apply -translate-y-5;
        }
    }

    &.bottom {
        .tooltip.isActive {
            @apply translate-y-5;
        }
    }

    &.left {
        .tooltip.isActive {
            @apply -translate-x-5;
        }
    }

    &.right {
        .tooltip.isActive {
            @apply translate-x-5;
        }
    }
}
</style>

<script>
export default {
    props: {
        isActive: {
            type: Boolean,
            default: false,
        },
        position: {
            type: String,
            default: 'top',
        },
        translateX: {
            type: Number,
            default: 12,
        },
        translateY: {
            type: Number,
            default: 8,
        },
    },
}
</script>
