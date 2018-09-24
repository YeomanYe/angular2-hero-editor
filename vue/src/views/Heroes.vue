<template>
    <div>
        <h2 class="cnt-c3">My Heroes</h2>
        <ul class="cnt-c3 heroes">
            <hero-item v-for="item in allHeroes" :class="selectedHero.id === item.id ? 'selected' : ''"
                       @select="onSelect" :selectId="selectedHero.id" :name="item.name" :id="item.id"/>
        </ul>
        <div class="cnt-c3" :style="{display: selectedHero.name ? 'block' : 'none'}">
            <h2 class="cnt-c3">MR. {{selectedHero.name}} is my hero</h2>
            <router-link :to="{path:'./details/'+selectedHero.id}">
                <button class="cnt-c3">view Details</button>
            </router-link>
        </div>
        <add-hero/>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import {Getter} from 'vuex-class';
    import {Hero} from '../store';
    import AddHero from '../components/AddHero';
    import HeroItem from '../components/HeroItem';

    @Component({
        data: () => ({selectedHero: {}}),
        components: {AddHero, HeroItem}
    })
    export default class Heroes extends Vue {
        private selectedHero: Hero;
        @Getter('allHeroes') allHeroes;
        @Getter('queryHeroById') queryHeroById;

        private onSelect(id) {
            this.selectedHero = this.queryHeroById(id);
        }
    }
</script>
