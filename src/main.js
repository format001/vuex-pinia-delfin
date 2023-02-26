import { createApp } from 'vue'
import App from './App.vue'

import {store} from './store/index.js'
import center from '@/center/index.js'
import { createPinia } from '@/pinia';


createApp(App)
    .use(store)
    .use(center)
    .use(createPinia())
    .mount('#app')

