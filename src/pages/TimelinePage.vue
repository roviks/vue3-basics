<script setup>
import { generateTimeline } from '@/utils/generate-timeline'
import TimelineItem from '@/components/timeline/TimelineItem.vue'

const timelineItems = generateTimeline()
</script>
<template>
  <div class="mt-7">
    <ul>
      <TimelineItem
        v-for="timelineItem in timelineItems"
        :key="timelineItem.hour"
        :timeline-item="timelineItem"
      />
    </ul>
  </div>
</template>
