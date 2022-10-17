<template>
<div id="app">
  <v-app>
    <!-- <router-view /> -->
    <Header :nos="nos" :sp="sp" @positionOfHeader="numberOfHeaderPosition" @activeAnimationFromHeader="nameOfAnimatedSection" />
    <!-- @toSectionFromHeader="numberOfSectionFromHeader" -->
    <Section :gtt="gtt" :poh="poh" @sectionPositions="numberOfPositionsEachSections" class="position-relative" :activeAnimation="activeAnimation" @toNumberFromSection="numberOfSectionFromSection" @resetGtt="stateResetGtt" />
    <!-- style="top:64px"  -->
    <!-- :nosfh="nosfh" -->
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
      // nosfh: null,
      activeAnimation: null,
      sp: [],
      poh: null,
    }
  },

  mounted() {
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    document.body.scrollTop = 0; // For Safari

    const theme = localStorage.getItem("dark_theme");
    if (theme) {
      if (theme === "true") {
        this.$vuetify.theme.dark = true;
      } else {
        this.$vuetify.theme.dark = false;
      }
    }

    if (JSON.parse(localStorage.getItem("activeSection")) == null) {
      console.log("here");
      localStorage.setItem("activeSection", 0);
    }

    if (JSON.parse(localStorage.getItem("dark_theme")) == null) {
      localStorage.setItem("dark_theme", false);
    }

    if (localStorage.getItem("language") == "sk") {
      this.$root.$i18n.locale = 'sk';
    } else {
      this.$root.$i18n.locale = 'en';
    }
  },

  methods: {
    numberOfSectionFromSection(id) {
      this.nos = id;
    },

    numberOfPositionsEachSections(ids) {
      this.sp = ids
    },

    stateResetGtt(state) {
      this.gtt = state;
    },

    // numberOfSectionFromHeader(id) {
    //   this.nosfh = id;
    // },

    numberOfHeaderPosition(id) {
      this.poh = id;
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
      this.$vuetify.goTo(0);
      localStorage.setItem('activeSection', 0);
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
