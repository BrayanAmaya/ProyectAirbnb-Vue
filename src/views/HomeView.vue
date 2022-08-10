<template>
<Navbar />
<MainApp />
<VueApp />
</template>

<script>
// @ is an alias to /src

import MainApp from '@/components/MainApp.vue';
import Navbar from '@/components/Navbar.vue';
import VueApp from '@/components/VueFooter.vue';

export default {
  name: 'HomeView',
  components: {
    MainApp,
    Navbar,
    VueApp
}
}
</script>
