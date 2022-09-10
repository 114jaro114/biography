<template>
<div class="section pl-5 pr-5" v-test:swipe="swipeHandler" v-test:start.disablePassive="startHandler" v-test:moving.disablePassive="movingHandler" v-test-options="{disableClick: false}">
  <!--  -->
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

            <v-row no-gutters class="pt-3 pt-lg-7 pt-md-7 text-uppercase justify-lg-start justify-md-start justify-sm-start justify-center">
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

            <v-row no-gutters class="pl-10 pr-10 pl-lg-0 pr-lg-0 pl-md-0 pr-md-0 pl-sm-0 pr-sm-0 pt-3 pt-lg-7 pt-md-7 justify-lg-start justify-md-start justify-sm-start justify-center w-100 align-items-end">
              <v-col cols="8">
                <v-sparkline :value="value" :gradient="gradient" :smooth="radius || false" :padding="padding" :line-width="width" :stroke-linecap="lineCap" :gradient-direction="gradientDirection" :fill="fill" :type="type"
                  :auto-line-width="autoLineWidth" auto-draw></v-sparkline>
              </v-col>

              <v-col cols="4">
                <transition name="fade" appear>
                  <div class="position-relative" v-if="animSection0 && animTown">
                    <v-chip class="ma-2 justify-start white--text" :large="chipSize" color="#1feaea" align="left" v-if="animSection0">
                      <v-icon left :large="chipSize">
                        mdi-map-marker
                      </v-icon>
                      <span class="font-weight-bold">{{town}}</span>
                    </v-chip>
                  </div>
                </transition>
              </v-col>
            </v-row>
          </v-col>
        </transition>

        <transition name="slide-fade-rl">
          <v-col cols="12" lg="4" md="4" class="order-lg-2 order-md-2 order-1 mb-10 mb-lg-0 mb-md-0" v-if="animSection0">
            <v-row no-gutters justify="center">
              <v-avatar size="250" class="pt-1">
                <v-img :lazy-src="require('../assets/img/profile_photo.jpg')" :src="require('../assets/img/profile_photo.jpg')" />
              </v-avatar>
            </v-row>
            <v-row no-gutters class="pt-3" justify="center">
              <span class="font-wight-thin text-h5">Jaroslav Baleasdasdnt</span>
            </v-row>
          </v-col>
        </transition>
      </v-row>
    </v-container>
  </section>

  <section id="section1" class="fullpage mb-16 pt-sm-16 pt-16">
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

    <v-hover v-if="isLoaded == true">
      <template v-slot:default="{ hover }">
        <v-card dark class="w-100 mx-auto" elevation="0">
          <v-img lazy-src="https://www.dropbox.com/s/zj7pehfghjrb0na/04TB-SPIDERSILK-superJumbo.jpg?raw=1" src="https://www.dropbox.com/s/zj7pehfghjrb0na/04TB-SPIDERSILK-superJumbo.jpg?raw=1" height="250">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
          <v-fade-transition>
            <v-overlay v-if="hover" absolute color="primary">
              <v-btn class="anim" text @click="dialog1 = true">
                <span>know more</span>
                <v-icon class="arrow">mdi-arrow-right</v-icon>
              </v-btn>
            </v-overlay>
          </v-fade-transition>
        </v-card>
      </template>
    </v-hover>
  </section>

  <section id="section2" class="fullpage mb-16 pt-sm-16 pt-16">
    <transition name="slide-fade-tb">
      <div class="text-lg-h3 text-md-h3 text-h5 mt-3" v-if="animSection2">Znalosti a zručnosti</div>
    </transition>

    <v-container class="d-flex flex-wrap w-100 p-0 m-0 mt-3">
      <v-row class="justify-space-between" no-gutters>
        <transition name="slide-fade-lr">
          <v-col class="pa-3 order-lg-1 order-md-1 order-1" lg="4" md="6" cols="12" v-if="animSection2">
            <v-progress-linear color="primary" buffer-value="60" value="60" height="35" rounded stream>
              <div class="d-flex justify-start w-100 p-3">
                <span class="text-lg-subtitle-2 text-caption text-white">Microsoft Office</span>
              </div>
            </v-progress-linear>

            <v-progress-linear class="mt-3" color="primary" buffer-value="60" value="50" height="35" rounded stream>
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

            <v-progress-linear class="mt-3" color="primary" buffer-value="70" value="60" height="35" rounded stream>
              <div class="d-flex justify-start w-100 p-3">
                <span class="text-lg-subtitle-2 text-caption text-white">CSS</span>
              </div>
            </v-progress-linear>

            <v-progress-linear class="mt-3" color="primary" buffer-value="0" value="80" height="35" rounded stream>
              <div class="d-flex justify-start w-100 p-3">
                <span class="text-lg-subtitle-2 text-caption text-white">Javascript (Vue.js)</span>
              </div>
            </v-progress-linear>

            <v-progress-linear class="mt-3" color="primary" buffer-value="70" value="60" height="35" rounded stream>
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
            <v-progress-linear color="green" buffer-value="0" value="100" height="70" rounded stream>
              <div class="d-flex text-center flex-column w-100 pr-12 pl-12">
                <span class="text-lg-subtitle-2 text-caption text-white">Anglický jazyk</span>
                <span class="text-lg-subtitle-2 text-caption text-white">B1</span>
              </div>
            </v-progress-linear>

            <v-progress-linear class="mt-3" color="green" buffer-value="0" value="100" height="70" rounded stream>
              <div class="d-flex text-center flex-column w-100 pr-12 pl-12">
                <span class="text-lg-subtitle-2 text-caption text-white">Nemecký jazyk</span>
                <span class="text-lg-subtitle-2 text-caption text-white">A1</span>
              </div>
            </v-progress-linear>

            <v-progress-linear class="mt-3" color="green" buffer-value="0" value="100" height="70" rounded stream>
              <div class="d-flex text-center flex-column w-100 pr-12 pl-12">
                <span class="text-lg-subtitle-2 text-caption text-white">Vodičský preukaz</span>
                <span class="text-lg-subtitle-2 text-caption text-white">B</span>
              </div>
            </v-progress-linear>
          </v-col>
        </transition>

        <transition name="slide-fade-rl">
          <v-col class="pa-3 order-lg-3 order-md-3 order-2" lg="4" md="6" cols="12" v-if="animSection2">
            <v-progress-linear color="pink" buffer-value="0" value="60" height="35" rounded stream>
              <div class="d-flex justify-start w-100 p-3">
                <span class="text-lg-subtitle-2 text-caption text-white">Komunikačné schopnosti</span>
              </div>
            </v-progress-linear>

            <v-progress-linear class="mt-3" color="pink" buffer-value="0" value="80" height="35" rounded stream>
              <div class="d-flex justify-start w-100 p-3">
                <span class="text-lg-subtitle-2 text-caption text-white">Kreativita</span>
              </div>
            </v-progress-linear>

            <v-progress-linear class="mt-3" color="pink" buffer-value="0" value="100" height="35" rounded stream>
              <div class="d-flex justify-start w-100 p-3">
                <span class="text-lg-subtitle-2 text-caption text-white">Flexibilita</span>
              </div>
            </v-progress-linear>

            <v-progress-linear class="mt-3" color="pink" buffer-value="0" value="80" height="35" rounded stream>
              <div class="d-flex justify-start w-100 p-3">
                <span class="text-lg-subtitle-2 text-caption text-white">Medziľudské vzťahy</span>
              </div>
            </v-progress-linear>

            <v-progress-linear class="mt-3" color="pink" buffer-value="0" value="80" height="35" rounded stream>
              <div class="d-flex justify-start w-100 p-3">
                <span class="text-lg-subtitle-2 text-caption text-white">Zodpovednosť</span>
              </div>
            </v-progress-linear>

            <v-progress-linear class="mt-3" color="pink" buffer-value="0" value="80" height="35" rounded stream>
              <div class="d-flex justify-start w-100 p-3">
                <span class="text-lg-subtitle-2 text-caption text-white">Tímová práca</span>
              </div>
            </v-progress-linear>

            <v-progress-linear class="mt-3" color="pink" buffer-value="0" value="80" height="35" rounded stream>
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
              <v-hover>
                <template v-slot:default="{ hover }">
                  <div class="row justify-center">
                    <v-avatar :size="size" color="primary" rounded>
                      <v-icon :size="size - 25" dark>
                        mdi-controller
                      </v-icon>

                      <v-fade-transition>
                        <v-overlay v-if="hover" absolute color="primary">
                          videohry
                        </v-overlay>
                      </v-fade-transition>
                    </v-avatar>
                  </div>
                </template>
              </v-hover>
              <div class="row justify-center pt-3">
                <v-avatar :size="size" color="primary" rounded>
                  <v-icon :size="size - 25" dark>
                    mdi-headphones
                  </v-icon>
                </v-avatar>
              </div>
              <div class="row justify-center pt-3">
                <v-avatar :size="size" color="primary" rounded>
                  <v-icon :size="size - 25" dark>
                    mdi-theater
                  </v-icon>
                </v-avatar>
              </div>
            </v-col>
          </transition>
          <transition name="bounce">
            <v-col class="pa-3 order-lg-2 order-md-2 order-3" lg="3" md="6" cols="6" v-if="animSection3">
              <div class="row justify-center">
                <v-avatar :size="size" color="primary" rounded>
                  <v-icon :size="size - 25" dark>
                    mdi-soccer
                  </v-icon>
                </v-avatar>
              </div>
              <div class="row justify-center pt-3">
                <v-avatar :size="size" color="primary" rounded>
                  <v-icon :size="size - 25" dark>
                    mdi-dumbbell
                  </v-icon>
                </v-avatar>
              </div>

              <div class="row justify-center pt-3">
                <v-avatar :size="size" color="primary" rounded>
                  <v-icon :size="size - 25" dark>
                    mdi-skate
                  </v-icon>
                </v-avatar>
              </div>
            </v-col>
          </transition>
          <transition name="bounce">
            <v-col class="pa-3 order-lg-2 order-md-2 order-3" lg="3" md="6" cols="6" v-if="animSection3">
              <div class="row justify-center pt-3 pt-md-0 pt-lg-0">
                <v-avatar :size="size" color="primary" rounded>
                  <v-icon :size="size - 25" dark>
                    mdi-fish
                  </v-icon>
                  <!-- <v-img width="100" height="100" :lazy-src="require('../assets/img/fishing.png')" :src="require('../assets/img/fishing.png')" /> -->
                </v-avatar>
              </div>
              <div class="row justify-center pt-3">
                <v-avatar :size="size" color="primary" rounded>
                  <v-icon :size="size - 25" dark>
                    mdi-swim
                  </v-icon>
                </v-avatar>
              </div>

              <div class="row justify-center pt-3">
                <v-avatar :size="size" color="primary" rounded>
                  <v-icon :size="size - 25" dark>
                    mdi-bike
                  </v-icon>
                </v-avatar>
              </div>
            </v-col>
          </transition>
          <transition name="bounce">
            <v-col class="pa-3 order-lg-2 order-md-2 order-3" lg="3" md="6" cols="6" v-if="animSection3">
              <div class="row justify-center pt-3 pt-md-0 pt-lg-0">
                <v-avatar :size="size" color="primary" rounded>
                  <v-icon :size="size - 25" dark>
                    mdi-chef-hat
                  </v-icon>
                </v-avatar>
              </div>
              <div class="row justify-center pt-3">
                <v-avatar :size="size" color="primary" rounded>
                  <v-icon :size="size - 25" dark>
                    mdi-shovel
                  </v-icon>
                </v-avatar>
              </div>

              <div class="row justify-center pt-3">
                <v-avatar :size="size" color="primary" rounded>
                  <v-icon :size="size - 25" dark>
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

    <v-container class="w-100 p-0 m-0 mt-3">
      <v-row no-gutters>
        <transition name="slide-fade-lr">
          <v-col class="px-0 px-lg-16 px-md-16 px-sm-8 py-0 py-lg-8 py-md-8 order-lg-1 order-md-1 order-1" lg="6" md="6" cols="12" v-if="animSection4">
            <v-card class="mx-auto" elevation="0">
              <v-img height="250" lazy-src="https://www.dropbox.com/s/zj7pehfghjrb0na/04TB-SPIDERSILK-superJumbo.jpg?raw=1" src="https://www.dropbox.com/s/zj7pehfghjrb0na/04TB-SPIDERSILK-superJumbo.jpg?raw=1"></v-img>
              <v-card-actions class="pl-0">
                <v-btn class="anim" color="primary" text @click="dialog1 = true">
                  <span>know more</span>
                  <v-icon class="arrow">mdi-arrow-right</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>

            <v-dialog v-model="dialog1" fullscreen hide-overlay transition="dialog-bottom-transition">
              <v-card class="mx-auto" tile>
                <v-toolbar color="primary" dark elevation="0">
                  <v-btn class="anim" icon dark @click="dialog1 = false">
                    <v-icon class="arrow2">mdi-arrow-left</v-icon>
                  </v-btn>
                  <v-toolbar-title>Decentralizovaná sociálna sieť</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="pt-3">
                  <v-container class="grey lighten-5">
                    <v-row no-gutters>
                      <v-col cols="12" sm="4">
                        <v-list-item class="p-0">
                          <v-list-item-content class="p-0">
                            <vue-plyr>
                              <video controls playsinline>
                                <!-- crossorigin -->
                                <!-- :data-poster="`${$root.envUrlNoApi}/storage/poster/${post_data.video_url.substring(0, post_data.video_url.length - 4)}_poster.png`" -->
                                <!-- <source size="576" src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4" type="video/mp4">
                          <source size="720" src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4" type="video/mp4">
                          <source size="1080" src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4" type="video/mp4"> -->
                                <source size="1080" src="../assets/videos/video_app.mp4" type="video/mp4">
                                <!-- src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4" -->
                                <!-- <track default="" kind="captions" label="English captions" src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt" srclang="en">
                          <track kind="captions" label="Légendes en français" src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt" srclang="fr"> -->
                              </video>
                            </vue-plyr>
                          </v-list-item-content>
                        </v-list-item>
                      </v-col>
                    </v-row>
                  </v-container>

                  <div>
                    <ul style="margin: 0; padding: 0">
                      <li v-for="(image, index) in media" :key="index" style="display: inline-block; margin: 0 5px 5px 0">
                        <img :src="image.thumb" style="height: 100px; cursor: pointer" @click="openGallery(index)">
                      </li>
                    </ul>

                    <LightBox ref="lightbox" :media="media" :show-caption="true" :show-light-box="false" />
                  </div>
                </v-card-text>
              </v-card>
            </v-dialog>

            <v-card class="mx-auto" elevation="0">
              <v-img height="250" lazy-src="https://cdn.vuetifyjs.com/images/cards/cooking.png" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
              <v-card-actions class="pl-0">
                <v-btn class="anim" color="primary" text>
                  <span>know more</span>
                  <v-icon transition="slide-x-transition" class="arrow">mdi-arrow-right</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </transition>

        <transition name="slide-fade-rl">
          <v-col class="px-0 px-lg-16 px-md-16 px-sm-8 py-0 py-lg-8 py-md-8 order-lg-2 order-md-2 order-2" lg="6" md="6" cols="12" v-if="animSection4">
            <v-card class="mx-auto" elevation="0">
              <v-img height="250" lazy-src="https://cdn.vuetifyjs.com/images/cards/cooking.png" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
              <v-card-actions class="pl-0">
                <v-btn class="anim" color="primary" text>
                  <span>know more</span>
                  <v-icon transition="slide-x-transition" class="arrow">mdi-arrow-right</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>

            <v-card class="mx-auto" elevation="0">
              <v-img height="250" lazy-src="https://cdn.vuetifyjs.com/images/cards/cooking.png" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
              <v-card-actions class="pl-0">
                <v-btn class="anim" color="primary" text>
                  <span>know more</span>
                  <v-icon transition="slide-x-transition" class="arrow">mdi-arrow-right</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>

          </v-col>
        </transition>
      </v-row>
    </v-container>
  </section>

  <section id="section5" class="fullpage">
    <Footer />
  </section>
</div>
</template>

<script>
import VuePlyr from 'vue-plyr';
import 'vue-plyr/dist/vue-plyr.css';

import LightBox from 'vue-it-bigger'
import('vue-it-bigger/dist/vue-it-bigger.min.css') // when using webpack
const gradients = [
  ['#222'],
  ['#42b3f4'],
  ['red', 'orange', 'yellow'],
  ['purple', 'violet'],
  ['#00c6ff', '#F0F', '#FF0'],
  ['#f72047', '#ffd200', '#1feaea'],
]
import Footer from "../components/Footer.vue";
export default {
  name: 'Section',
  components: {
    LightBox,
    'vue-plyr': VuePlyr,
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
      animTown: false,
      animSection1: true,
      animSection2: true,
      animSection3: true,
      animSection4: true,
      animSection5: true,
      schools: [{
          color: 'accent',
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
      dialog1: false,
      overlay: false,

      width: 4,
      radius: 10,
      padding: 8,
      lineCap: 'round',
      gradient: gradients[5],
      value: [9, 9, 9, 9, 7, 7, 7, 7],
      gradientDirection: 'left',
      gradients,
      fill: false,
      type: 'trend',
      autoLineWidth: false,

      town: 'Ždaňa',
      chipXLarge: false,
      chipLarge: false,
      chipMedium: false,
      publicPath: process.env.BASE_URL,

      media: [{ // For an image
          type: 'image', // Can be omitted for image
          thumb: 'https://www.dropbox.com/s/zj7pehfghjrb0na/04TB-SPIDERSILK-superJumbo.jpg?raw=1',
          src: 'https://www.dropbox.com/s/zj7pehfghjrb0na/04TB-SPIDERSILK-superJumbo.jpg?raw=1',
          caption: 'Caption to display. HTML <b>enabled</b>', // Optional
          srcset: 'https://www.dropbox.com/s/zj7pehfghjrb0na/04TB-SPIDERSILK-superJumbo.jpg?raw=1' // Optional for displaying responsive images
        },
        { // For a YouTube video
          type: 'youtube',
          thumb: 'https://img.youtube.com/vi/WsptdUFthWI/hqdefault.jpg',
          id: 'WsptdUFthWI',
          caption: 'HTML <b>enabled</b> caption to display' // Optional
        },
        { // For a video that can be played in the <video> tag
          type: 'video',
          thumb: 'https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg',
          sources: [{
            src: 'https://www.w3schools.com/html/mov_bbb.mp4',
            type: 'video/mp4'
          }],
          caption: '<h4>Monsters Inc.</h4>',
          width: 800, // Required
          height: 600, // Required
          autoplay: true // Optional: Autoplay video when the lightbox opens
        }
      ],
      // height: null,
      // sections: ['this.showSection0', 'this.showSection1', 'this.showSection2', 'this.showSection3', 'this.showSection4'],
    }
  },

  computed: {
    size() {
      let size = 0
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          size = 80
          break;
        case 'sm':
          size = 100
          break;
        case 'md':
          size = 150
          break;
        case 'lg':
          size = 150
          break;
        case 'xl':
          size = 150;
      }
      return size;
    },

    chipSize() {
      let chipLarge = false;
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          chipLarge = false
          break;
        case 'sm':
          chipLarge = true
          break;
        case 'md':
          chipLarge = true
          break;
        case 'lg':
          chipLarge = true
          break;
        case 'xl':
          chipLarge = true;
      }
      return chipLarge;
    },
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
        console.log("here");
        setTimeout(() => {
          this.animSection0 = true;
          this.animSection1 = false;
          this.animSection2 = false;
          this.animSection3 = false;
          this.animSection4 = false;
          this.animSection5 = false;
          setTimeout(() => {
            this.animTown = true;
          }, 1700);
        }, 200);
      } else if (this.activeAnimation == 'section1') {
        setTimeout(() => {
          this.animSection1 = true;
          this.animSection0 = false;
          this.animSection2 = false;
          this.animSection3 = false;
          this.animSection4 = false;
          this.animSection5 = false;
          this.animTown = false;
        }, 200);
      } else if (this.activeAnimation == 'section2') {
        setTimeout(() => {
          this.animSection2 = true;
          this.animSection0 = false;
          this.animSection1 = false;
          this.animSection3 = false;
          this.animSection4 = false;
          this.animSection5 = false;
          this.animTown = false;
        }, 200);
      } else if (this.activeAnimation == 'section3') {
        setTimeout(() => {
          this.animSection3 = true;
          this.animSection0 = false;
          this.animSection1 = false;
          this.animSection2 = false;
          this.animSection4 = false;
          this.animSection5 = false;
          this.animTown = false;
        }, 200);
      } else if (this.activeAnimation == 'section4') {
        setTimeout(() => {
          this.animSection4 = true;
          this.animSection0 = false;
          this.animSection1 = false;
          this.animSection2 = false;
          this.animSection3 = false;
          this.animSection5 = false;
          this.animTown = false;
        }, 200);
      } else {
        setTimeout(() => {
          this.animSection5 = true;
          this.animSection0 = false;
          this.animSection1 = false;
          this.animSection2 = false;
          this.animSection3 = false;
          this.animSection4 = false;
          this.animTown = false;
        }, 200);
      }
    }
  },

  mounted() {
    this.calculateSectionOffsets();
    this.whatSection();
    // this.sectionPositionsValues = [];
    // this.sectionPositionsValues.push(window.scrollY + document.querySelector('#section0').getBoundingClientRect().top);
    // this.sectionPositionsValues.push(window.scrollY + document.querySelector('#section1').getBoundingClientRect().top);
    // this.sectionPositionsValues.push(window.scrollY + document.querySelector('#section2').getBoundingClientRect().top);
    // this.sectionPositionsValues.push(window.scrollY + document.querySelector('#section3').getBoundingClientRect().top);
    // this.sectionPositionsValues.push(window.scrollY + document.querySelector('#section4').getBoundingClientRect().top);
    // this.sectionPositionsValues.push(window.scrollY + document.querySelector('#section5').getBoundingClientRect().top);
    // this.$emit('sectionPositions', this.sectionPositionsValues);
    // console.log(window.scrollY + document.querySelector('#section0').getBoundingClientRect().top);
    // console.log(window.scrollY + document.querySelector('#section1').getBoundingClientRect().top);
    // console.log(window.scrollY + document.querySelector('#section2').getBoundingClientRect().top);
    // console.log(window.scrollY + document.querySelector('#section3').getBoundingClientRect().top);
    // console.log(window.scrollY + document.querySelector('#section4').getBoundingClientRect().top);
    // console.log(window.scrollY + document.querySelector('#section5').getBoundingClientRect().top);
  },

  updated() {
    localStorage.setItem('activeSection', this.activeSection);
    let section = localStorage.getItem('activeSection');
    console.log("here");
    if (section == 0) {
      this.showSection0 = true;
      // this.showSection1 = false;
      // this.showSection2 = false;
      // this.showSection3 = false;
      // this.showSection4 = false;
    } else if (section == 1) {
      // this.showSection0 = false;
      this.showSection1 = true;
      // this.showSection2 = false;
      // this.showSection3 = false;
      // this.showSection4 = false;
    } else if (section == 2) {
      this.showSection1 = true;
    } else if (section == 3) {
      this.showSection1 = true;
    } else {
      this.showSection1 = true;
    }
  },

  methods: {
    openGallery(index) {
      this.$refs.lightbox.showImage(index)
    },

    whatSection() {
      let section = localStorage.getItem('activeSection')
      console.log(section);
      if (section == '0') {
        setTimeout(() => {
          this.animSection0 = true;
          // this.animSection1 = false;
          // this.animSection2 = false;
          // this.animSection3 = false;
          // this.animSection4 = false;
          setTimeout(() => {
            this.animTown = true;
          }, 1700);
        }, 200);
      } else if (section == '1') {
        setTimeout(() => {
          this.animSection1 = true;
          this.animSection0 = false;
          this.animSection2 = false;
          this.animSection3 = false;
          this.animSection4 = false;
          this.animTown = false;
        }, 200);
      } else if (section == '2') {
        setTimeout(() => {
          this.animSection2 = true;
          this.animSection0 = false;
          this.animSection1 = false;
          this.animSection3 = false;
          this.animSection4 = false;
          this.animTown = false;
        }, 200);
      } else if (section == '3') {
        setTimeout(() => {
          this.animSection3 = true;
          this.animSection0 = false;
          this.animSection1 = false;
          this.animSection2 = false;
          this.animSection4 = false;
          this.animTown = false;
        }, 200);
      } else if (section == '4') {
        setTimeout(() => {
          this.animSection4 = true;
          this.animSection0 = false;
          this.animSection1 = false;
          this.animSection2 = false;
          this.animSection3 = false;
          this.animTown = false;
        }, 200);
      } else {
        setTimeout(() => {
          this.animSection5 = true;
          this.animSection0 = false;
          this.animSection1 = false;
          this.animSection2 = false;
          this.animSection3 = false;
          this.animSection4 = false;
          this.animTown = false;
        }, 200);
      }
    },

    calculateSectionOffsets() {
      let sections = document.getElementsByTagName('section');
      let length = sections.length;
      for (let i = 0; i < length; i++) {
        let sectionOffset = sections[i].offsetTop;
        console.log(sectionOffset);
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
      console.log(this.activeSection);
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

    // scrollToSection(id, force = false) {
    //   if (this.inMove && !force) return false;
    //
    //   this.activeSection = id;
    //   this.inMove = true;
    //
    //   this.$emit('toNumberFromSection', id);
    //   document.getElementsByTagName('section')[id].scrollIntoView({
    //     behavior: 'smooth'
    //   });
    //
    //   console.log(document.getElementsByTagName('section')[id].id);
    //
    //   if (document.getElementsByTagName('section')[id].id == 'section0') {
    //     setTimeout(() => {
    //       this.animSection0 = true;
    //       // this.animSection1 = false;
    //       // this.animSection2 = false;
    //       // this.animSection3 = false;
    //       // this.animSection4 = false;
    //     }, 400);
    //   } else if (document.getElementsByTagName('section')[id].id == 'section1') {
    //     setTimeout(() => {
    //       this.animSection1 = true;
    //       // this.animSection0 = false;
    //       // this.animSection2 = false;
    //       // this.animSection3 = false;
    //       // this.animSection4 = false;
    //     }, 400);
    //   } else if (document.getElementsByTagName('section')[id].id == 'section2') {
    //     setTimeout(() => {
    //       this.animSection2 = true;
    //       // this.animSection0 = false;
    //       // this.animSection1 = false;
    //       // this.animSection3 = false;
    //       // this.animSection4 = false;
    //     }, 400);
    //   } else if (document.getElementsByTagName('section')[id].id == 'section3') {
    //     setTimeout(() => {
    //       this.animSection3 = true;
    //       // this.animSection0 = false;
    //       // this.animSection1 = false;
    //       // this.animSection2 = false;
    //       // this.animSection4 = false;
    //     }, 400);
    //   } else if (document.getElementsByTagName('section')[id].id == 'section4') {
    //     setTimeout(() => {
    //       this.animSection4 = true;
    //       // this.animSection0 = false;
    //       // this.animSection1 = false;
    //       // this.animSection2 = false;
    //       // this.animSection3 = false;
    //     }, 200);
    //   } else {
    //     setTimeout(() => {
    //       this.animSection5 = true;
    //       // this.animSection0 = false;
    //       // this.animSection1 = false;
    //       // this.animSection2 = false;
    //       // this.animSection3 = false;
    //       // this.animSection4 = false;
    //     }, 200);
    //   }
    //
    //   // var element = document.getElementById("section" + id);
    //   setTimeout(() => {
    //     this.inMove = false;
    //   }, 400);
    // },
    // touchStart(e) {
    //   console.log("-------------1---------------");
    //   console.log(e.touches[0].clientY);
    //   console.log("-----------------------------");
    //   e.preventDefault();
    //   this.touchStartY = e.touches[0].clientY;
    // },
    // touchMove(e) {
    //   console.log("-------------2---------------");
    //   console.log(e.touches[0].clientY);
    //   console.log("-----------------------------");
    //   console.log(this.inMove);
    //   console.log("*****************************");
    //   if (this.inMove) return false;
    //   e.preventDefault();
    //
    //   const currentY = e.touches[0].clientY;
    //   console.log(this.touchStartY + ' ' + currentY);
    //
    //   if (this.touchStartY < currentY) {
    //     this.moveDown();
    //   } else {
    //     this.moveUp();
    //   }
    //
    //   this.touchStartY = 0;
    //   return false;
    // },
    //
    // startHandler(e) {
    //   // e.preventDefault();
    //   if (e.changedTouches != undefined) {
    //     this.touchStartY = e.changedTouches[0].clientY;
    //   }
    //   console.log("startHandler");
    // },
    //
    // movingHandler(e) {
    //   if (e.changedTouches != undefined) {
    //     if (this.inMove) return false;
    //     // e.preventDefault();
    //
    //     const currentY = e.changedTouches[0].clientY;
    //
    //     if (this.touchStartY < currentY) {
    //       this.moveDown();
    //     } else {
    //       this.moveUp();
    //     }
    //
    //     this.touchStartY = 0;
    //     return false;
    //   }
    //   console.log("s");
    // },
    //
    // swipeHandler(direction) {
    //
    //   console.log(direction) // May be left / right / top / bottom
    // },
    //
    // touchHandler(e) {
    //   console.log("-------------3---------------");
    //   console.log(e.changedTouches[0].clientY);
    //   console.log("-----------------------------");
    //   e.preventDefault(e);
    //   if (e.changedTouches[0] != undefined) {
    //     this.touchStartY = e.changedTouches[0].clientY;
    //   }
    // },
    //
    // movedHandler(e) {
    //   console.log("-------------4---------------");
    //   console.log(e.changedTouches[0].clientY);
    //   console.log("-----------------------------");
    //   if (this.inMove) return false;
    //   // e.preventDefault();
    //   const currentY = e.changedTouches[0].clientY;
    //   console.log("here");
    //   if (this.touchStartY < currentY) {
    //     this.moveDown();
    //   } else {
    //     this.moveUp();
    //   }
    //
    //   this.touchStartY = 0;
    //   return false;
    // },
  },

  created() {
    this.calculateSectionOffsets();

    window.addEventListener('DOMMouseScroll', this.handleMouseWheelDOM); // Mozilla Firefox
    window.addEventListener('mousewheel', this.handleMouseWheel, {
      passive: false
    }); // Other browsers
    //
    // if (localStorage.getItem('activeSection') != null) {
    //   this.activeSection = localStorage.getItem('activeSection');
    // }
    // window.addEventListener('starthandler', this.startHandler, {
    //   passive: false
    // }); // mobile devices
    // window.addEventListener('movinghandler', this.movingHandler, {
    //   passive: false
    // }); // mobile devices

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

    // window.removeEventListener('starthandler', this.startHandler); // mobile devices
    // window.removeEventListener('movinghandler', this.movingHandler); // mobile devices
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
</style>
