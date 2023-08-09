import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'
import Shiqi from './components/Shiqi.vue'
import Shiqi2 from './components/Shiqi2.vue'


const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Shiqi },
        { path: '/xxx', component: Shiqi2 }
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
