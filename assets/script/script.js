const { createApp } = Vue;

createApp({
    data() {
        return{
            //inizializza selectedDisk=null
            selectedDisk: null,
            diskList: [],
            apiUrl:'http://localhost:8888/Boolean/php-dischi-json/assets/server/server.php'
        }
        
    },
    created() {
        //richeista axios a server
        axios.get(this.apiUrl).then((resp) => {
            this.diskList = resp.data;
            console.log(this.diskList);
        });
    },
    methods: {
        //funzione x mostrare dettagli
        displayDiskDetails(disk) {
            this.selectedDisk = disk;
        },
        //funzione al click per nascondere dettagli
        hideDetails() {
            this.selectedDisk = null;
        }

    }
}).mount('#app');