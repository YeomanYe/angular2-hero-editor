<template>
    <div>
        <h3 class="cnt-c1">Top Heroes</h3>
        <div class="cnt-c1 grid gird-pad">
            <detail-item />
        </div>
        <div class="cnt-c2" id="search-component">
            <h4 class="cnt-c2">Hero Search</h4>
            <input class="cnt-c2" id="search-box">
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import DetailItem from '../components/DashboardItem';
    @Component({
        components:{DetailItem}
    })
    export default class Dashboard extends Vue {

    }
</script>
