const app = Vue.createApp({
    // template: '<h1> Hello {{firstName}}</h1>',
    data(){
        return {
            firstName : 'Shounak',
            lastName : 'Bhalerao',
            email : 'shounakbhalerao777@gmail.com',
            gender: 'male',
            picture: 'https://shounaks.github.io/shounak_website/assets/photos/tempPhoto.jpg'
        };
    },
    methods: {
        async getUser(){
            const res = await fetch('https://randomuser.me/api/');
            const {results} = await res.json();
            const user = results[0];
            console.log(results);
            
            this.firstName = user.name.first;
            this.lastName = user.name.last;
            this.email = user.email;
            this.gender = user.gender;
            this.picture = user.picture.large;
        }
    }
}).mount('#app');