<template>
  <div>
    <appHeader />
    <div>content</div>
    <appFooter />
  </div>
</template>

<script>
import appHeader from "./components/header-footer/Header";
import appFooter from "./components/header-footer/Footer";

export default {
  components: {
    appHeader,
    appFooter
  }
}
</script>

<style>
@import "./assets/style.css";
</style>