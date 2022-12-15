<template>
    <div v-if="showProgress" class="w-11/12 h-[3px] top-[0] left-[50%] translate-x-[-50%] absolute">
        <div class=" h-2 rounded-full bg-teal-800 " :style="`width:${percentProgress}%`"></div>
    </div>
</template>

<script>

    export default {
        name:"ProgressBarForForm",
        props:['percent','show'],
        data(){
            return{
                showProgress:false,
                percentProgress:0,
            }
        },
        watch:{
            percent(newValue){
                this.percentProgress = newValue;
            },
            show(newValue){
                this.showProgress = newValue;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>