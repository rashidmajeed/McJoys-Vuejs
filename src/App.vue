<template>
  <div>
    <appHeader />
     <mainSlider />
    <appFooter />
  </div>
</template>

<script>
import appHeader from "./components/header-footer/Header";
import appFooter from "./components/header-footer/Footer";
import mainSlider from "./components/features/Slider";


export default {
  components: {
    appHeader,
    mainSlider,
    appFooter
  }
}
</script>

<style>
@import "./assets/style.css";
</style>