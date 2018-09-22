import {ActionContext, Commit} from "vuex";
import Storage from '../../helper/Storage';

export interface State {
    username: string | null,
    password: string | null
}

const STORE_USER_KEY = 'userInfo';

const state: State = Storage.getItem(STORE_USER_KEY) || {username:'',password:''};
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
        Storage.setItem(STORE_USER_KEY,{password,username});
        commit('setUsername', username);
        commit('setPassword', password);
    },
};

export default {
    state,
    mutations,
    actions
};
