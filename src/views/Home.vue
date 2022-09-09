<template>
<div class="home">
  <Header :nos="nos" @toSectionFromHeader="numberOfSectionFromHeader" @activeAnimationFromHeader="nameOfAnimatedSection" />
  <Section :gtt="gtt" class="position-relative" :nosfh="nosfh" :activeAnimation="activeAnimation" @toNumberFromSection="numberOfSectionFromSection" @resetGtt="stateResetGtt" />

  asdasd
</div>
</template>

<script>
import Section from "../components/Section.vue";
import Header from "../components/Header.vue";

export default {
  name: "Home",
  props: [],
  components: {
    Section,
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
