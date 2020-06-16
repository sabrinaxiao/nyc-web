<template>
    <nav>
        <v-app-bar flat app>
              <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-app-bar-title class="text-uppercase">
                <span class=" white--text font-weight-bold font display-1">nyc </span>
                <span class ="pink--text font-weight-light title"> hot spots</span>
            </v-app-bar-title>
        
       <v-spacer></v-spacer>
        <v-menu offset-y>
            <template v-slot:activator="{on, attrs}">
                <v-btn 
                v-bind = "attrs"
                v-on="on">
                    <v-icon left>expand_more</v-icon>
                    <span>Menu</span>
                    </v-btn>
            </template>
            <v-list>
                <v-list-item 
                v-for="item in items" :key="item.title" router :to="item.route">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        </v-app-bar>

        <v-navigation-drawer app v-model="drawer" class="pink lighten-3">
            <v-flex class="my-5">
                <Popup />
            </v-flex>
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
import Popup from './Popup'
export default {
    components: {Popup},
    data(){
        return{
            drawer: false,
            items: [
                { icon: 'home', title: 'Home', route:'/' },
                { icon: 'museum', title: 'Museums', route: '/museum' },
                { icon: 'nature_people', title: 'Parks', route: '/park' },
                { icon: 'restaurant', title: 'Restaurants', route:'/restaurant' },
                { icon: 'terrain',title: 'Sightseeing', route:'/sightseeing' },
            ]
        }
    }
}
</script>