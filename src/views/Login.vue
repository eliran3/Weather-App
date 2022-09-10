<template>
    <div id="register-login">
        <p v-if="this.error">{{ this.error }}</p>
        <h1 v-if="this.currentUser">logged user: {{ this.currentUser }}</h1>

        <ul>
            <li v-for="user in userSaved" :key="user.id">{{ user.username }}</li>
        </ul>
        <br />
        <ul class="list-links">
            <li class="links"><router-link :to="'/contact'">CONTACT</router-link></li>
            <li style="display: inline"><router-link :to="'/'">HOME</router-link></li>
        </ul>
        <br />
        <input type="submit" v-if="this.log_user == 'Register'" value="Login" @click="LogUser">
        <input type="submit" v-if="this.log_user == 'Login'" value="Register" @click="LogUser">

        <div v-if="this.log_user == 'Register'">
            <h1>Register</h1>
            <input type="text" v-model="this.register.username" placeholder="Username">
            <br />
            <input type="password" v-model="this.register.password" placeholder="Password">
            <input type="password" v-model="this.register.re_typed_password" placeholder="Re-type Password">
            <br />
            <input type="submit" class="submit-user" value="Register" @click="Register">
        </div>
        <div v-else>
            <h1>Login</h1>
            <input type="text" v-model="this.login.username" placeholder="Username">
            <br />
            <input type="password" v-model="this.login.password" placeholder="Password">
            <br />
            <input type="submit" class="submit-user" value="Login" @click="Login">
        </div>
    </div>
</template>

<script>
import UserService from '../UserService';

export default {
    name: "Login",
    data() {
        return {
            userSaved: '',
            currentUser: '',
            error: '',
            log_user: 'Register',
            register: {
                username: '',
                password: '',
                re_typed_password: ''
            },
            login: {
                username: '',
                password: ''
            },
            validateFields: () => {
                if (this.log_user == 'Register') {
                    if (this.register.username.length < 6)
                    {
                        this.error = 'username too short!';
                        return false;
                    }
                    if (this.register.password === this.register.re_typed_password) {
                        if (this.register.password.length > 5) {
                            this.error = 'register success!';
                            return true;
                        }
                        else {
                            this.error = 'password not long enough!';
                            return false;
                        }
                    }
                    else {
                        this.error = 'passwords not match!';
                        return false;
                    }
                }
                else {

                }
            }
        }
    },
    async created() {
        try {
            this.userSaved = await UserService.GetUser();
        } catch (err) {
            this.error = err.message;
        }
    },
    methods: {
        LogUser() {
            if (this.log_user == 'Login')
                this.log_user = 'Register';
            else
                this.log_user = 'Login';
        },
        async Register() {
            if (this.validateFields()) {
                await UserService.AddUser(
                    this.register.username,
                    this.register.password
                );

                this.userSaved = await UserService.GetUser();
            }
        },
        async Login() {
            if (this.validateFields()) {
                try {
                    // this.currentUser = await UserService.AddUser({
                    //     "id": uuid.v4(),
                    //     "username": this.register.username,
                    //     "password": this.register.password,
                    // });
                } catch (err) {
                    this.error = err.message;
                }
            }
        }
    }
}
</script>

<style scoped>
* {
    align-content: center;
    margin: 0%;
}

#register-login {
    padding: 35%;
    color: brown;
}

.submit-user {
    margin-left: 25%;
}
</style>
