import {login} from "./service";
import {cAction} from "../../utils/ReduxUtil";

export default {
  namespace: 'user',
  state: {name:'',pass:''},
  reducers: {
    save(state, {payload}) {
      return {...state, ...payload};
    }
  },
  effects: {
    * login({payload},{call,put}){
      let isSuc = yield call(login,payload);
      if(isSuc) yield put(cAction('save',payload));
    },
  },
};
