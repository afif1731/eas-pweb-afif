<script setup>

</script>

<template>
    <div class=" container-fluid ">
        <div class=" utama row-1 border border-3 border-primary border-opacity-50 shadow w-auto rounded-3">
            <div class=" col p-3">
                <h3 class=" text-center fw-bold mb-5">LOGIN</h3>
                <form async>
                    <div class="row mb-4">
                        <label for="inputEmail" class="col-sm-2 col-form-label fw-bold">Email</label>
                        <div class="col-sm-10">
                        <input type="email" class="form-control" v-model="inputEmail" required>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <label for="inputPassword" class="col-sm-2 col-form-label fw-bold">Password</label>
                        <div class="col-sm-10">
                        <input type="password" class="form-control" v-model="inputPassword" required>
                        </div>
                    </div>
                    <button type="submit" @click="doLogin()" class="btn btn-lg  btn-primary mt-3 ">Sign in</button>
                    </form>
                    <div>
                        <p class=" text-center mt-4">Don't have an Account? <a href="/register" class=" link-primary">Register</a></p>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            inputEmail: "",
            inputPassword: "",
            currstat: "wait"
        }
    },
    methods: {
        async doLogin() {
            if(this.inputEmail != "" && this.inputPassword != "") {
                await axios.post('http://127.0.0.1:3000/api/kategori', {
                    email: this.inputEmail,
                    password: this.inputPassword
                }).then((res) => {
                    document.cookie = "usr=" + res.data.user.id + "; max-age=7200"
                })
            }
        }
    }
}
</script>

<style>
    .utama {
        margin: 5rem 30%
    }
    @Media (max-width: 991px) {
        .utama {
            margin: 5rem 7%
        }
    }
</style>