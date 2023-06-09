<template>
    <div class="container bg-light rounded shadow">
        <div class="fs-1 text-danger mb-3">
            Add New User
        </div>
        <form >
            <div class="row g-5">

                <div class=" form-group col-6">
                    <label for="first_name" class="form-label float-start">First Name</label>
                    <input type="text" class="form-control " id="first_name" name="first_name"  placeholder="first name" v-model="user.first_name" required>
                </div>

                <div class="form-group col-6 ">
                    <label for="last_name" class="form-label float-start">Last Name</label>
                    <input type="text" class="form-control " id="last_name" name="last_name" placeholder="last name"  v-model="user.last_name" required>
                </div>
                
                <div class="form-group col-12 ">
                    <label for="email" class="form-label float-start">Email</label>
                    <input type="email" class="form-control " id="email" name="email" placeholder="enter your email"  v-model="user.email" required>
                </div>

                <div class="form-group col-12 ">
                    <label for="password" class="form-label float-start">Password</label>
                    <input type="password" class="form-control " id="password" name="password" placeholder="enter your password" v-model="user.password"  required>
                </div>

                <div class="form-group col-12 ">
                    <label for="number" class="form-label float-start">Phone Number</label>
                    <input type="text" class="form-control " id="number" name="phone_number" placeholder="enter your phone number" v-model="user.phone_number"  required>
                </div>

                <div class="form-group col-12">
                    <label for="status" class="form-label float-start">Status</label>
                    <select class="form-select" v-model="user.status" >
                        <option disabled value="">Select Option</option>
                        <option  value=1 class="text-success">Active</option>
                        <option  value=2 class="text-danger">Inactive</option>
                    </select>
                </div>

                <div class="d-flex flex-row-reverse bd-highlight mb-2">
                    <button class="btn btn-outline-danger me-1 rounded-pill" @click="saveUser" style="width: 10%;">Add</button>
                    <router-link class="btn btn-outline-secondary rounded-pill me-2" to="/" style="width: 10%;">Cancel</router-link> 
                </div>

            </div>
        </form>
    </div>
</template>
  
<script>

    import axios from 'axios';

    export default {

        name:'AddUser',

        data() {

            return {

                user: { 

                    first_name: '',
                    last_name:'',
                    email: '',
                    password:'',
                    phone_number:'',
                    status:'',
                    
                },

                success:''
            };

        },

        methods: {

            async saveUser() {

                let response = await axios.post('http://127.0.0.1:8000/api/create-user',this.user);

                if (response.data.message === 'success') {

                    const message = response.data.message;
                    this.$router.replace({ path: '/', query: { message } });        

                }
            }
        }
    };

</script>
  