<script setup>
import { onMounted, ref,watch } from "vue";
import CardNewsComponents from "../components/CardNewsComponents.vue";
const route = useRoute();
import api from "../http/api";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const dataNews = ref([]);

/**
 * Get data berita by id from API, and assign it to dataNews
 * 
 * @return {Promise<void>}
 */
const getDataNews = async () => {
    const response = await api.get("/search-post/" + route.query.keyword);
    
    dataNews.value = response.data;
    console.log(dataNews.value);
}
watch(
    () => route.query.keyword,
    async (newKeyword) => {
        if(newKeyword){
            getDataNews();
        }
    }
)
onMounted(() => {
    getDataNews();
});

</script>
<template>
  <div>
    <div class="berita mt-3 py-4">
      <h3 class="text-2xl mb-3 mt-3">Hasil pencarian : <span class="font-bold">{{ route.query.keyword }}</span></h3>
      <hr>
      <div class="grid lg:grid-cols-2 gap-3">
        <CardNewsComponents  v-for="news in dataNews" :slug="news.slug_berita" :key="news.id" :gambar="news.gambar" :data="news.id" :title="news.judul_berita"/>
      </div>
    </div>
  </div>
</template>
