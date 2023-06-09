<template>
    <div>
        <div class="card w-100 my-5 border-0 rounded-0 shadow" v-for="blog in formattedBlogs" :key="blog.blog_id">

            <img :src="blog.image" alt="" class="img-fluid w-100 image">

            <div class="card-body">
                <h5 class="card-title fs-3 text-dark text-uppercase text-start pb-3">{{ blog.title }}</h5>
                <div class="fs-5 fw-lighter text-start pb-3 ">{{blog.category.category_name +" , "+blog.formattedDate }}</div>
                <div class="card-text text-start pb-3 fw-light text-body">{{ blog.description }}</div>
                <button style="cursor: pointer;" class="btn btn-outline-dark float-start rounded-0">READ MORE</button>
            </div>

        </div>
    </div>
    
</template>
  
<script>

    import moment from 'moment';

    export default {

        name:'BlogTemplete',

        props: ['blogs'],

        computed: {

            formattedBlogs() {

                return this.blogs.map(blog => {

                    return {

                        ...blog,
                        formattedDate: moment(blog.created_at).format('MMMM D, YYYY')

                    };
                });

            }
        }
    };
</script>
  