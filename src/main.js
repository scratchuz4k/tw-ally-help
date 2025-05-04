import { createApp } from 'vue'
import App from './App.vue'

let item = document.getElementById("ally_content")
if (item) {
    console.log("Testing")
    let newDiv = document.createElement("div");
    newDiv.setAttribute("id", "tw-ally-help");
    item.appendChild(newDiv)
    createApp(App).mount('#tw-ally-help')
}

