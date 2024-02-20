<script setup>
import { ref } from 'vue'
import { TrashIcon } from '@heroicons/vue/24/outline'

import BaseButton from '@/components/BaseButton.vue'
import BaseSelect from '@/components/BaseSelect.vue'
import { PERIOD_SELECT_OPTIONS } from '@/constants/main'
import { isActivityValid } from '@/utils/validators'

defineProps({
  activity: {
    required: true,
    type: String,
    validator: isActivityValid
  }
})

const secondsToComplete = ref()
</script>
<template>
  <li class="flex flex-col gap-2 p-4">
    <div class="flex items-center gap-2">
      <BaseButton>
        <TrashIcon class="h-8" />
      </BaseButton>
      <span class="truncate text-xl">{{ activity }}</span>
    </div>
    <div>
      <BaseSelect
        class="font-mono"
        placeholder="hh:mm"
        :selected="secondsToComplete"
        :options="PERIOD_SELECT_OPTIONS"
        @select="secondsToComplete = $event"
      />
    </div>
  </li>
</template>
