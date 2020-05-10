<template>
    <div id="commentForm" class="box has-shadow has-background-white">
        <form @keyup.enter="postComment">
            <div class="field has-margin-top">
                <label class="label">Seu nome</label>
                <div class="control">
                    <input type="text" name="author" v-model="comment.author" class="input is-medium" placeholder="Seu nome">
                </div>
            </div>
            <div class="field has-margin-top">
                <label class="label">Seu comentário</label>
                <div class="control">
                    <textarea style="height: 100px;" name="comment" class="input is-medium" autocomplete="true" v-model="comment.content" placeholder="lorem ipsum"></textarea>
                </div>
            </div>
            <div class="control has-margin-top">
                <button style="background-color: #47b784" :class="{'is-loading': submit}" class="button has-shadow is-medium has-text-white" :disabled="!isValid" @click.prevent="postComment" type="submit">Comentar</button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    name: "NewComment",
    data() {
        return {
            submit: false,
            comment: {
                content: '',
                author: '',
            }
        }
    },
    methods: {
        postComment() {
            this.submit = true;
            this.$store.dispatch('ADD_COMMENT', this.comment)
                .then(response => {
                    this.submit = false;
                    if (response.data === 'ok')
                        this.comment.author = ''
                        this.comment.content = ''
                        console.log('success')
                }).catch(err => {
                    this.submit = false
                })
        }
    },
    computed: {
        isValid() {
            return this.comment.content !== '' && this.comment.author !== ''
        }
    }
}

</script>
<style scoped>
.has-margin-top {
    margin-top: 15px;
}

</style>
