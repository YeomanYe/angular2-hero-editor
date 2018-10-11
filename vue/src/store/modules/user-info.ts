import {ActionContext, Commit} from "vuex";
import Storage from '../../helper/Storage';

export interface State {
    username: string | null;
    password: string | null;
}

const STORE_USER_KEY = 'hero-editor-vue-userInfo';

const state: State  = <State>Storage.getItem(STORE_USER_KEY) || {username:'',password:''};
const mutations = {
    setUsername(state: State, username: string) {
        state.username = username;
        Storage.setItem(STORE_USER_KEY,state);
        state.username = username;
    },
    setPassword(state: State, password: string) {
        state.password = password;
        Storage.setItem(STORE_USER_KEY,state);
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
