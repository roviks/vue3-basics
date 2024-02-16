<script setup>
import { ref } from 'vue'

import { PAGES } from '@/constants/routes'
import VHeader from '@/components/VHeader.vue'
import VNav from '@/components/nav/VNav.vue'
import ActivitiesPage from './pages/ActivitiesPage.vue'
import ProgressPage from './pages/ProgressPage.vue'
import TimelinePage from './pages/TimelinePage.vue'

const navItems = [PAGES.timeline, PAGES.activities, PAGES.progress]

const currentPage = ref(normalizePageHash())

function normalizePageHash() {
  const hash = window.location.hash.slice(1)

  if ([PAGES.timeline, PAGES.activities, PAGES.progress].find((item) => item.title === hash)) {
    return hash
  }

  window.location.hash = navItems[0]

  return navItems[0]
}
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <VHeader />

    <main class="flex-grow">
      <ActivitiesPage v-show="currentPage === PAGES.activities" />
      <ProgressPage v-show="currentPage === PAGES.progress" />
      <TimelinePage v-show="currentPage === PAGES.timeline" />
    </main>

    <VNav :current-page="currentPage" @navigate="currentPage = $event" />
  </div>
</template>

<style scoped></style>
