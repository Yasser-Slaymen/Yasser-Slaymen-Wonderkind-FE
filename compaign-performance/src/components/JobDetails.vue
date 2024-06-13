<template>
    <div v-if="job">
      <h1>{{ job.vacancy }} - {{ job.location }}</h1>
      <div v-for="platform in job.platforms" :key="platform.name" class="platform-card">
        <h3>{{ platform.name }}</h3>
        <ul>
          <li><strong>Impressions:</strong> {{ platform.metrics.impressions }}</li>
          <li><strong>Clicks:</strong> {{ platform.metrics.clicks }}</li>
          <li><strong>Applications:</strong> {{ platform.metrics.applications }}</li>
          <li><strong>Cost Per Impression:</strong> {{ platform.metrics.costPerImpression }}</li>
          <li><strong>Cost Per Click:</strong> {{ platform.metrics.costPerClick }}</li>
          <li><strong>Cost Per Application:</strong> {{ platform.metrics.costPerApplication }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  import jobData from '../utils/data.json';
  
  interface PlatformMetrics {
    impressions: number;
    clicks: number;
    applications: number;
    costPerImpression: number;
    costPerClick: number;
    costPerApplication: number;
  }
  
  interface Platform {
    name: string;
    metrics: PlatformMetrics;
  }
  
  interface Job {
    id: number;
    vacancy: string;
    location: string;
    platforms: Platform[];
  }
  
  const route = useRoute();
  const jobId = computed(() => parseInt(route.params.id as string));
  const job = computed(() => jobData.find(job => job.id === jobId.value));
  </script>
  
  <style scoped>
  .platform-card {
    background-color: #f5f5f5;
    border-radius: 8px;
    padding: 12px;
    margin-bottom: 12px;
  }
  
  .platform-card h3 {
    margin-top: 0;
    color: #555;
  }
  
  .platform-card ul {
    list-style-type: none;
    padding-left: 0;
  }
  
  .platform-card ul li {
    margin-bottom: 6px;
  }
  
  .platform-card ul li strong {
    color: #333;
  }
  </style>
  