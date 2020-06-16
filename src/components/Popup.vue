<template>
    <div class = "text-center">
    <v-dialog v-model="dialog" max width = "600">
        <template v-slot:activator="{on, attrs}">
            <v-btn v-bind = "attrs" v-on="on">Don't miss out! </v-btn>
        </template>
        <v-card>
            <v-card-title>
                <h4 class="align-center">Get notified for exclusive events near you! </h4>
            </v-card-title>
            <v-card-text>
                <v-form class="mt-7" ref="form">
                    <v-text-field label="Email" color = "pink lighten-3" v-model="email" outlined prepend-icon="email" :rules="inputRules"></v-text-field>
                    <v-btn flat color = "green lighten-3" class="mx-0 mt-3" @click="submit">Sign up!</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
    </div>
</template>

<script>
export default {
    data(){
        return{
            email:'',
            inputRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid',
            ]
        }
    },
    methods:{
        submit(){
            if(this.$refs.form.validate()){
                console.log(this.email)
            }
        }
    }
    
}
</script>