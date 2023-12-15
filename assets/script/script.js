const { createApp } = Vue;

createApp({
    data() {
        return{
            //inizializza selectedDisk=null
            selectedDisk: null,
            diskList: [],
            apiUrl:'http://localhost/Boolean/php-dischi-json/assets/server/server.php'
        }
        
    },
    created() {
        //richeista axios a server
        axios.get(this.apiUrl).then((resp) => {
            this.diskList = resp.data;
            console.log(resp.data);
        });
    },
    methods: {
        //funzione x mostrare dettagli
        displayDiskDetails(disk) {
            //inserisci parametri per richiesta su disco singolo
            axios.get(this.apiUrl, {
                params: {
                    disk_id: disk.id
                }
            }).then((resp) => {
                // aggiorna diskco selezionato
                this.selectedDisk = resp.data[0];
                console.log(resp.data[0]);
            });
        },
        //funzione al click per nascondere dettagli
        hideDetails() {
            this.selectedDisk = null;
        }

    }
}).mount('#app');