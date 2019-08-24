<template>
  <div>
    <carousel
    :per-page="1"
    :mouse-drag="true"
    :paginationEnabled="false"

    >
      <slide v-for="(slide,index) in slides" :key="index">
        <div class="slider_bck" :style="{'background':`url(${slide.bck})`}">
          <div class="container slider-container">
            <div class="text">
              <div>{{slide.text}}</div>
              <span><img :src="slide.joy" />
              </span>
            </div>
            <div class="image">
              <img :src="slide.img" />
            </div>
          </div>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import slideBgImage1 from "../../assets/images/slide_bck.jpg";
import slideBgImage2 from "../../assets/images/slide_bck2.jpg";

import bigDeal from "../../assets/images/pizza-deal.gif";
import animImg from "../../assets/images/giphy.gif";

import emojiJoy from "../../assets/images/happy.gif";


export default {
  data() {
    return {
      slides: [
        {
          text: "30% OFF on Big Deal Offer",
          bck: slideBgImage1,
          img: bigDeal,
          joy: emojiJoy
        },
        {
          text: "10% OFF after 8pm everyday",
          bck: slideBgImage2,
          img: animImg,
          joy: emojiJoy
        }
      ]
    };
  },
  components: {
    Carousel,
    Slide
  }
};
</script>
