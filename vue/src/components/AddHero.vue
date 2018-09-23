<template>
    <div class="cnt-c3">
        <label class="cnt-c3">Hero name:</label>
        <input v-model="name" class="cnt-c3">
        <button @mousedown="add" class="cnt-c3">Add</button>
    </div>
</template>

<script lang="ts">
    import {Vue,Component} from "vue-property-decorator";
    import {Action} from 'vuex-class';
    @Component({
        data:()=>({name})
    })
    export default class AddHero extends Vue {
        private name:string;
        @Action('addHero') private addHero;

        private add(){
            this.addHero(this.name);
        }
    }
</script>
