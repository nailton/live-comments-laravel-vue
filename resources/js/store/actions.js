let actions = {
    ADD_COMMENT({commit}, comment){

        return new Promise((resolve, reject) => {
            axios.post(`/comments`, comment)
            .then(response => {
                console.log(response)
                resolve(response)
            }).catch(err => {
                reject(err)
            })
        })
    },

    GET_COMMENTS({commit}){
        axios.get('/comments')
        .then(res => {
            {
                console.log(res.data)
            commit('GET_COMMENTS', res.data)
            }
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export default actions
