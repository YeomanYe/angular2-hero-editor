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

    @Component
    export default class HeroItem extends Vue {
        @Prop() id;
        @Prop() name;

        @Action('delHero') private delHero;

        del(){
            console.log('id',this.id,'name',this.name);
            this.delHero(this.id);
        }
        select(){
            this.$emit('select',this.id);
        }
    }
</script>
