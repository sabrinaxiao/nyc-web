<template>
    <nav>
        <v-toolbar flat app>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase purple--text">
                <span class="font-weight-bold font display-1">nyc </span>
                <span class ="text-uppercase pink--text font-weight-light title"> Hot Spots</span>
            </v-toolbar-title>
        </v-toolbar>

        <v-navigation-drawer v-model="drawer" app class="indigo">
            <p>test</p>
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    data(){
        return{
            drawer: false
        }
    }
}
</script>