import { reactive } from 'vue'
import axios from 'axios'

export const jalan = reactive({
    usernama: '',
    statusny: '',

    async getdata() {
        await axios.get('http://127.0.0.1:3000/api/competitors/657ab3eff40f2025904ea282').then((res) => {
            let hasil = res.data
            console.log(hasil)
            
            this.usernama = hasil.peserta
            this.statusny = hasil.status_daftar
            console.log(this.usernama)
        })
    }
})