<script setup>
import { PAGES } from '@/constants/routes'
import { CheckCircleIcon } from '@heroicons/vue/24/outline'

const emit = defineEmits(['goToHome'])
</script>

<template>
  <header class="sticky top-0 z-20 flex items-center justify-between border-b bg-white p-3">
    <a @click="emit('goToHome', PAGES.timeline)" :href="`#${PAGES.timeline}`">
      <img src="@/assets/img/logo.png" alt="Logo" class="h-9" />
    </a>

    <a @click="emit('goToHome', PAGES.progress)" :href="`#${PAGES.progress}`" class="text-sm">
      <div v-if="true" class="flex items-center gap-1">
        Day Complete!

        <CheckCircleIcon class="h-7 text-green-500" />
      </div>
      <div v-else class="flex items-center gap-1">
        <div>Progress: <span class="font-mono">20%</span></div>
        <div class="h-3 w-3 rounded-full bg-red-500"></div>
      </div>
    </a>
  </header>
</template>
