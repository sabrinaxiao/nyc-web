<template>
    <nav>
        <v-toolbar flat app>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase white--text">
                <span class="font-weight-bold font display-1">nyc </span>
                <span class ="text-uppercase pink--text font-weight-light title"> Hot Spots</span>
            </v-toolbar-title>
        </v-toolbar>

        <v-navigation-drawer v-model="drawer" app class="pink lighten-3">
            <v-list>
                <v-list-item v-for="item in items" :key=" item.title " router :to="item.route">
                    <v-list-item-icon class="white--text">
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-title-title class="white--text">{{ item.title }}</v-list-title-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    data(){
        return{
            drawer: false,
            items: [
                { icon: 'home', title: 'Home', route:'/' },
                { icon: 'terrain',title: 'Sightseeing', route:'/sightseeing' },
                { icon: 'restaurant', title: 'Restaurants', route:'/restaurant' },
                { icon: 'museum', title: 'Museums', route: '/museum' },
                { icon: 'nature_people', title: 'Parks', route: 'park' }
            ]
        }
    }
}
</script>