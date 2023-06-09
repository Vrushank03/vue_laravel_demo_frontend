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
                    <router-link to="/logout" class="dropdown-item" @click="logout()">logout</router-link>
                </li>
            </ul>
        </li>
    </nav>

    <div class="container-fluid  w-75">

        <div class="row g-5" >

            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 text-dark fs-1 ">
                MY BLOG
            </div>

            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12  fs-5 mt-3 mb-0">
                Welcome to the blog of {{ user.first_name+" "+user.last_name }}
            </div>

            <div class="col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8">
                
                <BlogTemplete  :blogs="blogs"/>

            </div>

            <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 ">
                <div class="card w-100 my-5 shadow border-0 rounded-0">
                    <img :src="user.avatar" alt="image" class="img-fluid  w-100 profile-image">
                    <div class="card-body">
                        <h5 class="card-title fs-3 text-dark text-uppercase text-start pb-3">{{ user.first_name+" "+user.last_name }}</h5>
                        <div class="card-text text-body text-start pb-3 fw-light">
                           {{ user.about_me}}
                        </div>
                    </div>
                </div>

                <div  class="my-5 shadow">

                    <div class="border-bottom bg-light p-3 fs-3 text-dark text-start">
                        Popular Category
                    </div>
                    <div class="d-flex flex-column bg-body mb-3">

                        <div class="p-3 bg-body text-start border-bottom fs-6 category" @click="filterbyCategory('')">
                            All
                        </div>
                                   
                       <CategoryTemplete :blogsCategories="blogsCategories" :filterByCategory="filterbyCategory"/>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>
<script>

    import axios from 'axios';

    import baseurl from '../../configure.json';

    import BlogTemplete from './BlogTemplete.vue';

    import CategoryTemplete  from './CategoryTemplete.vue';

    
    export default {

        name:'BlogData',

        components: {

            BlogTemplete,
            CategoryTemplete

        },

        data() {

            return {

              blogs:[],
              user:[],
              blogsCategories:[],

            };
        },

        async mounted() {

            let response = await axios.post(baseurl.baseurl+'blogs');
            this.blogs = response.data.blogs;
            this.user   = response.data.user;
            this.blogsCategories = response.data.blogsCategories;
            
        },

        methods: {

            async logout() {

                    window.localStorage.setItem('token','');

                },

            async filterbyCategory(categoryId){

                let filterresponse = await axios.post(baseurl.baseurl+'blogs',{category_id:categoryId});
                this.blogs = filterresponse.data.blogs;

            }
        },
       

    };
</script>

<style>

    .image{
        height: 45vh !important;
    }

    .profile-image{
        height: 40vh !important;
    }

    .shadow {
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.35) !important;
    }

    .category:hover {
        background-color: 	#C0C0C0 !important;
    }

</style>