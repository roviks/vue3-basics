<script setup>
import { isHourValid } from '@/utils/validators'

const props = defineProps({
  hour: {
    required: true,
    type: Number,
    validators: isHourValid
  }
})

const formattedHour = `${props.hour.toString().padStart(2, '0')}:00`
</script>
<template>
  <a
    href="#"
    class="absolute -top-4 left-1/2 -translate-x-1/2 rounded px-2 font-mono text-lg"
    :class="[
      props.hour === new Date().getHours()
        ? 'bg-purple-900 font-black text-white'
        : 'bg-gray-100 text-gray-500'
    ]"
    >{{ formattedHour }}</a
  >
</template>
