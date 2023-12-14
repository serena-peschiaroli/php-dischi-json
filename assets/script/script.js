const { createApp } = Vue;

createApp({
    data() {
        return{
            diskList: [],
            apiUrl:'http://localhost:8888/Boolean/php-dischi-json/assets/server/server.php'
        }
        
    },
    created() {
        axios.get(this.apiUrl).then((resp) => {
            this.diskList = resp.data;
            console.log(this.diskList);
        });
    }
}).mount('#app');