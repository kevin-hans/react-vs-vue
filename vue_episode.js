'use strict';

// 計数器
const Counter = {
    data() {
      return {
        counter: 0
      }
    },
    mounted() {
      this.intervalId = setInterval(() => {
        this.counter++
      }, 1000)
    },
    unmounted () {
      clearInterval(this.intervalId);
    }
}

Vue.createApp(Counter).mount('#counter')


// 一覧表示
const VegetableItemVue = {
    props: ['item'],
    template: `<li>{{ item.text }}</li>`,
}

const VegetableItemListVue = {
    template: '#vegetable-component',
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
        VegetableItemVue
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
Vue.createApp(VegetableItemListVue).mount('#vegetable-list-app-vue')


// Likeコンポーネントを定義
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
document.querySelectorAll('.like_button_container_vue')
  .forEach(domContainer => {
    // Read the comment ID from a data-* attribute.
    const commentID = parseInt(domContainer.dataset.commentid, 10);
    Vue.createApp(likeComponent, { commentID: commentID }).mount(domContainer)
  });


// マウスオーバー時情報を提示
const AttributeBinding = {
  data() {
    return {
      message: 'You loaded this page on ' + new Date().toLocaleString()
    }
  }
}

Vue.createApp(AttributeBinding).mount('#bind-attribute')