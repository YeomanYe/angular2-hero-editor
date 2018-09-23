import {ActionContext, Commit} from "vuex";
import Storage from '../../helper/Storage';

export interface State {
    username: string | null,
    password: string | null
}

const STORE_USER_KEY = 'hero-editor-vue-userInfo';

const state: State = Storage.getItem(STORE_USER_KEY) || {username:'',password:''};
const mutations = {
    setUsername(state: State, username: string) {
        let storeObj:State = Storage.getItem(STORE_USER_KEY) || {};
        storeObj.username = username;
        Storage.setItem(STORE_USER_KEY,storeObj);
        state.username = username;
    },
    setPassword(state: State, password: string) {
        let storeObj:State = Storage.getItem(STORE_USER_KEY) || {};
        storeObj.password = password;
        Storage.setItem(STORE_USER_KEY,storeObj);
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
