import { createApp } from 'vue'
import App from './App.vue'

let item = document.getElementById("ally_content")
console.log("Testing")
if (item) {
    debugger
    let newDiv = document.createElement("div");
    newDiv.setAttribute("id", "tw-ally-help");
    item.appendChild(newDiv)
    createApp(App).mount('#tw-ally-help')
}

if (import.meta.env.VITE_APP_DEBUG) {
    createApp(App).mount('#tw-ally-help')
}
