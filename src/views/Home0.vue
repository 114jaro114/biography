<template>
<div class="home0">
  <Header :nos="nos" @toSectionFromHeader="numberOfSectionFromHeader" @activeAnimationFromHeader="nameOfAnimatedSection" />
  <Home :gtt="gtt" class="position-relative" :nosfh="nosfh" :activeAnimation="activeAnimation" @toNumberFromSection="numberOfSectionFromSection" @resetGtt="stateResetGtt" />
</div>
</template>

<script>
import Home from "../components/Home.vue";
import Header from "../components/Header.vue";

export default {
  name: "Home0",
  props: [],
  components: {
    Home,
    Header,
  },
  data() {
    return {
      nos: null,
      gtt: false,
      nosfh: null,
      activeAnimation: null,
    }
  },

  methods: {
    numberOfSectionFromSection(id) {
      this.nos = id;
    },

    stateResetGtt(state) {
      this.gtt = state;
    },

    numberOfSectionFromHeader(id) {
      this.nosfh = id;
    },

    nameOfAnimatedSection(id) {
      this.activeAnimation = id;
    },
  }
}
</script>

<style>
</style>
