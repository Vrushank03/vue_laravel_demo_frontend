<template>

    <div class="container bg-light">

        <div class="fs-1 text-danger ">
            User CRUD using Laravel and Vue JS
        </div>

        <div class="row">
            <div class="d-flex flex-row-reverse bd-highlight mb-2">
                <router-link to="/add-user" class="btn btn-outline-danger float-end">Add User</router-link>
            </div>
        </div>

        <div class="table-responsive   bg-light">

            <table class="table table-body table-hover">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact Number</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.user_id">
                        <td>{{ user.user_id }}</td>
                        <td>{{ user.first_name+" "+user.last_name }}</td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.phone_number }}</td>
                        <td>
                            <div class="d-flex flex-row justify-content-evenly">
                                <router-link :to="`/update-user/${user.user_id}`" class="btn btn-outline-secondary rounded-pill">Update</router-link>
                                <router-link :to="`/delete-user/${user.user_id}`" class="btn btn-outline-danger rounded-pill" @click="deleteUser(user.user_id)"> Delete </router-link>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
  
  
<script>
    import axios from 'axios';

    export default {

        name:'UserData',

        components: {
        },

        data() {

            return {

                users: [],

            };
        },
        async mounted() {

            let response = await axios.get('http://127.0.0.1:8000/api/users');
            this.users = response.data; 
        },
        
        methods: {
            async deleteUser(userId) {

                    await axios.get(`http://127.0.0.1:8000/api/delete-user/${userId}`)
                    .then(response => 
                    {
                        this.message = response.data.message;
                        this.users = this.users.filter(user => user.user_id !== userId);
                        this.$router.replace('/');                
                    })
            },
        },
    };
</script>
