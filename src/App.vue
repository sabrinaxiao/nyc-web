<template>
  <v-app>
    <Navbar />
    <v-content class="mx-7 mb-4 mt-2">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

import Navbar from '@/components/Navbar';

export default {
  name: 'App',
  components: { Navbar},
  data: () => ({
    //
  }),
};
</script>
