<template>
    <div>
        <h3 class="cnt-c1">Top Heroes</h3>
        <div class="cnt-c1 grid gird-pad">
            <detail-item v-for="hero in heroes" :name="hero.name" :id="hero.id" />
        </div>
        <div class="cnt-c2" id="search-component">
            <h4 class="cnt-c2">Hero Search</h4>
            <input @keydown.enter="query" v-model="name" class="cnt-c2" id="search-box">
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import {Hero} from '../store/modules/heroes';
    import DetailItem from '../components/DashboardItem';
    import {Getter} from 'vuex-class';
    @Component({
        data:()=>({heroes:[],name:''}),
        components:{DetailItem}
    })
    export default class Dashboard extends Vue {
        private heroes:Array<Hero>;
        private name:string;
        @Getter('queryHeroByName') queryByName;

        query(){
            this.heroes = this.queryByName(this.name);
        }

        created(){
            this.query();
        }
    }
</script>
