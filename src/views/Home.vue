<template>
  <div class="home">
    <h1 class= "headline">Home</h1>
    <v-container class="my-5">
      <v-layout row wrap justify-space-around class="mb-6"> 
        <v-flex xs10 md5 >
          <router-link to="/museum">
            <v-parallax height="250" src="../assets/museum.jpg" >
              <v-layout column align-center justify-center>
                <h1>museums</h1>
              </v-layout>
            </v-parallax> 
          </router-link>
        </v-flex>
        <v-flex xs10 md5>
        <router-link to="/park">
          <v-parallax height="250" src="../assets/park.jpg">
              <v-layout column align-center justify-center>
                <h1>parks</h1>
              </v-layout>
            </v-parallax> 
        </router-link>
        </v-flex>
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
