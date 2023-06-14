<template>

    <form @submit.prevent="userlogin" class="bg-body login">

        <div class="container rounded shadow ">

            <div class="row g-3 justify-content-center">
    
                <div class="col-12 fs-1 text-danger mb-3">
                    <b>Login</b>
                </div>
        
                <div class="form-group col-12">
                    <label for="email" class="form-label float-start">Email</label>
                    <input type="email" class="form-control" :class="{ 'is-invalid': !isEmailValid && formSubmitted }" id="email" name="email" placeholder="enter your email" v-model="user.email" >
                    <div v-if="!isEmailValid && formSubmitted" class="invalid-feedback text-start">{{ emailErrorMessage }}</div>
                </div>
        
                <div class="form-group col-12">
                    <label for="password" class="form-label float-start">Password</label>
                    <input type="password" class="form-control" :class="{ 'is-invalid': !isPasswordValid && formSubmitted }" id="password" name="password" placeholder="enter your password" v-model="user.password" >
                    <div v-if="!isPasswordValid && formSubmitted" class="invalid-feedback text-start">{{ passwordErrorMessage }}</div>
                </div>
        
                <div class="d-flex flex-row-reverse bd-highlight mb-2">
                    <button class="btn btn-outline-danger me-1 rounded-pill" style="width: 10%;">Add</button>
                </div>
    
            </div>
            {{ success }}

        </div>

    </form>

  </template>
  
  <script>

    import axios from 'axios';

    import baseurl from '../../configure.json';
    
    export default {

        name: 'UserLogin',

        data() {
            
            return {

                user: {

                    email: '',
                    password: '',

                },

                success: '',

                formSubmitted: false,

                emailErrorMessage: '', 

                passwordErrorMessage: '',
            };

        },

        methods: {

            async userlogin() {

                this.formSubmitted = true;
        
                if (this.isPasswordValid && this.isEmailValid) {

                    let response = await axios.post(baseurl.baseurl + 'user-login', this.user)
            
                    if (response.data.success === '1') 
                    {

                        this.success = response.data.message;
                        const token = response.data.token;
                        window.localStorage.setItem('token', token)
                        axios.defaults.headers.common['Authorization'] = `Bearer `+window.getToken;
                        this.$router.replace('/blogs');

                    } 
                    else 
                    {

                        this.success = response.data.message;
                        this.$router.replace('/userlogin');

                    }
                } 

                else {

                    this.passwordErrorMessage = this.isPasswordValid ? '' : 'Password must have at least 6 characters';
                    this.emailErrorMessage = this.isEmailValid ? '' : 'Please enter a valid email';

                }
            }

        },

        computed: {

            isPasswordValid() {

                return this.user.password.length > 5; 

            },

            isEmailValid() {

                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(this.user.email);

            },
        },
    };
  </script>
  
<style scoped>
    .is-invalid {

        border: 1px solid red;

    }
    .invalid-feedback {

        color: red;
        font-size: 14px;

    }

    .login{

        margin-top: 15% !important;

    }
</style>
