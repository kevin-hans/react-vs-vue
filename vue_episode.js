const Counter = {
    data() {
      return {
        counter: 0
      }
    },
    mounted() {
      setInterval(() => {
        this.counter++
      }, 1000)
    }
}

Vue.createApp(Counter).mount('#counter')

const AttributeBinding = {
    data() {
      return {
        message: 'You loaded this page on ' + new Date().toLocaleString()
      }
    }
}
  
Vue.createApp(AttributeBinding).mount('#bind-attribute')


const TodoItem = {
    props: ['todo'],
    template: `<li>{{ todo.text }}</li>`,
}

const TodoItem2 = {
    template: '#todo-component',
    data() {
        return {
          groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
          ]
        }
    },
    components: {
        TodoItem
    },
    methods: {
        greet(params, event) {
          alert(params.text)
          // `event` is the native DOM event
          if (event) {
            alert(event.target.tagName)
          }
        }
    }  
}
const app2 = Vue.createApp(TodoItem2)
app2.mount('#todo-list-app-vue')


// Likeコンポーネント作成
const likeComponent = {
    props: ['commentID'],
    template: '#vue-like-template',
    data() {
        return {
            liked: false
        }
    },
    methods: {
        toggle(event) {
            this.liked = !this.liked;
        }
    }
}

// Likeコンポーネントマウント
const app3 = Vue.createApp(likeComponent)
app3.mount('#vue-like-demo')
document.querySelectorAll('.like_button_container_vue')
  .forEach(domContainer => {
    // Read the comment ID from a data-* attribute.
    const commentID = parseInt(domContainer.dataset.commentid, 10);
    const app4 = Vue.createApp(likeComponent, { commentID: commentID })
    app4.mount(domContainer)
  });