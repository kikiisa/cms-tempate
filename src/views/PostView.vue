<script setup>
import { onMounted, ref } from "vue";
import CardNewsComponents from "../components/CardNewsComponents.vue";
const route = useRoute();
import api from "../http/api";
import { useRoute } from "vue-router";
const dataNews = ref([]);

const getDataNews = async () => {
    const response = await api.get("/all-categories/");
    dataNews.value = response.data;
    console.log(dataNews.value);
}
onMounted(() => {
    getDataNews();
});
</script>
<template>
  <div>
    <div class="berita mt-3 py-4">
      <div class="grid lg:grid-cols-2 gap-3">
        <div
              @click="$router.push(`/category/${category.id_kategori}`)"
              v-for="category in dataNews"
              :key="category.id_kategori"
              class="menu-1  cursor-pointer p-4 bg-blue-600 text-white text-center rounded flex-col items-center justify-center"
            >
              <!-- <img :src="service.icon" alt="logo si news" class="w-12 h-12 m-auto"> -->
                
              <h3 class="font-bold text-white">{{ category.nama_kategori }}</h3>
            </div>
      </div>
    </div>
  </div>
</template>
