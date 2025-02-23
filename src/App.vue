<script setup>
import SearchComponents from "./components/SearchComponents.vue";
import NavBottomComponents from "./components/NavBottomComponents.vue";
import SidebarComponents from "./components/SidebarComponents.vue";
import { ref, onMounted } from "vue";

const toggle = ref(false);
const handleToggle = () => {
  toggle.value = !toggle.value;
  console.log(toggle.value);
};
</script>
<template>
  <div>
    <SidebarComponents :toggleSidebar="toggle" />
    <header>
      <div class="image-logo flex flex-row justify-center lg:mt-4">
        <div
          class="w-full lg:w-1/2 toogle-hide bg-blue-700 p-3 rounded-lg flex flex-col justify-center"
        >
          <div class="flex flex-row justify-end items-center  p-2">
            <button class="text-white cursor-pointer" @click="handleToggle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            </button>
          </div>

          <div
            class="title-header relative top-13 flex flex-row justify-center"
          >
            <h1 class="text-center text-white text-5xl font-bold">
              SI <span class="text-yellow-300">NEWS</span>
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-12 text-white ms-3 mt-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
              />
            </svg>
          </div>
          <div class="subtitle text-white text-center font-bold">
            Dapatkan Berita Dan Informasi Terbaru
          </div>
          <SearchComponents class="relative top-5" />
        </div>
      </div>
    </header>
    <main class="lg:w-1/2 w-full mx-auto lg:p-0 p-3 mb-20">
      <RouterView />
    </main>
    <footer>
      <NavBottomComponents />
    </footer>
  </div>
</template>
