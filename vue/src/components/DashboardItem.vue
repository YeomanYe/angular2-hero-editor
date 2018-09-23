<template>
    <router-link class="cnt-c1 col-1-4" :to="{path:'./details/'+id}">
        <div class="cnt-c1 module hero">
            <h4 class="cnt-c1">{{ name }}</h4>
        </div>
    </router-link>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component,Prop} from 'vue-property-decorator';

    @Component
    export default class DashboardItem extends Vue {
        @Prop() name;
        @Prop() id;
    }
</script>
