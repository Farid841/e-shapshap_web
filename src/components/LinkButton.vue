<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
    btnType: String,
    link: String,
    class: {
        type: String,
        default: "text-sm sm:text-md md:text-base"
    }
});

const baseClasses = ref('font-theme-heading font-medium px-6 py-2 rounded shadow-md cursor-pointer transition duration-200');
const primaryClasses = ref('bg-blue-500 text-white hover:bg-blue-600 focus:bg-blue-600 active:bg-blue-700 border-2 border-transparent hover:border-theme-primary hover:text-theme-primary mr-5');
const mutedClasses = ref('bg-gray-100 text-gray-500 hover:bg-white border-2 border-transparent hover:border-theme-grayish-blue hover:text-theme-grayish-blue');
</script>

<template>
    <a v-if="props.btnType === 'primary'" :href="props.link" v-smooth-scroll :class="[baseClasses, primaryClasses, props.class]">
        <slot></slot>
    </a>
    <a v-if="props.btnType === 'muted'" :href="props.link" v-smooth-scroll :class="[baseClasses, mutedClasses, props.class]">
        <slot></slot>
    </a>
</template>
