<script setup>
  import SearchComponents from "./components/SearchComponents.vue";
  import NavBottomComponents from "./components/NavBottomComponents.vue";
  import CardNewsComponents from "./components/CardNewsComponents.vue"
  const dataLayanan = [
    {
      id:1,
      label:"PPID",
      link:"/",
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
</script>
<template>
  <div>
    <header>
      <div class="image-logo flex flex-row justify-center lg:mt-4">
        <div class="w-full lg:w-1/2 bg-blue-700 p-3 rounded-lg flex flex-col justify-center">
          <div class="title-header relative top-13 flex flex-row justify-center">
            <h1 class="text-center text-white text-5xl font-bold">SI <span class=" text-yellow-300">NEWS</span> </h1>
            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-12 text-white ms-3 mt-1">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
            </svg>
          </div>
          <div class="subtitle text-white text-center font-bold">
              Dapatkan Berita Dan Informasi Terbaru
          </div>
          <SearchComponents class="relative top-5"/>
        </div>
      </div>
    </header>
    <main class="lg:w-1/2 w-full mx-auto lg:p-0 p-3 mb-20">
      <div class="service">
        <div class="flex flex-col justify-start mt-10 py-2">
          <div class="title-header">
            <h1 class=" font-bold text-2xl text-slate-700">Layanan Terbaru</h1>
          </div>
          <div class="menu mt-3">
              <div class="grid lg:grid-cols-4 grid-cols-3 gap-5">
                <div v-for="service in dataLayanan" :key="service.id"  class="menu-1 p-4 bg-blue-600 text-white text-center rounded flex-col items-center justify-center">
                  <img :src="service.icon" alt="logo si news" class="w-12 h-12 m-auto">
                  <h3 class="font-bold text-white">{{ service.label }}</h3>
                </div>
              </div>
          </div>
        </div>
      </div>
      <div class="berita mt-3">
        <div class="grid lg:grid-cols-2 gap-3">  
          <CardNewsComponents/>
          <CardNewsComponents/>
        </div>
      </div>
    </main>
   <footer>
      <NavBottomComponents/>
   </footer>
  </div>
</template>
