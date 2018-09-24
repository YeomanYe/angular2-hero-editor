<template>
    <li @click="select" class="cnt-c3">
        <span class="cnt-c3 badge">{{ id }}</span>
        <span class="cnt-c3">{{ name }}</span>
        <button @mousedown="del" class="cnt-c3 delete">x</button>
    </li>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';
    import {Action} from 'vuex-class';

    @Component({
        data:()=>({isSelected:false})
    })
    export default class HeroItem extends Vue {
        @Prop() private id:number;
        @Prop() private name:string;
        private isSelected: boolean;

        @Action('delHero') private delHero;

        del(){
            console.log('id',this.id,'name',this.name);
            this.delHero(this.id);
            if(this.isSelected){
                this.$emit('select',0);
            }
        }
        select(){
            this.isSelected = true;
            this.$emit('select',this.id);
        }
    }
</script>
