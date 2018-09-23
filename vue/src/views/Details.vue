<template>
    <update-hero :hero="hero" />
</template>

<script lang="ts">
    import Vue from 'vue';
    import UpdateHero from '../components/UpdateHero';
    import {Component} from 'vue-property-decorator';
    import {Action,Getter} from 'vuex-class';
    @Component({
        data:()=>({hero:{}}),
        components:{UpdateHero}
    })
    export default class Details extends Vue {
        private hero;
        @Getter('queryHeroById') private queryById;
        created(){
            // console.log('router',this.$router);
            console.log('params',this.$route.params);
            this.hero = this.queryById(+this.$route.params.id);
        }
    }
</script>
