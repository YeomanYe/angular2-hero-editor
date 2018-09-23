<template>
    <div class="cnt-c4">
        <h2 class="cnt-c4">Narco details!</h2>
        <div class="cnt-c4">
            <label class="cnt-c4">id: </label>
            {{hero.id}}
        </div>
        <div class="cnt-c4">
            <label class="cnt-c4">name: </label>
            <input v-model="name" placeholder="name" class="cnt-c4 ng-untouched ng-pristine ng-valid">
        </div>
        <button @click="update" class="cnt-c4">Save</button>
        <button @click="back" class="cnt-c4">Back</button>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Hero} from '../store/modules/heroes';
    import {Component, Prop} from 'vue-property-decorator';
    import {Action} from 'vuex-class';

    @Component({
        data:()=>({name})
    })
    export default class UpdateHero extends Vue {
        private name:string;
        @Prop() private hero:Hero;
        @Action('updateHero') private updateHero;
        mounted(){
            this.name = this.hero.name;
        }
        update(){
            this.hero.name = this.name;
            this.updateHero(this.hero);
        }
        back(){
            this.$router.go(-1);
        }
    }
</script>
