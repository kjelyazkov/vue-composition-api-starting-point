# todo-application

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).




import { ref, toRefs, computed } from 'vue'
import store from '../store'

export default {
  name: 'Home',
  setup() {
    const hair = ref('curly')
    const legs = ref(2)
    const age = ref(4)

    const count = computed(() => legs.value + age.value);
    const stored_data = computed(() => store.state )

    async function increment() {
      legs.value++
      const updateData = await store.dispatch('updateData')
    }
    
    return {
      hair,
      legs,
      age,
      count,
      increment,
      stored_data
    }
  },

}