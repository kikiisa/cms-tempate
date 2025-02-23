<script setup>
import axios from "../http/api";

import { ref,onMounted } from "vue";
import FeedBackComponents from "../components/FeedBackComponents.vue";
const dataBerita = ref([]);
const dataCategoryLimit3 = ref([]);
const dataLayanan = [
    {
      id:1,
      label:"BWS",
      link:"https://bwssulawesi2gorontalo.com/download",
      icon:"https://cdn-icons-png.flaticon.com/128/1302/1302002.png",
    },
    {
      id:2,
      label:"SRIKANDI",
      link:"/",
      icon:"https://cdn-icons-png.flaticon.com/128/858/858821.png",
    },
    {
      id:3,
      label:"SIMPEG",
      link:"/",
      icon:"https://cdn-icons-png.flaticon.com/128/3177/3177440.png",
    },
];

/**
 * Get data category from API, and assign it to dataCategoryLimit3
 * 
 * @returns {Promise<void>}
 */
const getDataCategory = async () => {
  const response = await axios.get("/categories");
  dataCategoryLimit3.value = response.data;
  console.log(dataCategoryLimit3.value);
};

const getDataBerita = async () => {
  const response = await axios.get("/posts");
  dataBerita.value = response.data;
  console.log(dataBerita.value);
};

const movePage = (data) => 
{
    window.location.href = data;
}

onMounted(() => {
  getDataBerita();
  getDataCategory();
});
</script>
<template>
  <div>
    <div class="service">
      <div class="flex flex-col justify-start mt-10 py-2">
        <div class="title-header">
          <h1 class="font-bold text-2xl text-slate-700">Layanan Terbaru</h1>
        </div>
        <div class="menu mt-3">
          <div class="grid lg:grid-cols-4 grid-cols-3 gap-5">
            <div
                @click="movePage(service.link)"
              v-for="service in dataLayanan"
              :key="service.id"
              class="menu-1 p-4 cursor-pointer bg-blue-600 text-white text-center rounded flex-col items-center justify-center"
            >
              <img
                :src="service.icon"
                alt="logo si news"
                class="w-12 h-12 m-auto"
              />
              
              <h3 class="font-bold text-white">{{ service.label }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="kategori">
      <div class="flex flex-col justify-start py-2">
        <div class="title-header">
          <h1 class="font-bold text-2xl text-slate-700">Kategori</h1>
        </div>
        <div class="menu mt-3">
          <div class="grid lg:grid-cols-3 grid-cols-3 gap-5">
            <div
              @click="$router.push(`/category/${category.id_kategori}`)"
              v-for="category in dataCategoryLimit3"
              :key="category.id_kategori"
              class="menu-1  cursor-pointer p-4 bg-blue-600 text-white text-center rounded flex-col items-center justify-center"
            >
              <!-- <img :src="service.icon" alt="logo si news" class="w-12 h-12 m-auto"> -->
                
              <h3 class="font-bold text-white">{{ category.nama_kategori }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FeedBackComponents />
  </div>
</template>
