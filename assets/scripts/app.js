const app = Vue.createApp({
    template: `
    <div v-if="isVisible" id="box1">
    <p>{{greeting}}</p>
    </div>
    <input type="text" v-model= "greeting"/>
    <button v-on:click="display">Click Me</button>
    `,
    data: function() {
        return {
            greeting: "Bonjour",
            isVisible: true,
        };
    },
    methods: {
        display() {
            this.isVisible = !this.isVisible;
        }
    }
});
app.mount("#app");