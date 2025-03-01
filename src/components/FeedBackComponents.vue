<script setup>
import { ref } from 'vue';
import axios from 'axios';
import baseURL from '../http/url';
import ToastPlugin, { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';

const toast = useToast();
const penilaian = ref([
 
  {
    id:2,
    label:"😐",
    value:"tidak_Puas",
    name:"Tidak Puas"
  },
  {
    id:3,
    label:"😀",
    value:"puas",
    name:"Puas"
  },
  {
    id:4,
    label:"😍",
    value:"sangat_puas",
    name:"Sangat Puas"
  },
  {
    id:5,
    label:"😊",
    value:"cukup_puas",
    name:"Cukup Puas"
  }
]);
const formFeedback = ref({
  name: '',
  penilaian:'',
  pengguna:'',
  saran:'',

});
const postFeedback =  async () => {
    const response = await axios.get("add-feedback", {
    params: {
      name: formFeedback.value.name,
      pengguna:formFeedback.value.pengguna,
      penilaian:formFeedback.value.penilaian,
      saran:formFeedback.value.saran
    }
  });
  if(response.status == 200) {
    toast.success("Terima Kasih Telah Memberikan Penilaian", { timeout: 1000,position:'top-right' });
    formFeedback.value = {
      name: '',
      penilaian:'',
      pengguna:'',
      saran:'',
    };
  }else{
    toast.error("Terjadi Kesalahan", { timeout: 1000,position:'top-right' });
  }

};
</script>
<template>
  <div class="mt-10 mb-4">
    <h2 class="font-bold text-2xl text-center mb-4">BERI KAMI PENILAIAN</h2>
    <div class="flex flex-wrap justify-center mb-2">
        <button type="button" v-for="item in penilaian" :key="item.id" @click="formFeedback.penilaian = item.value" class="flex flex-col py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            <span class="mx-auto text-3xl">{{ item.label }}</span>
            <h3 class="font-bold">{{ item.name }}</h3>
        </button>
      
    </div>
    <div class="flex flex-col justify-center">
        <form @submit.prevent="postFeedback">
          <div class="mb-2">
              <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Lengkap</label>
              <input type="text" v-model="formFeedback.name" id="text" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Nama Lengkap" required />
          </div>
          <div class="mb-5">
            <h1 class="font-bold text-center mb-3 uppercase">Pengguna</h1>
            <div class="flex flex-row justify-center">
                <button @click="formFeedback.pengguna = 'internal'" type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Internal </button>
                <button @click="formFeedback.pengguna = 'external'" type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">External</button>
            </div>
          </div>
          <div class="mb-5">            
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apa Saran Masukan Anda ?</label>
            <textarea id="message" v-model="formFeedback.saran" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
          </div>
          <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Simpan</button>
        </form>
    </div>
  </div>
</template>
