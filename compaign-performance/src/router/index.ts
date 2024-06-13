import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JobDetails from '../components/JobDetails.vue' // Assuming you have a JobDetails component

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/job/:id', // Dynamic route for job details
    name: 'jobDetails',
    component: JobDetails,
    props: true // Pass route params as props to JobDetails component
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
