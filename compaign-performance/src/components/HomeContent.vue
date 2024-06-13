<template>
  <main class="home-container">
    <h1>Welcome to the Wonderkind FE Coding Assessment Dashboard!</h1>
    <p>
      This application is designed to provide a comprehensive overview of the performance metrics
      for various job vacancy marketing campaigns across different platforms.
    </p>
  </main>
</template>
<style scoped>
.home-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f5f5f5;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
}

.home-container h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
}

.home-container p {
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
}

@media (max-width: 600px) {
  .home-container {
    padding: 10px;
  }

  .home-container h1 {
    font-size: 2rem;
  }

  .home-container p {
    font-size: 1rem;
  }
}
</style>

<!-- <template>
    <div class="job-vacancies">
      <h1>Job Vacancies</h1>
      <div v-for="job in filteredJobs" :key="job.id" class="job-card">
        <h2>{{ job.vacancy }}</h2>
        <p class="location">{{ job.location }}</p>
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
    </div>
  </template>
  
  <script setup lang="ts">
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
  
  // Specify the ID you want to filter
  const selectedId = 1;
  
  // Filter the job based on the selected ID
  const filteredJobs: Job[] = jobData.filter(job => job.id === selectedId);
  </script>
  
  <style scoped>
  .job-vacancies {
    padding: 20px;
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
    border-radius: 8px;
  }
  
  .job-card {
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .job-card h2 {
    margin-top: 0;
    color: #333;
  }
  
  .location {
    font-size: 14px;
    color: #777;
    margin-bottom: 16px;
  }
  
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
   -->
