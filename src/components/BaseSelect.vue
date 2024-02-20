<script setup>
import { computed } from 'vue'

import { XMarkIcon } from '@heroicons/vue/24/outline'
import BaseButton from './BaseButton.vue'
import { isSelectOptionsValid, isUndefinedOrNull, isNumberOrNull } from '@/utils/validators'

const props = defineProps({
  selected: Number,
  options: {
    required: true,
    type: Array,
    validator: isSelectOptionsValid
  },
  placeholder: {
    required: true,
    type: String
  }
})

const emit = defineEmits({
  select: isNumberOrNull
})

const isNotSelected = computed(() => isUndefinedOrNull(props.selected))
</script>
<template>
  <div class="flex gap-2">
    <BaseButton @click="emit('select', null)">
      <XMarkIcon class="h-8" />
    </BaseButton>
    <select
      name=""
      id=""
      class="w-full truncate rounded bg-gray-100 px-2 py-1 text-2xl"
      @change="emit('select', +$event.target.value)"
    >
      <option disabled :selected="isNotSelected" value="">
        {{ placeholder }}
      </option>
      <option
        :selected="selected === value"
        v-for="{ value, label } in options"
        :key="value"
        :value="value"
      >
        {{ label }}
      </option>
    </select>
  </div>
</template>
