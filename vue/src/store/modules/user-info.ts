import {ActionContext, Commit} from "vuex";


export interface State {
    username: string | null,
    password: string | null
}

const state: State = {
    username: null, password: null
};
const mutations = {
    setUsername(state: State, username: string) {
        state.username = username;
    },
    setPassword(state: State, password: string) {
        state.password = password;
    }
};

const actions = {
    setUserInfo({commit}: ActionContext<State, any>, {password, username}: State) {
        console.log('setUserInfo');
        commit('setUsername', username);
        commit('setPassword', password);
    },
};

export default {
    state,
    mutations,
    actions
};
