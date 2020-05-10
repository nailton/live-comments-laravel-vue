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
    mounted() {
        this.$store.dispatch('GET_COMMENTS');

        Pusher.logToConsole = true;

        let pusher = new Pusher(process.env.MIX_PUSHER_APP_KEY, {
            cluster: process.env.MIX_PUSHER_APP_CLUSTER,
            encrypted: true
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
