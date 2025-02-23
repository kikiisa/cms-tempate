<script setup>
import { onMounted, ref } from "vue";
import CardNewsComponents from "../components/CardNewsComponents.vue";
const route = useRoute();
import api from "../http/api";
import { useRoute } from "vue-router";
const dataNews = ref([]);

const getDataNews = async () => {
    const response = await api.get("/postbyid/" + route.params.id);
    dataNews.value = response.data;
    console.log(dataNews.value);
}
onMounted(() => {
    getDataNews();
})
</script>
<template>
  <div>
    <div class="berita mt-3 py-4">
      <div class="grid lg:grid-cols-2 gap-3">
        <CardNewsComponents  v-for="news in dataNews" :slug="news.slug_berita" :key="news.id" :gambar="news.gambar" :data="news.id" :title="news.judul_berita"/>
      </div>
    </div>
  </div>
</template>
