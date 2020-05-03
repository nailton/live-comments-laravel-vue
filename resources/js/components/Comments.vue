<template>
    <div class="container">
        <ul class="comment-list">
            <Comment :key="comment.id" v-for="comment in comments" :comment="comment"></Comment>
        </ul>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Comment from './Comment'

export default {
    name: "Comments",
    components: { Comment },
    moutend() {
        this.$store.dispatch('GET_COMMENTS')

        let pusher = new Pusher(`YOUR_PUSHER_APP_ID`, {
            cluster: `YOUR_PUSHER_CLUSTER`,
            encrypted: false
        });

        let channel = pusher.subscribe('comment-channel')

        channel.bind('new-comment', (data) => {
            this.$store.commit('ADD_COMMENT', data.comment)
        })
    },
    computed: {
        ...mapGetters([
            'comments'
        ])
    }
}

</script>
<style scoped>
.comment-list {
    padding: 1rem 0;
    margin-bottom: 15px;
}

</style>
