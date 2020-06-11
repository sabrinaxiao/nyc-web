<template>
    <nav>
        <v-app-bar flat app>
              <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-app-bar-title class="text-uppercase">
                <span class=" white--text font-weight-bold font display-1">nyc </span>
                <span class ="pink--text font-weight-light title"> hot spots</span>
            </v-app-bar-title>
        </v-app-bar>

        <v-navigation-drawer app v-model="drawer" class="pink lighten-3">
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
                { icon: 'nature_people', title: 'Parks', route: '/park' }
            ]
        }
    }
}
</script>