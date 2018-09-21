import Vue from 'vue';
import Vuex, {Module} from 'vuex';
import userInfo, {State as UserInfoState} from './modules/user-info';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        userInfo
    }
});

export interface State {
    userInfo: UserInfoState
}
