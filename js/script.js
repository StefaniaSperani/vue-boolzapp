

const { createApp } = Vue;
//Creo l'App
createApp({
    //Inserisco i data
    data() {
        return {
            currentIndex: 0,
            newMsg: '',
            autoMsg: '',
            searchTerm: '',
            msgInfo: {
                index: null,
                show: false,
            },
            //Inserisco l'array dei miei contatti
            contacts: [
                {
                    id: 1,
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 2,
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    id: 3,
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 4,
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 5,
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 6,
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    id: 7,
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 8,
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            //creo un array con delle emoji
            icons: [
                '&#128512;',
                '&#128513;',
                '&#128514;',
                '&#128515;',
                '&#128516;',
                '&#128517;',
                '&#128518;',
                '&#128519;',
                '&#128521;',
                '&#128522;',
                '&#128523;',
                '&#128524;',
                '&#128525;',
                '&#128526;',
                '&#128528;',
                '&#128529;',
                '&#128530;',
                '&#128536;',
                '&#128545;',
                '&#128548;',
                '&#128561;',
                '&#129315;',
                '&#129299;',
                '&#129319;',
                '&#129321;',
                '&#129325;',
                '&#129488;',
                '&#9996;',
                '&#9995;',
                '&#10024;',
                '&#10062;',
                '&#128064;',
                '&#128077;',
                '&#128079;',
                '&#128152;',
                '&#128149;',
                '&#128156;',
                '&#128158;',
                '&#128584;',
                '&#129310;',
                '&#129505;',
                '&#127802;',
                '&#127801;',
                '&#9749;'
            ],
        }
    },
    computed: {
        filteredContact() {
            return this.contacts.filter((item) => {
                const name = item.name.toLowerCase();
                return name.includes(this.searchTerm.toLowerCase());
            })
        }
    },
    // Creo i methods
    methods: {
        // al click sul profilo dello user 
        setActiveChat(id) {
            // this.currentIndex = index;
            this.currentIndex = this.contacts.findIndex((contact) => contact.id === id);
        },
        // nella casella di input attacco la funzione per inviare il messaggio
        sendMsg() {
            const d = new Date();
            let newDate = d.toLocaleDateString('it-IT');
            let newTime = d.toLocaleTimeString('it-IT');
            let inputMsg = this.newMsg;
            //SE l'inputMsg non ha nulla
            if (!this.newMsg) {
                //non fa niente
                return;
                //altrimenti
            } else {
                //pusho il nuovo oggetto dentro la chat
                this.contacts[this.currentIndex].messages.push({
                    date: newDate + ' ' + newTime,
                    message: inputMsg,
                    status: 'sent'
                });
            };
            this.$nextTick(()=>{
                const el = this.$refs.msg[this.$refs.msg.length -1];
                el.scrollIntoView({behavior: "smooth"});
            })
            //setto un timeout per una risposta automatica
            this.autoMsg = setTimeout(() => {
                this.contacts[this.currentIndex].messages.push({
                    date: newDate + ' ' + newTime,
                    message: 'ok',
                    status: 'received'
                });
                this.$nextTick(()=>{
                    const el = this.$refs.msg[this.$refs.msg.length -1];
                    el.scrollIntoView({behavior: "smooth"});
                })
            }, 1000)
            //svuoto il mio input
            this.newMsg = '';
        },
        removeMsg(i) {
            this.contacts[this.currentIndex].messages.splice(i, 1);
        },
        showMore(i) {
            if (i === this.msgInfo.index && this.msgInfo.show) {
                this.msgInfo.index = null;
                this.msgInfo.show = true;
            } else {
                this.msgInfo.index = i;
                this.msgInfo.show = true;
            }

        }
    },
    //monto l'app
}).mount('#app')
