<template>
<div class="section pl-5 pr-5" v-test:swipe="swipeHandler" v-test:start.disablePassive="startHandler" v-test:moving.disablePassive="movingHandler" v-test-options="{disableClick: false}">
  <!-- v-test:tap="touchHandler" v-test:moved="movedHandler" -->
  <!-- v-test:start.disablePassive="startHandler" v-test:moving.disablePassive="movingHandler" -->
  <div class="sections-menu">
    <span class="menu-point" v-bind:class="{active: activeSection == index}" @click="scrollToSection(index)" v-for="(offset, index) in offsets" :key="index">
    </span>
  </div>

  <section id="section0" class="fullpage mb-16 pt-sm-16">
    <v-container class="d-flex flex-wrap w-100 p-0 m-0 ">
      <v-row class="justify-space-between aaaa " no-gutters>
        <transition name="slide-fade-lr">
          <v-col cols="12" lg="8" md="8" class="order-lg-1 order-md-1 order-2 px-0 px-lg-3 px-md-3 px-sm-3" v-if="animSection0">
            <v-row no-gutters class="justify-lg-start justify-md-start justify-sm-start justify-center">
              <span class="text-lg-h3 text-md-h3 text-h5 font-wight-bold text-uppercase ma-2">Web developer</span>
            </v-row>

            <v-row no-gutters class="pt-3 text-uppercase justify-lg-start justify-md-start justify-sm-start justify-center">
              <v-chip class="ma-2">
                <span>Javascript (Vue.js)</span>
              </v-chip>

              <v-chip class="ma-2">
                Jquery
              </v-chip>

              <v-chip class="ma-2">
                HTML5
              </v-chip>

              <v-chip class="ma-2">
                CSS3
              </v-chip>

              <v-chip class="ma-2">
                SQL
              </v-chip>

              <v-chip class="ma-2">
                PHP (Laravel)
              </v-chip>
            </v-row>
            <v-row no-gutters></v-row>
          </v-col>
        </transition>

        <transition name="slide-fade-rl">
          <v-col cols="12" lg="4" md="4" class="order-lg-2 order-md-2 order-1 mb-16 mb-lg-0 mb-md-0" v-if="animSection0">
            <v-row no-gutters justify="center">
              <v-avatar size="250" class="pt-1">
                <v-img :lazy-src="require('../assets/img/profile_photo.jpg')" :src="require('../assets/img/profile_photo.jpg')" />
              </v-avatar>
            </v-row>
            <v-row no-gutters class="pt-3" justify="center">
              <span class="font-wight-thin text-h5">Jaroslav Balent</span>
            </v-row>
          </v-col>
        </transition>
      </v-row>
    </v-container>
  </section>

  <section id="section1" class="fullpage mb-16 pt-sm-16">
    <transition name="slide-fade-tb">
      <div class="text-lg-h3 text-md-h3 text-h5 mt-3" v-if="animSection1">Vzdelanie</div>
    </transition>
    <v-container class="w-100 p-0 m-0 mt-3">
      <v-timeline class="mt-3">
        <v-timeline-item :color="schools[0].color" small>
          <template v-slot:opposite>
            <transition name="slide-fade-lr">
              <div v-if="animSection1">
                <span :class="`headline font-weight-bold text-lg-h4 text-md-h4 text-h6 ${schools[0].color}--text`" v-text="schools[0].year"></span>
              </div>
            </transition>
          </template>

          <transition name="slide-fade-rl">
            <div class="py-4" v-if="animSection1">
              <span :class="`font-weight-bold mb-4 text-lg-h4 text-md-h4 text-h6 ${schools[0].color}--text`">
                {{schools[0].type}}
              </span>
              <div class="font-weight-bold text-lg-subtitle-2 text-md-subtitle-2 text-caption">
                {{schools[0].name}}
              </div>
              <div class="text-lg-subtitle-2 text-md-subtitle-2 text-caption">
                {{schools[0].study_department}}
              </div>
              <div class="text-lg-subtitle-2 text-md-subtitle-2 text-caption">
                {{schools[0].type_of_work}}
              </div>
            </div>
          </transition>
        </v-timeline-item>

        <v-timeline-item :color="schools[1].color" small>
          <template v-slot:opposite>
            <transition name="slide-fade-rl">
              <div v-if="animSection1">
                <span :class="`headline font-weight-bold text-lg-h4 text-md-h4 text-h6 ${schools[1].color}--text`" v-text="schools[1].year"></span>
              </div>
            </transition>
          </template>
          <transition name="slide-fade-lr">
            <div class="py-4" v-if="animSection1">
              <span :class="`font-weight-bold mb-4 text-lg-h4 text-md-h4 text-h6 ${schools[1].color}--text`">
                {{schools[1].type}}
              </span>
              <div class="font-weight-bold text-lg-subtitle-2 text-md-subtitle-2 text-caption">
                {{schools[1].name}}
              </div>
              <div class="text-lg-subtitle-2 text-md-subtitle-2 text-caption">
                {{schools[1].study_department}}
              </div>
              <div class="text-lg-subtitle-2 text-md-subtitle-2 text-caption">
                {{schools[1].type_of_work}}
              </div>
            </div>
          </transition>
        </v-timeline-item>

        <v-timeline-item :color="schools[2].color" small>
          <template v-slot:opposite>
            <transition name="slide-fade-lr">
              <div v-if="animSection1">
                <span :class="`headline font-weight-bold text-lg-h4 text-md-h4 text-h6 ${schools[2].color}--text`" v-text="schools[2].year"></span>
              </div>
            </transition>
          </template>
          <transition name="slide-fade-rl">
            <div class="py-4" v-if="animSection1">
              <span :class="`font-weight-bold mb-4 text-lg-h4 text-md-h4 text-h6 ${schools[2].color}--text`">
                {{schools[2].type}}
              </span>
              <div class="font-weight-bold text-lg-subtitle-2 text-md-subtitle-2 text-caption">
                {{schools[2].name}}
              </div>
              <div class="text-lg-subtitle-2 text-md-subtitle-2 text-caption">
                {{schools[2].study_department}}
              </div>
              <div class="text-lg-subtitle-2 text-md-subtitle-2 text-caption">
                {{schools[2].type_of_work}}
              </div>
            </div>
          </transition>
        </v-timeline-item>
      </v-timeline>
      <!-- <v-timeline class="mt-3">
        <v-timeline-item v-for="(school, i) in schools" :key="i" :color="school.color" small>
          <template v-slot:opposite>
            <transition name="slide-fade">
              <span :class="`headline font-weight-bold text-lg-h4 text-md-h4 text-h6 ${school.color}--text`" v-text="school.year"></span>
            </transition>
          </template>
          <transition name="slide-fader-l">
            <div class="py-4" v-if="!animSection2">
              <span :class="`font-weight-light mb-4 text-lg-h4 text-md-h4 text-h6 ${school.color}--text`">
                {{school.type}}
              </span>
              <div class="text-lg-subtitle-2 text-md-subtitle-2 text-caption">
                {{school.name}}
              </div>
              <div class="text-lg-subtitle-2 text-md-subtitle-2 text-caption">
                {{school.study_department}}
              </div>
              <div class="text-lg-subtitle-2 text-md-subtitle-2 text-caption">
                {{school.type_of_work}}
              </div>
            </div>
          </transition>
        </v-timeline-item>
      </v-timeline> -->
    </v-container>
  </section>

  <section id="section2" class="fullpage mb-16 pt-sm-16">
    <transition name="slide-fade-tb">
      <div class="text-lg-h3 text-md-h3 text-h5 mt-3" v-if="animSection2">Znalosti a zručnosti</div>
    </transition>

    <v-container class="d-flex flex-wrap w-100 p-0 m-0 mt-3">
      <v-row class="justify-space-between" no-gutters>
        <transition name="slide-fade-lr">
          <v-col class="pa-3 order-lg-1 order-md-1 order-1" lg="4" md="6" cols="12" v-if="animSection2">
            <v-progress-linear color="primary" buffer-value="0" value="60" height="35" rounded stream>
              <div class="d-flex justify-start w-100 p-3">
                <span class="text-lg-subtitle-2 text-caption text-white">Microsoft Office</span>
              </div>
            </v-progress-linear>

            <v-progress-linear class="mt-3" color="primary" buffer-value="0" value="60" height="35" rounded stream>
              <div class="d-flex justify-start w-100 p-3">
                <span class="text-lg-subtitle-2 text-caption text-white">SQL</span>
              </div>
            </v-progress-linear>

            <v-progress-linear class="mt-3" color="primary" buffer-value="0" value="40" height="35" rounded stream>
              <div class="d-flex justify-start w-100 p-3">
                <span class="text-lg-subtitle-2 text-caption text-white">Autodesk Inventor</span>
              </div>
            </v-progress-linear>

            <v-progress-linear class="mt-3" color="primary" buffer-value="0" value="40" height="35" rounded stream>
              <div class="d-flex justify-start w-100 p-3">
                <span class="text-lg-subtitle-2 text-caption text-white">AutoCAD</span>
              </div>
            </v-progress-linear>

            <v-progress-linear class="mt-3" color="primary" buffer-value="0" value="40" height="35" rounded stream>
              <div class="d-flex justify-start w-100 p-3">
                <span class="text-lg-subtitle-2 text-caption text-white">Python</span>
              </div>
            </v-progress-linear>

            <v-progress-linear class="mt-3" color="primary" buffer-value="0" value="80" height="35" rounded stream>
              <div class="d-flex justify-start w-100 p-3">
                <span class="text-lg-subtitle-2 text-caption text-white">HTML</span>
              </div>
            </v-progress-linear>

            <v-progress-linear class="mt-3" color="primary" buffer-value="0" value="80" height="35" rounded stream>
              <div class="d-flex justify-start w-100 p-3">
                <span class="text-lg-subtitle-2 text-caption text-white">CSS</span>
              </div>
            </v-progress-linear>

            <v-progress-linear class="mt-3" color="primary" buffer-value="0" value="80" height="35" rounded stream>
              <div class="d-flex justify-start w-100 p-3">
                <span class="text-lg-subtitle-2 text-caption text-white">Javascript (Vue.js)</span>
              </div>
            </v-progress-linear>

            <v-progress-linear class="mt-3" color="primary" buffer-value="0" value="80" height="35" rounded stream>
              <div class="d-flex justify-start w-100 p-3">
                <span class="text-lg-subtitle-2 text-caption text-white">PHP (Laravel)</span>
              </div>
            </v-progress-linear>

            <v-progress-linear class="mt-3" color="primary" buffer-value="0" value="80" height="35" rounded stream>
              <div class="d-flex justify-start w-100 p-3">
                <span class="text-lg-subtitle-2 text-caption text-white">Jquery</span>
              </div>
            </v-progress-linear>

            <v-progress-linear class="mt-3" color="primary" buffer-value="0" value="80" height="35" rounded stream>
              <div class="d-flex justify-start w-100 p-3">
                <span class="text-lg-subtitle-2 text-caption text-white">C++</span>
              </div>
            </v-progress-linear>

            <v-progress-linear class="mt-3" color="primary" buffer-value="0" value="40" height="35" rounded stream>
              <div class="d-flex justify-start w-100 p-3">
                <span class="text-lg-subtitle-2 text-caption text-white">Java</span>
              </div>
            </v-progress-linear>

            <v-progress-linear class="mt-3" color="primary" buffer-value="0" value="40" height="35" rounded stream>
              <div class="d-flex justify-start w-100 p-3">
                <span class="text-lg-subtitle-2 text-caption text-white">C</span>
              </div>
            </v-progress-linear>
          </v-col>
        </transition>

        <transition name="slide-fade-bt">
          <v-col class="pa-3 order-lg-2 order-md-2 order-3" lg="4" md="12" cols="12" v-if="animSection2">
            <v-progress-linear color="primary" buffer-value="0" value="100" height="70" rounded stream>
              <div class="d-flex text-center flex-column w-100 pr-12 pl-12">
                <span class="text-lg-subtitle-2 text-caption text-white">Anglický jazyk</span>
                <span class="text-lg-subtitle-2 text-caption text-white">B1</span>
              </div>
            </v-progress-linear>

            <v-progress-linear class="mt-3" color="primary" buffer-value="0" value="100" height="70" rounded stream>
              <div class="d-flex text-center flex-column w-100 pr-12 pl-12">
                <span class="text-lg-subtitle-2 text-caption text-white">Nemecký jazyk</span>
                <span class="text-lg-subtitle-2 text-caption text-white">A1</span>
              </div>
            </v-progress-linear>

            <v-progress-linear class="mt-3" color="primary" buffer-value="0" value="100" height="70" rounded stream>
              <div class="d-flex text-center flex-column w-100 pr-12 pl-12">
                <span class="text-lg-subtitle-2 text-caption text-white">Vodičský preukaz</span>
                <span class="text-lg-subtitle-2 text-caption text-white">B</span>
              </div>
            </v-progress-linear>
          </v-col>
        </transition>

        <transition name="slide-fade-rl">
          <v-col class="pa-3 order-lg-3 order-md-3 order-2" lg="4" md="6" cols="12" v-if="animSection2">
            <v-progress-linear color="primary" buffer-value="0" value="60" height="35" rounded stream>
              <div class="d-flex justify-start w-100 p-3">
                <span class="text-lg-subtitle-2 text-caption text-white">Komunikačné schopnosti</span>
              </div>
            </v-progress-linear>

            <v-progress-linear class="mt-3" color="primary" buffer-value="0" value="80" height="35" rounded stream>
              <div class="d-flex justify-start w-100 p-3">
                <span class="text-lg-subtitle-2 text-caption text-white">Kreativita</span>
              </div>
            </v-progress-linear>

            <v-progress-linear class="mt-3" color="primary" buffer-value="0" value="100" height="35" rounded stream>
              <div class="d-flex justify-start w-100 p-3">
                <span class="text-lg-subtitle-2 text-caption text-white">Flexibilita</span>
              </div>
            </v-progress-linear>

            <v-progress-linear class="mt-3" color="primary" buffer-value="0" value="80" height="35" rounded stream>
              <div class="d-flex justify-start w-100 p-3">
                <span class="text-lg-subtitle-2 text-caption text-white">Medziľudské vzťahy</span>
              </div>
            </v-progress-linear>

            <v-progress-linear class="mt-3" color="primary" buffer-value="0" value="80" height="35" rounded stream>
              <div class="d-flex justify-start w-100 p-3">
                <span class="text-lg-subtitle-2 text-caption text-white">Zodpovednosť</span>
              </div>
            </v-progress-linear>

            <v-progress-linear class="mt-3" color="primary" buffer-value="0" value="80" height="35" rounded stream>
              <div class="d-flex justify-start w-100 p-3">
                <span class="text-lg-subtitle-2 text-caption text-white">Tímová práca</span>
              </div>
            </v-progress-linear>

            <v-progress-linear class="mt-3" color="primary" buffer-value="0" value="80" height="35" rounded stream>
              <div class="d-flex justify-start w-100 p-3">
                <span class="text-lg-subtitle-2 text-caption text-white">Riadenie času</span>
              </div>
            </v-progress-linear>
          </v-col>
        </transition>
      </v-row>
    </v-container>
  </section>

  <section id="section3" class="fullpage mb-16 pt-sm-16">
    <v-container class="text-center w-100">
      <transition name="slide-fade-tb">
        <div class="text-lg-h3 text-md-h3 text-h5 mt-3 mb-6" v-if="animSection3">Záľuby</div>
      </transition>

      <v-container>
        <v-row>
          <transition name="bounce">
            <v-col class="pa-3 order-lg-2 order-md-2 order-3" lg="3" md="6" cols="6" v-if="animSection3">
              <div class="d-flex text-center flex-column w-100 ">
                <v-avatar size="150" color="primary">
                  <v-icon size="125" dark>
                    mdi-controller
                  </v-icon>
                </v-avatar>
              </div>
              <div class="d-flex text-center flex-column w-100 mt-3">
                <v-avatar size="150" color="primary">
                  <v-icon size="125" dark>
                    mdi-headphones
                  </v-icon>
                </v-avatar>
              </div>

              <div class="d-flex text-center flex-column w-100 mt-3">
                <v-avatar size="150" color="primary">
                  <v-icon size="100" dark>
                    mdi-theater
                  </v-icon>
                </v-avatar>
              </div>
            </v-col>
          </transition>
          <transition name="bounce">
            <v-col class="pa-3 order-lg-2 order-md-2 order-3" lg="3" md="6" cols="6" v-if="animSection3">
              <div class="d-flex text-center flex-column w-100 ">
                <v-avatar size="150" color="primary">
                  <v-icon size="125" dark>
                    mdi-soccer
                  </v-icon>
                </v-avatar>
              </div>
              <div class="d-flex text-center flex-column w-100 mt-3">
                <v-avatar size="150" color="primary">
                  <v-icon size="110" dark>
                    mdi-dumbbell
                  </v-icon>
                </v-avatar>
              </div>

              <div class="d-flex text-center flex-column w-100 mt-3">
                <v-avatar size="150" color="primary">
                  <v-icon size="100" dark>
                    mdi-skate
                  </v-icon>
                </v-avatar>
              </div>
            </v-col>
          </transition>
          <transition name="bounce">
            <v-col class="pa-3 order-lg-2 order-md-2 order-3" lg="3" md="6" cols="6" v-if="animSection3">
              <div class="d-flex text-center flex-column w-100 ">
                <v-avatar size="150" color="primary">
                  <v-icon size="110" dark>
                    mdi-fish
                  </v-icon>
                  <!-- <v-img width="100" height="100" :lazy-src="require('../assets/img/fishing.png')" :src="require('../assets/img/fishing.png')" /> -->
                </v-avatar>
              </div>
              <div class="d-flex text-center flex-column w-100 mt-3">
                <v-avatar size="150" color="primary">
                  <v-icon size="110" dark>
                    mdi-swim
                  </v-icon>
                </v-avatar>
              </div>

              <div class="d-flex text-center flex-column w-100 mt-3">
                <v-avatar size="150" color="primary">
                  <v-icon size="100" dark>
                    mdi-bike
                  </v-icon>
                </v-avatar>
              </div>
            </v-col>
          </transition>
          <transition name="bounce">
            <v-col class="pa-3 order-lg-2 order-md-2 order-3" lg="3" md="6" cols="6" v-if="animSection3">
              <div class="d-flex text-center flex-column w-100 ">
                <v-avatar size="150" color="primary">
                  <v-icon size="110" dark>
                    mdi-chef-hat
                  </v-icon>
                </v-avatar>
              </div>
              <div class="d-flex text-center flex-column w-100 mt-3">
                <v-avatar size="150" color="primary">
                  <v-icon size="110" dark>
                    mdi-shovel
                  </v-icon>
                </v-avatar>
              </div>

              <div class="d-flex text-center flex-column w-100 mt-3">
                <v-avatar size="150" color="primary">
                  <v-icon size="110" dark>
                    mdi-forest
                  </v-icon>
                </v-avatar>
              </div>
            </v-col>
          </transition>
        </v-row>
      </v-container>

      <!-- <v-speed-dial v-model="hob1" bottom="true" direction="bottom" :open-on-hover="true" transition="fade">
        <template v-slot:activator>
          <v-btn v-model="hob1" color="blue darken-2" dark fab height="150" width="150">
            <v-icon size="110" dark>
              mdi-forest
            </v-icon>
          </v-btn>
        </template>
        <div class="">
          videohry
        </div>
      </v-speed-dial>
      <v-speed-dial v-model="hob2" bottom="true" direction="bottom" :open-on-hover="true" transition="fade">
        <template v-slot:activator>
          <v-btn v-model="hob2" color="blue darken-2" dark fab height="150" width="150">
            <v-icon size="110" dark>
              mdi-forest
            </v-icon>
          </v-btn>
        </template>
        <div class="">
          videohry
        </div>
      </v-speed-dial> -->
    </v-container>
  </section>

  <section id="section4" class="fullpage mb-16 pt-sm-16">
    <transition name="slide-fade-tb">
      <div class="text-lg-h3 text-md-h3 text-h5 mt-3" v-if="animSection4">Portfólio</div>
    </transition>
  </section>

  <section id="section5" class="fullpage">
    <Footer />
  </section>
</div>
</template>

<script>
import Footer from "../components/Footer.vue";
export default {
  name: 'Section',
  components: {
    Footer
  },
  props: {
    nosfh: {
      type: Number,
      default: null
    },
    gtt: {
      type: Boolean,
      default: null
    },
    activeAnimation: {
      type: String,
      default: null
    },
  },

  data() {
    return {
      inMove: false,
      activeSection: 0,
      offsets: [],
      touchStartY: 0,
      showSection0: false,
      showSection1: false,
      showSection2: false,
      showSection3: false,
      showSection4: false,
      animSection0: true,
      animSection1: true,
      animSection2: true,
      animSection3: true,
      animSection4: true,
      animSection5: true,
      schools: [{
          color: 'cyan',
          year: '2020-2022',
          type: 'Vysokoškolské vzdelanie II. stupňa',
          name: 'Technická univerzita v Košiciach, Fakulta elektrotechniky a informatiky',
          study_department: 'Študijný odbor: Informatika',
          type_of_work: 'Diplomová práca: Decentralizovaná sociálna sieť'
        },
        {
          color: 'green',
          year: '2017-2020',
          type: 'Vysokoškolské vzdelanie I. stupňa',
          name: 'Technická univerzita v Košiciach, Fakulta elektrotechniky a informatiky',
          study_department: 'Študijný odbor: Informatika',
          type_of_work: 'Bakalárska práca:  Teplomer s monitorovacou aplikáciou pre Android'
        },
        {
          color: 'pink',
          year: '2013-2017',
          type: 'Stredoškolské vzdelanie',
          name: 'Stredná priemyselná škola elektrotechnická v Košiciach',
          study_department: 'Študijný odbor: Technické lýceum',
          type_of_work: 'SOČ: Inteligentný dom s web rozhraním'
        }
      ],
      hob1: false,
      hob2: false,
      // sections: ['this.showSection0', 'this.showSection1', 'this.showSection2', 'this.showSection3', 'this.showSection4'],
    }
  },

  watch: {
    nosfh() {
      this.activeSection = this.nosfh;
    },
    gtt() {
      this.scrollToSection(0);
      this.$emit('resetGtt', false);
    },
    activeAnimation() {
      if (this.activeAnimation == 'section0') {
        setTimeout(() => {
          this.animSection0 = true;
          this.animSection1 = false;
          this.animSection2 = false;
          this.animSection3 = false;
          this.animSection4 = false;
        }, 200);
      } else if (this.activeAnimation == 'section1') {
        setTimeout(() => {
          this.animSection1 = true;
          this.animSection0 = false;
          this.animSection2 = false;
          this.animSection3 = false;
          this.animSection4 = false;
        }, 200);
      } else if (this.activeAnimation == 'section2') {
        setTimeout(() => {
          this.animSection2 = true;
          this.animSection0 = false;
          this.animSection1 = false;
          this.animSection3 = false;
          this.animSection4 = false;
        }, 200);
      } else if (this.activeAnimation == 'section3') {
        setTimeout(() => {
          this.animSection3 = true;
          this.animSection0 = false;
          this.animSection1 = false;
          this.animSection2 = false;
          this.animSection4 = false;
        }, 200);
      } else if (this.activeAnimation == 'section4') {
        setTimeout(() => {
          this.animSection4 = true;
          this.animSection0 = false;
          this.animSection1 = false;
          this.animSection2 = false;
          this.animSection3 = false;
        }, 200);
      } else {
        setTimeout(() => {
          this.animSection5 = true;
          this.animSection0 = false;
          this.animSection1 = false;
          this.animSection2 = false;
          this.animSection3 = false;
          this.animSection4 = false;
        }, 200);
      }
    }
  },

  mounted() {
    this.calculateSectionOffsets();
  },

  updated() {

    localStorage.setItem('activeSection', this.activeSection);
    let section = localStorage.getItem('activeSection');

    if (section == 0) {
      this.showSection0 = true;
      this.showSection1 = false;
      this.showSection2 = false;
      this.showSection3 = false;
      this.showSection4 = false;
    } else if (section == 1) {
      this.showSection0 = false;
      this.showSection1 = true;
      this.showSection2 = false;
      this.showSection3 = false;
      this.showSection4 = false;
    } else if (section == 2) {
      this.showSection1 = true;
    } else if (section == 3) {
      this.showSection1 = true;
    } else {
      this.showSection1 = true;
    }
  },

  methods: {
    calculateSectionOffsets() {
      let sections = document.getElementsByTagName('section');
      let length = sections.length;
      for (let i = 0; i < length; i++) {
        let sectionOffset = sections[i].offsetTop;
        this.offsets.push(sectionOffset);
        // console.log(sectionOffset);
      }
    },
    handleMouseWheel: function(e) {
      if (e.wheelDelta < 30 && !this.inMove) {
        this.moveUp();
      } else if (e.wheelDelta > 30 && !this.inMove) {
        this.moveDown();
      }
      console.log("mousewheel");
      console.log(e);
      this.$emit('toNumberFromSection', this.activeSection);

      e.preventDefault();
      return false;
    },
    handleMouseWheelDOM: function(e) {
      if (e.detail > 0 && !this.inMove) {
        this.moveUp();
      } else if (e.detail < 0 && !this.inMove) {
        this.moveDown();
      }
      return false;
    },
    moveDown() {
      this.inMove = true;
      this.activeSection--;

      if (this.activeSection < 0) this.activeSection = this.offsets.length - 1;

      this.scrollToSection(this.activeSection, true);
    },
    moveUp() {
      this.inMove = true;
      this.activeSection++;
      if (this.activeSection > this.offsets.length - 1) this.activeSection = 0;

      this.scrollToSection(this.activeSection, true);
    },
    scrollToSection(id, force = false) {
      if (this.inMove && !force) return false;

      this.activeSection = id;
      this.inMove = true;

      this.$emit('toNumberFromSection', id);
      document.getElementsByTagName('section')[id].scrollIntoView({
        behavior: 'smooth'
      });

      console.log(document.getElementsByTagName('section')[id].id);

      if (document.getElementsByTagName('section')[id].id == 'section0') {
        setTimeout(() => {
          this.animSection0 = true;
          // this.animSection1 = false;
          // this.animSection2 = false;
          // this.animSection3 = false;
          // this.animSection4 = false;
        }, 400);
      } else if (document.getElementsByTagName('section')[id].id == 'section1') {
        setTimeout(() => {
          this.animSection1 = true;
          // this.animSection0 = false;
          // this.animSection2 = false;
          // this.animSection3 = false;
          // this.animSection4 = false;
        }, 400);
      } else if (document.getElementsByTagName('section')[id].id == 'section2') {
        setTimeout(() => {
          this.animSection2 = true;
          // this.animSection0 = false;
          // this.animSection1 = false;
          // this.animSection3 = false;
          // this.animSection4 = false;
        }, 400);
      } else if (document.getElementsByTagName('section')[id].id == 'section3') {
        setTimeout(() => {
          this.animSection3 = true;
          // this.animSection0 = false;
          // this.animSection1 = false;
          // this.animSection2 = false;
          // this.animSection4 = false;
        }, 400);
      } else if (document.getElementsByTagName('section')[id].id == 'section4') {
        setTimeout(() => {
          this.animSection4 = true;
          // this.animSection0 = false;
          // this.animSection1 = false;
          // this.animSection2 = false;
          // this.animSection3 = false;
        }, 200);
      } else {
        setTimeout(() => {
          this.animSection5 = true;
          // this.animSection0 = false;
          // this.animSection1 = false;
          // this.animSection2 = false;
          // this.animSection3 = false;
          // this.animSection4 = false;
        }, 200);
      }

      // var element = document.getElementById("section" + id);
      setTimeout(() => {
        this.inMove = false;
      }, 400);
    },
    touchStart(e) {
      console.log("-------------1---------------");
      console.log(e.touches[0].clientY);
      console.log("-----------------------------");
      e.preventDefault();
      this.touchStartY = e.touches[0].clientY;
    },
    touchMove(e) {
      console.log("-------------2---------------");
      console.log(e.touches[0].clientY);
      console.log("-----------------------------");
      console.log(this.inMove);
      console.log("*****************************");
      if (this.inMove) return false;
      e.preventDefault();

      const currentY = e.touches[0].clientY;
      console.log(this.touchStartY + ' ' + currentY);

      if (this.touchStartY < currentY) {
        this.moveDown();
      } else {
        this.moveUp();
      }

      this.touchStartY = 0;
      return false;
    },

    startHandler(e) {
      // e.preventDefault();
      if (e.changedTouches != undefined) {
        this.touchStartY = e.changedTouches[0].clientY;
      }
      console.log("startHandler");
    },

    movingHandler(e) {
      if (e.changedTouches != undefined) {
        if (this.inMove) return false;
        // e.preventDefault();

        const currentY = e.changedTouches[0].clientY;

        if (this.touchStartY < currentY) {
          this.moveDown();
        } else {
          this.moveUp();
        }

        this.touchStartY = 0;
        return false;
      }
      console.log("movingHandler");
    },

    swipeHandler(direction) {

      console.log(direction) // May be left / right / top / bottom
    },

    touchHandler(e) {
      console.log("-------------3---------------");
      console.log(e.changedTouches[0].clientY);
      console.log("-----------------------------");
      e.preventDefault(e);
      if (e.changedTouches[0] != undefined) {
        this.touchStartY = e.changedTouches[0].clientY;
      }
    },

    movedHandler(e) {
      console.log("-------------4---------------");
      console.log(e.changedTouches[0].clientY);
      console.log("-----------------------------");
      if (this.inMove) return false;
      // e.preventDefault();
      const currentY = e.changedTouches[0].clientY;
      console.log("here");
      if (this.touchStartY < currentY) {
        this.moveDown();
      } else {
        this.moveUp();
      }

      this.touchStartY = 0;
      return false;
    },
  },

  created() {
    this.calculateSectionOffsets();

    window.addEventListener('DOMMouseScroll', this.handleMouseWheelDOM); // Mozilla Firefox
    window.addEventListener('mousewheel', this.handleMouseWheel, {
      passive: false
    }); // Other browsers

    if (localStorage.getItem('activeSection') != null) {
      this.activeSection = localStorage.getItem('activeSection');
    }
    window.addEventListener('starthandler', this.startHandler, {
      passive: false
    }); // mobile devices
    window.addEventListener('movinghandler', this.movingHandler, {
      passive: false
    }); // mobile devices

    // window.addEventListener('touchstart', this.touchStart, {
    //   passive: false
    // }); // mobile devices
    // window.addEventListener('touchmove', this.touchMove, {
    //   passive: false
    // }); // mobile devices
  },

  destroyed() {
    window.removeEventListener('mousewheel', this.handleMouseWheel, {
      passive: false
    }); // Other browsers
    window.removeEventListener('DOMMouseScroll', this.handleMouseWheelDOM); // Mozilla Firefox

    window.removeEventListener('starthandler', this.startHandler); // mobile devices
    window.removeEventListener('movinghandler', this.movingHandler); // mobile devices
    // window.removeEventListener('touchstart', this.touchStart); // mobile devices
    // window.removeEventListener('touchmove', this.touchMove); // mobile devices
  }
}
</script>

<style scoped>
.theme--light.section3-card {
  background: #f5f5f5;
}

.section {
  height: auto;
}

.fullpagetest {
  width: 100%;
  height: 100vh;
  position: relative;
  top: 64px;
  /* margin-top: 64px; */
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
}

.fullpage {
  min-height: 100vh;
  width: 100%;
  top: 64px;
  /* padding-top: 64px; */
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

/* .fullpage a {
  text-decoration: none;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.3);
  padding: 5px 10px;
  color: #FFF;
  margin-left: 5px;
} */

.sections-menu {
  position: fixed;
  right: 0;
  z-index: 1;
  top: 50%;
  border-radius: 50px;
  transform: translateY(-50%);
}

.theme--light .sections-menu .menu-point {
  background-color: #1976d2;
}

.sections-menu .menu-point {
  width: 15px;
  height: 15px;
  background-color: #FFF;
  display: block;
  margin: 1rem 0;
  opacity: .6;
  transition: .4s ease all;
  cursor: pointer;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
}

.sections-menu .menu-point.active {
  opacity: 1;
  transform: scale(1.5);
}


.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
  {
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in .5s;
}

.bounce-leave-active {
  animation: bounce-in .5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.5);
  }

  100% {
    transform: scale(1);
  }
}


/* from left to right */
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-lr-enter-active {
  transition: all 1s ease;
}

.slide-fade-lr-leave-active {
  transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-lr-enter,
.slide-fade-lr-leave-to

/* .slide-fade-leave-active below version 2.1.8 */
  {
  transform: translateX(-100%);
  opacity: 0;
}

/* from right to left */
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-rl-enter-active {
  transition: all 1s ease;
}

.slide-fade-rl-leave-active {
  transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-rl-enter,
.slide-fade-rl-leave-to

/* .slide-fade-leave-active below version 2.1.8 */
  {
  transform: translateX(100%);
  opacity: 0;
}

/* from bottom to top */
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-bt-enter-active {
  transition: all 1s ease;
}

.slide-fade-bt-leave-active {
  transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-bt-enter,
.slide-fade-bt-leave-to

/* .slide-fade-leave-active below version 2.1.8 */
  {
  transform: translateY(100%);
  opacity: 0;
}

/* from bottom to top */
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-tb-enter-active {
  transition: all 1s ease;
}

.slide-fade-tb-leave-active {
  transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-tb-enter,
.slide-fade-tb-leave-to

/* .slide-fade-leave-active below version 2.1.8 */
  {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
