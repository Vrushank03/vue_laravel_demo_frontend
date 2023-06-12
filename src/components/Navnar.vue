<template>

    <nav class="navbar navbar-dark bg-dark justify-content-end">
        <li class="nav-item dropdown me-2">

            <a class="text-decoration-none text-light  dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink"
                role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img :src="user.avatar" class="image-fluid rounded-circle" width="50" height="50" alt="">
                {{ user.first_name+" "+user.last_name }}            
            </a>

            <ul class="dropdown-menu dropdown-menu-dark " aria-labelledby="navbarDarkDropdownMenuLink">
                <li>
                    <router-link to="/logout" class="dropdown-item" @click="userlogout()">logout</router-link>
                </li>
            </ul>

        </li>
    </nav>

</template>
  
<script>


    export default {

        name:'NavbarTemplete',

        props: ['user'],

        methods: {
            
            userlogout() {

                this.$emit('logout');
                
                },        
            
            }

    };


</script>
  