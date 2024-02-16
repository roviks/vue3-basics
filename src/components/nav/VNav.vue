<script setup>
import { ChartBarIcon, ClockIcon, ListBulletIcon } from '@heroicons/vue/24/outline'

import { PAGES } from '@/constants/routes'
import NavItem from './NavItem.vue'

defineProps(['currentPage'])

const emit = defineEmits(['navigate'])

const navItems = [
  { title: PAGES.timeline, icon: ClockIcon },
  { title: PAGES.activities, icon: ListBulletIcon },
  { title: PAGES.progress, icon: ChartBarIcon }
]
</script>

<template>
  <nav class="sticky bottom-0 z-10 bg-white">
    <ul class="flex items-center justify-around border-t">
      <NavItem
        v-for="item in navItems"
        :key="item.title"
        :href="`#${item.title}`"
        :class="{ 'pointer-events-none bg-gray-200': currentPage === item.title }"
        @click="emit('navigate', item.title)"
      >
        <component :is="item.icon" class="h-6 w-6" />
        {{ item.title }}
      </NavItem>
    </ul>
  </nav>
</template>
