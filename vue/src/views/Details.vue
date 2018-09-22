<template>
    <update-hero />
</template>

<script lang="ts">
    import Vue from 'vue';
    import UpdateHero from '../components/UpdateHero';
    import {Component} from 'vue-property-decorator';
    @Component({
        components:{UpdateHero}
    })
    export default class Details extends Vue {

    }
</script>
