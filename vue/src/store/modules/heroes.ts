import {ActionContext, Commit} from "vuex";
import Storage from '../../helper/Storage';
import {State} from "@/store/modules/user-info";

export interface Hero {
    id:number,
    name:string
}

let id = 0;
const STORE_USER_KEY = 'hero-editor-vue-heroes';


const state: Hero[] = <Hero[]>(Storage.getItem(STORE_USER_KEY) || []);

if(state.length > 0) id = state[state.length - 1].id;

const mutations = {
    addHero(state:Array<Hero>,name:string){
        ++id;
        state.push({id,name});
    },
    delHero(state:Array<Hero>,delId:number){
        let index:number = state.filter(({id,name},index) => {
            if(id === delId) return true;
        }).map((obj,index) => index)[0];
        state.splice(index,1);
    },
    updateHero(state:Array<Hero>,{name,id}:Hero){
        let compId = id;
        let theHero:Hero = state.filter(({id,name},index) => id === compId)[0];
        theHero.name = name;
    }
};

const actions = {
    addHero({commit,state}: ActionContext<State, any>, name:string) {
        commit('addHero',name);
        Storage.setItem(STORE_USER_KEY,state);
    },
    delHero({commit,state}: ActionContext<State, any>, id:number) {
        commit('delHero',id);
        Storage.setItem(STORE_USER_KEY,state);
    },
    updateHero({commit,state}: ActionContext<State, any>, {id,name}:Hero) {
        commit('updateHero',{id,name});
        Storage.setItem(STORE_USER_KEY,state);
    },
};

//getters
const getters = {
    queryHeroByName(state:Array<Hero>){
        return (compName:string = '')=>{
            return state.filter(({id,name}) => name.indexOf(compName) >= 0);
        }
    },
    queryHeroById(state:Array<Hero>){
      return (compId:number) => {
          return state.filter(({id,name}) => id === compId)[0];
      }
    },
    allHeroes(state:Array<Hero>){
        return state;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};
