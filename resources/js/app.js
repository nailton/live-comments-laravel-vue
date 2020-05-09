require('./bootstrap');
import Vue from 'vue'
import Comment from './components/Comment'
import Comments from './components/Comments'
import NewComment from './components/NewComment'
import store from './store/index'

Vue.component('comment', Comment);
Vue.component('comments', Comments)
Vue.component('new-comment', NewComment)



const app = new Vue({
    el: '#app',
    store
});
