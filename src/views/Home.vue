<template>
  <div class="home">
    <h1 class= "headline">Home</h1>
    <v-container class="my-3">
      <v-layout row wrap justify-space-around class="mb-6"> 
        <v-layout col wrap justify-space-around class="mb-6">
          <h1 class="subtitle-1 ">New York City is one of the greatest cities in the world and you can find attractions at every corner of the street. This website is a compilation of my personal favorite places in NYC that you should check out if you visit. Don’t forget to sign up for newsletters to be notified on the latest events in the city! </h1>
        <v-flex xs10 md5 class="mt-10">
          <router-link to="/museum">
            <v-parallax height="250" src="../assets/museum.jpeg" >
              <v-layout column align-center justify-center>
                <h1>museums</h1>
              </v-layout>
            </v-parallax> 
          </router-link>
        </v-flex>
        <v-flex xs10 md5 class= "mt-10">
        <router-link to="/park">
          <v-parallax height="250" src="../assets/park.jpg">
              <v-layout column align-center justify-center>
                <h1>parks</h1>
              </v-layout>
            </v-parallax> 
        </router-link>
        </v-flex>
        </v-layout>
      </v-layout>
        <v-layout col wrap justify-space-around class="mb-6">
        <v-flex xs10 md5>
         <router-link to="/restaurant">
          <v-parallax height="250" src="../assets/restaurant.jpg">
              <v-layout column align-center justify-center>
                <h1>restaurants</h1>
              </v-layout>
            </v-parallax> 
         </router-link>
        </v-flex>
        <v-flex xs10 md5>
         <router-link to="/sightseeing">
          <v-parallax height="250" src="../assets/sightseeing.jpg">
              <v-layout column align-center justify-center>
                <h1>sightseeing</h1>
              </v-layout>
            </v-parallax> 
         </router-link>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
   
}
</script>
