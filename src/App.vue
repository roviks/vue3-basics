<script setup>
import { ref } from 'vue'

import { PAGES, ROUTES } from '@/constants/routes'
import VHeader from '@/components/VHeader.vue'
import VNav from '@/components/nav/VNav.vue'
import ActivitiesPage from '@/pages/ActivitiesPage.vue'
import ProgressPage from '@/pages/ProgressPage.vue'
import TimelinePage from '@/pages/TimelinePage.vue'
import { normalizePageHash } from '@/utils/normalize-page-hash'

const currentPage = ref(normalizePageHash(ROUTES))

const activities = ['Coding', 'Reading', 'Training']

function navigateToPage(page) {
  currentPage.value = page
}
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <VHeader @go-to-home="navigateToPage($event)" />

    <main class="flex-grow">
      <ActivitiesPage :activities="activities" v-show="currentPage === PAGES.activities" />
      <ProgressPage v-show="currentPage === PAGES.progress" />
      <TimelinePage v-show="currentPage === PAGES.timeline" />
    </main>

    <VNav :current-page="currentPage" @navigate="navigateToPage($event)" />
  </div>
</template>

<style scoped></style>
