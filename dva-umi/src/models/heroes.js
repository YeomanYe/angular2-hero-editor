import {addHero, delHero, queryHero, updateHero} from "../services/heroes";
import {cAction} from "../utils/ReduxUtil";

export default {
  namespace: 'hero',
  state: {selectedHero:null,heroes:[]},
  reducers: {
    selectedHero(state,{payload}){
      let {heroes} = state;
      let selectedHero = heroes.filter(hero => hero.id === payload)[0];
      return {
        ...state,
        selectedHero
      }
    },
    query(state, {payload}) {
      return {
        ...state,
        heroes:[...payload]
      };
    },
    add(state,{payload}){
      return {
        ...state,
        heroes:[...state.heroes,payload]
      };
    },
    update(state, {payload}) {
      let {heroes} = state;
      return {
        ...state,
        heroes:heroes.map(item => item.id === payload.id ? Object.assign(item,payload) : item)
      };
    },
    del(state,{payload}){
      let ids = payload;
      let {heroes} = state;
      return {
        ...state,
        heroes:ids instanceof Array ? heroes.filter(item => ids.indexOf(item.id) < 0) : heroes.filter(item => item.id !== ids)
      };
    }
  },
  effects: {
    * addEff({payload},{call,put}) {
      let id = yield call(addHero,payload);
      yield put(cAction('add',{...payload,id}));
    },
    * delEff({payload},{call,put}){
      yield call(delHero,payload);
      let selectedHero = window.g_app._store.getState().hero.selectedHero;
      if(selectedHero && selectedHero.id === payload) yield put(cAction('selectedHero',null));
      yield put(cAction('del',payload));
    },
    * queryEff({payload},{call,put}){
      let datas = yield call(queryHero,payload);
      yield put(cAction('query',datas));
    },
    * queryByNameEff({payload},{call,put}){
      let datas = yield call(queryHero,payload);
      datas = datas.filter(data => data.name.indexOf(payload) >= 0);
      yield put(cAction('query',datas));
    },
    * updateEff({payload},{call,put}){
      yield call(updateHero,payload);
      yield put(cAction('update',payload));
    }
  },
};
