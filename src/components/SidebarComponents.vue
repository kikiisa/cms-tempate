<script setup>
const props = defineProps(["toggleSidebar"]);
import { onMounted, ref } from "vue";
import axios from "../http/api";
const dataCategory = ref([]);


const dataSidebar = [
  {
    name: "example 1",
    link: "/",
  },
  {
    name: "example 2",
    link: "/",
  },
  {
    name: "bws 3",
    link: "https://flowbite.com/docs/components/sidebar/",
  },
];

</script>
<template>
  <div class="sidebar">
    <aside v-show="toggleSidebar"
      id="default-sidebar "
      class="fixed top-0  left-0 z-40 w-64 h-screen "
      aria-label="Sidenav">
      <div
        class="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700"
      >
        <ul class="space-y-2">
          <li v-for="sidebar in dataSidebar" :key="sidebar.name">
            <a
              href="#"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg
                aria-hidden="true"
                class="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>
              <span class="ml-3">{{ sidebar.name }} {{ props.toggleSidebar }}</span>
            </a>
            <hr>
          </li>
         
        </ul>
       
      </div>
    
    </aside>
  </div>
</template>
