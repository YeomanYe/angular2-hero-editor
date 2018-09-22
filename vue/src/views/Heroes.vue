<template>
    <div>
        <h2 class="cnt-c3">My Heroes</h2>
        <ul class="cnt-c3 heroes">
            <li class="cnt-c3">
                <span class="cnt-c3 badge">15</span>
                <span class="cnt-c3">Magneta</span>
                <button class="cnt-c3 delete">x</button>
            </li>
        </ul>
        <div class="cnt-c3">
            <h2 class="cnt-c3">MR. NICE is my hero</h2>
            <button class="cnt-c3">view Details</button>
        </div>
        <add-hero/>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import AddHero from '../components/AddHero';
    @Component({
        components:{AddHero}
    })
    export default class Heroes extends Vue{

    }
</script>
