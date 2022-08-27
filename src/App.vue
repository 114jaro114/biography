<template>
<div id="app">
  <v-app>
    <Header :nos="nos" @toSectionFromHeader="numberOfSectionFromHeader" @activeAnimationFromHeader="nameOfAnimatedSection" />
    <Section :gtt="gtt" class="position-relative" :nosfh="nosfh" :activeAnimation="activeAnimation" @toNumberFromSection="numberOfSectionFromSection" @resetGtt="stateResetGtt" />
    <!-- style="top:64px"  -->
    <v-fab-transition>
      <v-btn class="goToTop" v-scroll="onScroll" v-show="fab" fab x-small dark fixed bottom right color="primary" @click="toTop">
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
    </v-fab-transition>
  </v-app>
</div>
</template>

<script>
import Header from "@/components/Header.vue";
import Section from "@/components/Section.vue";
export default {
  name: 'App',
  components: {
    Header,
    Section,
  },
  data() {
    return {
      fab: false,
      nos: null,
      gtt: false,
      nosfh: null,
      activeAnimation: null,
    }
  },

  mounted() {
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    document.body.scrollTop = 0; // For Safari

    const theme = localStorage.getItem("dark_theme");
    if (theme) {
      if (theme === "true") {
        this.$vuetify.theme.dark = true;
        localStorage.setItem('graph_theme', 'dark');
        localStorage.setItem('graph_text_color', '#ffffff');
      } else {
        this.$vuetify.theme.dark = false;
        localStorage.setItem('graph_theme', 'light');
        localStorage.setItem('graph_text_color', '#2c3e50');
      }
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

    onScroll(e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 64
    },

    toTop() {
      this.gtt = true;
      this.$vuetify.goTo(0)
    },
  }
}
</script>

<style>
body {
  height: 100%;
  width: 100%;
  margin: 0;
  color: #FFF;
  font-family: Helvetica, arial, sans-serif;
  overflow: hidden;
}
</style>
