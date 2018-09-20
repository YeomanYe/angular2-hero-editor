
let username:any;

const mutations = {
    setUsername(state:any,username:string){
        state.username = username;
    }
};

const actions = {
    setUsername({commit},username:string){
        commit('setUsername',username);
    }
};

export default {
    state:{
        username
    },
    mutations,
    actions
};
