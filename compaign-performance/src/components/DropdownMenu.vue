<template>
  <section class="navbarDropDown">
    <h1>Job Vacancies</h1>
    <div class="dropdown">
      <button class="dropbtn">Select Job</button>
      <div class="dropdown-content">
        <router-link
          v-for="job in jobs"
          :key="job.id"
          :to="'/job/' + job.id"
          @click="closeDropdown"
          >{{ job.vacancy }}</router-link
        >
      </div>
    </div>
</section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import jobData from '../utils/data.json'
import { RouterLink } from 'vue-router'

interface Job {
  id: number
  vacancy: string
  location: string
  platforms: any[]
}

const jobs = ref<Job[]>(jobData)

function closeDropdown() {
  const dropdownContent = document.querySelector('.dropdown-content')
  if (dropdownContent) {
    dropdownContent.classList.remove('show')
  }
}
</script>

<style scoped>
.navbarDropDown {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  background-color: #333;
  overflow: hidden;
  border-radius: 8px;
  width: 100%;
  margin-top: 1em;
}

.navbarDropDown h1 {
  color: white;
  display: inline-block;
  margin: 0;
  padding: 14px 16px;
}

.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown ,.dropbtn {
  cursor: pointer;
  font-size: 16px;
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

.navbarDropDown a:hover,
.dropdown:hover .dropbtn {
  background-color: #ddd;
  color: black;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
