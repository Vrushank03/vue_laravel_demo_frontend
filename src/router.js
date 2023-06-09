import {createWebHistory,createRouter} from 'vue-router'
import UserData from './components/UserData.vue';
import AddUser from './components/AddUser.vue';
import UpdateUser from './components/UpdateUser.vue';
import BlogData from'./components/Blog.vue';
import UserLogin from'./components/UserLogin.vue';

const routes =[
    {
        name:'userdata',
        path:'/',
        component:UserData,
    },
    {
        name:'adduser',
        path:'/add-user',
        component:AddUser,
    },
    {
        name:'updateuser',
        path:'/update-user/:id',
        component:UpdateUser,
    },
    {
        name:'deleteuser',
        path:'/delete-user/:id',
        component:UserData,
    },
    {
        name:'blogs',
        path:'/blogs',
        component:BlogData,
    },
    {
        name:'userlogin',
        path:'/userlogin',
        component:UserLogin,
    },
    {
        name:'logout',
        path:'/logout',
        component:UserLogin,
    },
    
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;