<template>
    <div class=" m-5 ">
        <h1 class=" text-center fw-bold px-5 py-3 ">Welcome, {{ jalan.usernama }}</h1>
    </div>
    <div class=" container-fluid">
        <div class="utama row-1">
            <div class=" col border border-3 border-black border-opacity-50 shadow w-auto p-4 rounded-3 mb-5">
                <div>
                    <h3 class=" text-center fw-bold px-5 py-3 ">halo</h3>
                </div>
                <div>
                    <p class=" fs-5 fw-normal ">Your Current Status: {{ jalan.statusny }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { jalan } from '../../public/jees'
export default {

    methods: {
        async dapetdata() {
            await jalan.getdata()
        }
    },
    beforeMount() {
        this.dapetdata()
    }
}
</script>

<style scoped>
    .utama {
        margin: 1rem 15%
    }
    .bloggmbar {
        width: 300px;
    }

</style>