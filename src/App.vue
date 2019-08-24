<template>
  <div>
    <appHeader />
    <div>
      <mainSlider />
      <menuButton />
    </div>
    <appFooter />
  </div>
</template>

<script>
import appHeader from "./components/header-footer/Header";
import appFooter from "./components/header-footer/Footer";
import mainSlider from "./components/features/Slider";
import menuButton from "./components/Recipes/Menu";

export default {
  components: {
    appHeader,
    mainSlider,
    menuButton,
    appFooter
  }
};
</script>

<style>
@import "./assets/style.css";
</style>