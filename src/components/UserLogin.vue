<template>

    <div class="container rounded shadow m-auto">
        <div class="row g-3  justify-content-center">

            <div class="col-12 fs-1 text-danger mb-3">
                <b>Login</b>     
            </div>

            <div class="form-group col-12 ">
                <label for="email" class="form-label float-start">Email</label>
                <input type="email" class="form-control " id="email" name="email" placeholder="enter your email"  v-model="user.email" required>
            </div>

            <div class="form-group col-12 ">
                <label for="password" class="form-label float-start">Password</label>
                <input type="password" class="form-control " id="password" name="password" placeholder="enter your password" v-model="user.password"  required>
            </div>

            <div class="d-flex flex-row-reverse bd-highlight mb-2">
                <button class="btn btn-outline-danger me-1 rounded-pill" @click="userlogin" style="width: 10%;">Add</button>
            </div>

        </div>
        {{ success }}
    </div>

</template>
  
<script>

    import axios from 'axios';

    import baseurl from '../../configure.json'


    export default {

        name:'UserLogin',

        data() {
            return {

                user: { 
                    email: '',
                    password:'',
                },

                success:''
            };
        },
        methods: {
            async userlogin() {

                let response = await axios.post(baseurl.baseurl+'user-login',this.user)

                if (response.data.success === '1') {

                    this.success=response.data.message;
                    const token = response.data.token;
                    window.localStorage.setItem('token',token)
                    this.$router.replace('/blogs');
                }
                else{

                    this.success=response.data.message;
                    this.$router.replace('/userlogin');
                    
                }
            }
        }
    };

</script>
  