<template>
    <div class="inquiry_container">
        <div class="container">
            <div class="first" v-scroll-reveal.reset="{delay:200,scarle:2}">
                <h2>Wanna Eat Delicious Food ???</h2>
            </div>
             <div class="second"
             v-scroll-reveal.reset="{delay:300,afterReveal:()=>{
                    secondAnim = true
                }}"
             >
                <div v-if="secondAnim">
                <animateInquiry />
                </div>
            </div>
             <div class="third" v-scroll-reveal.reset="{delay:600,scarle:2}">
                <span>Call Us at </span>
                <span>0045-67894430</span>
            </div>
        </div>
    </div>
</template>

<script>
import animateInquiry from './animate.vue';

export default {
    data(){
    return {
         secondAnim : false
    }
},
    components: {
        animateInquiry
    }
}
</script>