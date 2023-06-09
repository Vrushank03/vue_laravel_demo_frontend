<template>

    <div class="p-3 bg-body text-start border-bottom fs-6 category" v-for="category in blogsCategories" :key="category.category_id" @click="handleCategoryClick(category.category_id)">
        {{ category.category_name }}
    </div>
</template>
  
<script>


    export default {

        name:'CategoryTemplete',

        props: ['blogsCategories','filterByCategory'],

        methods: {

            handleCategoryClick(categoryId) {

                this.filterByCategory(categoryId);

            },
        }

    };
</script>
  