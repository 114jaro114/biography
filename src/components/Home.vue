<template lang="html">
  <div class="section pl-5 pr-5">
    <div class="sections-menu">
      <span class="menu-point" v-bind:class="{active: activeSection == index}" @click="scrollToSection(index)" v-for="(offset, index) in offsets" :key="index">
      </span>
    </div>
    <section id="section0" class="fullpage pt-0">
      <v-container class="d-flex flex-wrap w-100 p-0 m-0">
        <v-row class="justify-space-between" no-gutters>
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
                  CSS3 (Vuetify & Bootstrap)
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
                      <v-chip class="ma-2 justify-start white--text" :large="chipSize" color="primary" align="left" v-if="animSection0">
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
                <span class="font-wight-thin text-h5">Jaroslav Balent</span>
              </v-row>
            </v-col>
          </transition>
        </v-row>
      </v-container>
    </section>
    <section id="section1" class="fullpage">
      <transition name="slide-fade-tb">
        <div class="text-lg-h3 text-md-h3 text-h5 mb-9 mt-3" v-if="animSection1">Vzdelanie</div>
      </transition>
      <v-container class="w-100 p-0 m-0">
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
    <section id="section2" class="fullpage">
      <transition name="slide-fade-tb">
        <div class="text-lg-h3 text-md-h3 text-h5 mb-9 mt-3" v-if="animSection2">Znalosti a zručnosti</div>
      </transition>

      <v-container class="d-flex flex-wrap w-100 p-0 m-0">
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

    <section id="section3" class="fullpage">
      <transition name="slide-fade-tb">
        <div class="text-lg-h3 text-md-h3 text-h5 mb-9 mt-3" v-if="animSection3">Záľuby</div>
      </transition>

      <v-container class="text-center w-100 p-0 m-0">
        <v-row no-gutters>
          <transition name="bounce">
            <v-col class="pa-3 order-lg-2 order-md-2 order-3" lg="3" md="6" cols="6" v-if="animSection3">
              <div class="row justify-center px-3">
                <v-hover>
                  <template v-slot:default="{ hover }">
                    <v-card class="w-100 borderCards" outlined>
                      <v-card-subtitle class="p-5">
                        <v-icon class="icon-color" :size="size - 75" dark>
                          mdi-controller
                        </v-icon>
                      </v-card-subtitle>

                      <v-fade-transition>
                        <v-overlay v-if="hover" absolute color="primary">
                          <v-btn text>
                            videohry
                          </v-btn>
                        </v-overlay>
                      </v-fade-transition>
                    </v-card>
                  </template>
                </v-hover>
              </div>

              <div class="row justify-center pt-3 px-3">
                <v-hover>
                  <template v-slot:default="{ hover }">
                    <v-card class="w-100 borderCards" outlined>
                      <v-card-subtitle class="p-5">
                        <v-icon class="icon-color" :size="size - 75" dark>
                          mdi-headphones
                        </v-icon>
                      </v-card-subtitle>
                      <v-fade-transition>
                        <v-overlay v-if="hover" absolute color="primary">
                          <v-btn text>
                            Hudba
                          </v-btn>
                        </v-overlay>
                      </v-fade-transition>
                    </v-card>
                  </template>
                </v-hover>
              </div>

              <div class="row justify-center pt-3 px-3">
                <v-hover>
                  <template v-slot:default="{ hover }">
                    <v-card class="w-100 borderCards" outlined>
                      <v-card-subtitle class="p-5">
                        <v-icon class="icon-color" :size="size - 75" dark>
                          mdi-theater
                        </v-icon>
                      </v-card-subtitle>
                      <v-fade-transition>
                        <v-overlay v-if="hover" absolute color="primary">
                          <v-btn text>
                            Filmy a seriály
                          </v-btn>
                        </v-overlay>
                      </v-fade-transition>
                    </v-card>
                  </template>
                </v-hover>
              </div>
            </v-col>
          </transition>
          <transition name="bounce">
            <v-col class="pa-3 order-lg-2 order-md-2 order-3" lg="3" md="6" cols="6" v-if="animSection3">
              <div class="row justify-center px-3">
                <v-hover>
                  <template v-slot:default="{ hover }">
                    <v-card color="primary" class="w-100 borderCards" outlined>
                      <v-card-subtitle class="p-5">
                        <v-icon :size="size - 75" dark>
                          mdi-soccer
                        </v-icon>
                      </v-card-subtitle>
                      <v-fade-transition>
                        <v-overlay v-if="hover" absolute color="primary">
                          <v-btn text>
                            Futbal
                          </v-btn>
                        </v-overlay>
                      </v-fade-transition>
                    </v-card>
                  </template>
                </v-hover>
              </div>

              <div class="row justify-center pt-3 px-3">
                <v-hover>
                  <template v-slot:default="{ hover }">
                    <v-card color="primary" class="w-100 borderCards" outlined>
                      <v-card-subtitle class="p-5">
                        <v-icon :size="size - 75" dark>
                          mdi-dumbbell
                        </v-icon>
                      </v-card-subtitle>
                      <v-fade-transition>
                        <v-overlay v-if="hover" absolute color="primary">
                          <v-btn text>
                            Posilňovanie
                          </v-btn>
                        </v-overlay>
                      </v-fade-transition>
                    </v-card>
                  </template>
                </v-hover>
              </div>

              <div class="row justify-center pt-3 px-3">
                <v-hover>
                  <template v-slot:default="{ hover }">
                    <v-card color="primary" class="w-100 borderCards" outlined>
                      <v-card-subtitle class="p-5">
                        <v-icon :size="size - 75" dark>
                          mdi-skate
                        </v-icon>
                      </v-card-subtitle>
                      <v-fade-transition>
                        <v-overlay v-if="hover" absolute color="primary">
                          <v-btn text>
                            Korčuľovanie
                          </v-btn>
                        </v-overlay>
                      </v-fade-transition>
                    </v-card>
                  </template>
                </v-hover>
              </div>
            </v-col>
          </transition>
          <transition name="bounce">
            <v-col class="pa-3 order-lg-2 order-md-2 order-3" lg="3" md="6" cols="6" v-if="animSection3">
              <div class="row justify-center pt-3 pt-md-0 pt-lg-0 px-3">
                <v-hover>
                  <template v-slot:default="{ hover }">
                    <v-card class="w-100 borderCards" outlined>
                      <v-card-subtitle class="p-5">
                        <v-icon class="icon-color" :size="size - 75" dark>
                          mdi-fish
                        </v-icon>
                      </v-card-subtitle>
                      <v-fade-transition>
                        <v-overlay v-if="hover" absolute color="primary">
                          <v-btn text>
                            Rybolov
                          </v-btn>
                        </v-overlay>
                      </v-fade-transition>
                    </v-card>
                  </template>
                </v-hover>
              </div>

              <div class="row justify-center pt-3 px-3">
                <v-hover>
                  <template v-slot:default="{ hover }">
                    <v-card class="w-100 borderCards" outlined>
                      <v-card-subtitle class="p-5">
                        <v-icon class="icon-color" :size="size - 75" dark>
                          mdi-swim
                        </v-icon>
                      </v-card-subtitle>
                      <v-fade-transition>
                        <v-overlay v-if="hover" absolute color="primary">
                          <v-btn text>
                            Plávanie
                          </v-btn>
                        </v-overlay>
                      </v-fade-transition>
                    </v-card>
                  </template>
                </v-hover>
              </div>

              <div class="row justify-center pt-3 px-3">
                <v-hover>
                  <template v-slot:default="{ hover }">
                    <v-card class="w-100 borderCards" outlined>
                      <v-card-subtitle class="p-5">
                        <v-icon class="icon-color" :size="size - 75" dark>
                          mdi-bike
                        </v-icon>
                      </v-card-subtitle>
                      <v-fade-transition>
                        <v-overlay v-if="hover" absolute color="primary">
                          <v-btn text>
                            Bicyklovanie
                          </v-btn>
                        </v-overlay>
                      </v-fade-transition>
                    </v-card>
                  </template>
                </v-hover>
              </div>
            </v-col>
          </transition>
          <transition name="bounce">
            <v-col class="pa-3 order-lg-2 order-md-2 order-3" lg="3" md="6" cols="6" v-if="animSection3">
              <div class="row justify-center pt-3 pt-md-0 pt-lg-0 px-3">
                <v-hover>
                  <template v-slot:default="{ hover }">
                    <v-card color="primary" class="w-100 borderCards" outlined>
                      <v-card-subtitle class="p-5">
                        <v-icon :size="size - 75" dark>
                          mdi-chef-hat
                        </v-icon>
                      </v-card-subtitle>
                      <v-fade-transition>
                        <v-overlay v-if="hover" absolute color="primary">
                          <v-btn text>
                            Varenie
                          </v-btn>
                        </v-overlay>
                      </v-fade-transition>
                    </v-card>
                  </template>
                </v-hover>
              </div>

              <div class="row justify-center pt-3 px-3">
                <v-hover>
                  <template v-slot:default="{ hover }">
                    <v-card color="primary" class="w-100 borderCards" outlined>
                      <v-card-subtitle class="p-5">
                        <v-icon :size="size - 75" dark>
                          mdi-shovel
                        </v-icon>
                      </v-card-subtitle>
                      <v-fade-transition>
                        <v-overlay v-if="hover" absolute color="primary">
                          <v-btn text>
                            Pestovanie
                          </v-btn>
                        </v-overlay>
                      </v-fade-transition>
                    </v-card>
                  </template>
                </v-hover>
              </div>

              <div class="row justify-center pt-3 px-3">
                <v-hover>
                  <template v-slot:default="{ hover }">
                    <v-card color="primary" class="w-100 borderCards" outlined>
                      <v-card-subtitle class="p-5">
                        <v-icon :size="size - 75" dark>
                          mdi-forest
                        </v-icon>
                      </v-card-subtitle>
                      <v-fade-transition>
                        <v-overlay v-if="hover" absolute color="primary">
                          <v-btn text>
                            Turistika
                          </v-btn>
                        </v-overlay>
                      </v-fade-transition>
                    </v-card>
                  </template>
                </v-hover>
              </div>
            </v-col>
          </transition>
        </v-row>
      </v-container>
    </section>

    <section id="section4" class="fullpage">
      <transition name="slide-fade-tb">
        <div class="text-lg-h3 text-md-h3 text-h5 mb-9 mt-3" v-if="animSection4">Portfólio</div>
      </transition>

      <v-container class="w-100 p-0 m-0">
        <v-row no-gutters>
          <transition name="slide-fade-lr">
            <v-col class="px-0 px-lg-16 px-md-16 px-sm-16 order-lg-1 order-md-1 order-1" lg="6" md="6" cols="12" v-if="animSection4">
              <!-- py-0 py-lg-8 py-md-8 -->
              <!-- <v-img height="250" lazy-src="https://www.dropbox.com/s/zj7pehfghjrb0na/04TB-SPIDERSILK-superJumbo.jpg?raw=1" src="https://www.dropbox.com/s/zj7pehfghjrb0na/04TB-SPIDERSILK-superJumbo.jpg?raw=1" @load="onImgLoad" hidden></v-img> -->
              <!-- <v-skeleton-loader v-else class="mx-auto w-100" type="image"></v-skeleton-loader> -->

              <v-hover>
                <template v-slot:default="{ hover }">
                  <v-card dark class="w-100 mx-auto" elevation="0">
                    <v-img style="cursor: pointer" :lazy-src="require('../assets/img/cabin/32.png')" :src="require('../assets/img/cabin/32.png')" height="250">
                      <template v-slot:placeholder>
                        <v-card dark class="w-100 d-flex text-center align-center justify-center" height="250" elevation="0" >
                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                        </v-card>
                      </template>
                    </v-img>
                    <v-fade-transition>
                      <v-overlay v-if="hover" absolute color="primary">
                        <v-btn class="anim" text @click="dialog1 = true">
                          <span>viac informácií</span>
                          <v-icon class="arrow">mdi-arrow-right</v-icon>
                        </v-btn>
                      </v-overlay>
                    </v-fade-transition>
                  </v-card>
                </template>
              </v-hover>

              <v-dialog v-model="dialog1" scrollable fullscreen hide-overlay transition="dialog-bottom-transition">
                <v-card class="mx-auto">
                  <v-toolbar color="primary" dark elevation="0">
                    <v-btn class="anim" icon dark @click="dialog1 = false">
                      <v-icon class="arrow2">mdi-arrow-left</v-icon>
                    </v-btn>
                    <v-toolbar-title>Decentralizovaná sociálna sieť</v-toolbar-title>
                  </v-toolbar>
                  <v-card-text class="d-flex pt-3 justify-center">
                    <v-container class="m-0 ">
                      <v-row>
                        <v-col v-for="(image, index) in media" :key="'media' + index" class="d-flex child-flex container_images" cols="12" lg="4" md="4" sm="6" style="overflow: hidden">
                          <v-card class="card_images" elevation="0">
                            <v-img style="cursor: pointer" class="zoom" :lazy-src="image.thumb" :src="image.thumb" aspect-ratio="1.5" @click="openGallery(index)">
                              <template v-slot:placeholder>
                                <v-row class="fill-height ma-0" align="center" justify="center">
                                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                </v-row>
                              </template>
                            </v-img>
                          </v-card>
                        </v-col>
                        <LightBox ref="lightbox" :media="media" :show-caption="true" :show-light-box="false" />
                      </v-row>
                    </v-container>
                  </v-card-text>
                </v-card>
              </v-dialog>

              <!-- //////////////////////////////////////////////////////////////////////////////////////////cabin -->
              <v-hover>
                <template v-slot:default="{ hover }">
                  <v-card dark class="w-100 mx-auto mt-6 mt-lg-16 mt-md-16" elevation="0">
                    <v-img style="cursor: pointer" :lazy-src="require('../assets/img/cabin/32.png')" :src="require('../assets/img/cabin/32.png')" height="250">
                      <template v-slot:placeholder>
                        <v-card dark class="w-100 d-flex text-center align-center justify-center" height="250" elevation="0" >
                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                        </v-card>
                      </template>
                    </v-img>
                    <v-fade-transition>
                      <v-overlay v-if="hover" absolute color="primary">
                        <v-btn class="anim" text @click="dialog2 = true">
                          <span>viac informácií</span>
                          <v-icon class="arrow">mdi-arrow-right</v-icon>
                        </v-btn>
                      </v-overlay>
                    </v-fade-transition>
                  </v-card>
                </template>
              </v-hover>

              <v-dialog v-model="dialog2" scrollable fullscreen hide-overlay transition="dialog-bottom-transition">
                <v-card class="mx-auto">
                  <v-toolbar color="primary" dark elevation="0">
                    <v-btn class="anim" icon dark @click="dialog2 = false">
                      <v-icon class="arrow2">mdi-arrow-left</v-icon>
                    </v-btn>
                    <v-toolbar-title>Byšta</v-toolbar-title>
                  </v-toolbar>
                  <v-card-text class="d-flex pt-3 justify-center">
                    <v-container class="m-0 ">
                      <v-row>
                        <v-col v-for="(image, index) in media2" :key="'media2' + index" class="d-flex child-flex container_images" cols="12" lg="4" md="4" sm="6" style="overflow: hidden">
                          <v-card class="card_images" elevation="0">
                            <v-img style="cursor: pointer" class="zoom" :lazy-src="image.thumb" :src="image.thumb" aspect-ratio="1.5" @click="openGallery(index)">
                              <template v-slot:placeholder>
                                <v-row class="fill-height ma-0" align="center" justify="center">
                                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                </v-row>
                              </template>
                            </v-img>
                          </v-card>
                        </v-col>
                        <LightBox ref="lightbox" :media="media2" :show-caption="true" :show-light-box="false" />
                      </v-row>
                    </v-container>
                  </v-card-text>
                </v-card>
              </v-dialog>
            </v-col>
          </transition>

          <transition name="slide-fade-rl">
            <v-col class="px-0 px-lg-16 px-md-16 px-sm-16 pt-6 pt-sm-0 pt-md-0 pt-lg-0 order-lg-2 order-md-2 order-2" lg="6" md="6" cols="12" v-if="animSection4">
              <!-- py-0 py-lg-8 py-md-8  -->
              <v-hover>
                <template v-slot:default="{ hover }">
                  <v-card dark class="w-100 mx-auto" elevation="0">
                    <v-img style="cursor: pointer" :lazy-src="require('../assets/img/cabin/32.png')" :src="require('../assets/img/cabin/32.png')" height="250">
                      <template v-slot:placeholder>
                        <v-card dark class="w-100 d-flex text-center align-center justify-center" height="250" elevation="0" >
                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                        </v-card>
                      </template>
                    </v-img>
                    <v-fade-transition>
                      <v-overlay v-if="hover" absolute color="primary">
                        <v-btn class="anim" text @click="dialog3 = true">
                          <span>viac informácií</span>
                          <v-icon class="arrow">mdi-arrow-right</v-icon>
                        </v-btn>
                      </v-overlay>
                    </v-fade-transition>
                  </v-card>
                </template>
              </v-hover>

              <v-dialog v-model="dialog3" scrollable fullscreen hide-overlay transition="dialog-bottom-transition">
                <v-card class="mx-auto">
                  <v-toolbar color="primary" dark elevation="0">
                    <v-btn class="anim" icon dark @click="dialog3 = false">
                      <v-icon class="arrow2">mdi-arrow-left</v-icon>
                    </v-btn>
                    <v-toolbar-title>OpenLab</v-toolbar-title>
                  </v-toolbar>
                  <v-card-text class="d-flex pt-3 justify-center">
                    <v-container class="m-0">
                      <v-row>
                        <v-col v-for="(image, index) in media3" :key="'media3' + index" class="d-flex child-flex container_images" cols="12" lg="4" md="4" sm="6" style="overflow: hidden">
                          <v-card class="card_images" elevation="0">
                            <v-img style="cursor: pointer" class="zoom" :lazy-src="image.thumb" :src="image.thumb" aspect-ratio="1.5" @click="openGallery(index)">
                              <template v-slot:placeholder>
                                <v-row class="fill-height ma-0" align="center" justify="center">
                                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                </v-row>
                              </template>
                            </v-img>
                          </v-card>
                        </v-col>
                        <LightBox ref="lightbox" :media="media3" :show-caption="true" :show-light-box="false" />
                      </v-row>
                    </v-container>
                  </v-card-text>
                </v-card>
              </v-dialog>

              <v-hover>
                <template v-slot:default="{ hover }">
                  <v-card dark class="w-100 mx-auto mt-6 mt-lg-16 mt-md-16" elevation="0">
                    <v-img style="cursor: pointer" :lazy-src="require('../assets/img/cabin/32.png')" :src="require('../assets/img/cabin/32.png')" height="250">
                      <template v-slot:placeholder>
                        <v-card dark class="w-100 d-flex text-center align-center justify-center" height="250" elevation="0" >
                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                        </v-card>
                      </template>
                    </v-img>
                    <v-fade-transition>
                      <v-overlay v-if="hover" absolute color="primary">
                        <v-btn class="anim" text @click="dialog4 = true">
                          <span>viac informácií</span>
                          <v-icon class="arrow">mdi-arrow-right</v-icon>
                        </v-btn>
                      </v-overlay>
                    </v-fade-transition>
                  </v-card>
                </template>
              </v-hover>

              <v-dialog v-model="dialog4" scrollable fullscreen hide-overlay transition="dialog-bottom-transition">
                <v-card class="mx-auto">
                  <v-toolbar color="primary" dark elevation="0">
                    <v-btn class="anim" icon dark @click="dialog4 = false">
                      <v-icon class="arrow2">mdi-arrow-left</v-icon>
                    </v-btn>
                    <v-toolbar-title>Parser</v-toolbar-title>
                  </v-toolbar>
                  <v-card-text class="d-flex pt-3 justify-center">
                    <v-container class="m-0">
                      <v-row>
                        <v-col v-for="(image, index) in media4" :key="'media4' + index" class="d-flex child-flex container_images" cols="12" lg="4" md="4" sm="6" style="overflow: hidden">
                          <v-card class="card_images" elevation="0">
                            <v-img style="cursor: pointer" class="zoom" :lazy-src="image.thumb" :src="image.thumb" aspect-ratio="1.5" @click="openGallery(index)">
                              <template v-slot:placeholder>
                                <v-row class="fill-height ma-0" align="center" justify="center">
                                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                </v-row>
                              </template>
                            </v-img>
                          </v-card>
                        </v-col>
                        <LightBox ref="lightbox" :media="media4" :show-caption="true" :show-light-box="false" />
                      </v-row>
                    </v-container>
                  </v-card-text>
                </v-card>
              </v-dialog>

            </v-col>
          </transition>
        </v-row>
      </v-container>
    </section>

    <section id="section5" class="fullpage pt-0">
      <Footer />
    </section>
  </div>
</template>

<script>
import LightBox from 'vue-it-bigger'
import('vue-it-bigger/dist/vue-it-bigger.min.css') // when using webpack

// const gradients = [
//   ['#222'],
//   ['#42b3f4'],
//   ['red', 'orange', 'yellow'],
//   ['purple', 'violet'],
//   ['#00c6ff', '#F0F', '#FF0'],
//   ['#f72047', '#ffd200', '#1feaea'],
// ]

const gradients = [
  ['#ffffff', '#1976d2']
]
import Footer from "../components/Footer.vue";

export default {
  components: {
    LightBox,
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
    poh: {
      type: Number,
      default: null
    },
  },
  data() {
    return {
      inMove: false,
      activeSection: localStorage.getItem('activeSection'),
      offsets: [],
      touchStartY: 0,
      showSection0: false,
      showSection1: false,
      showSection2: false,
      showSection3: false,
      showSection4: false,
      showSection5: false,
      animTown: false,
      animSection0: true,
      animSection1: true,
      animSection2: true,
      animSection3: true,
      animSection4: true,
      animSection5: true,
      schools: [{
          color: 'primary',
          year: '2020-2022',
          type: 'Vysokoškolské vzdelanie II. stupňa',
          name: 'Technická univerzita v Košiciach, Fakulta elektrotechniky a informatiky',
          study_department: 'Študijný odbor: Informatika',
          type_of_work: 'Diplomová práca: Decentralizovaná sociálna sieť'
        },
        {
          color: 'primary',
          year: '2017-2020',
          type: 'Vysokoškolské vzdelanie I. stupňa',
          name: 'Technická univerzita v Košiciach, Fakulta elektrotechniky a informatiky',
          study_department: 'Študijný odbor: Informatika',
          type_of_work: 'Bakalárska práca:  Teplomer s monitorovacou aplikáciou pre Android'
        },
        {
          color: 'primary',
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
      dialog2: false,
      dialog3: false,
      dialog4: false,
      overlay: false,

      width: 4,
      radius: 10,
      padding: 8,
      lineCap: 'round',
      gradient: gradients[0],
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

      media: [{ // For an image
          type: 'image', // Can be omitted for image
          thumb: 'https://www.dropbox.com/s/zj7pehfghjrb0na/04TB-SPIDERSILK-superJumbo.jpg?raw=1',
          src: 'https://www.dropbox.com/s/zj7pehfghjrb0na/04TB-SPIDERSILK-superJumbo.jpg?raw=1',
          caption: 'Caption to display. HTML <b>enabled</b>', // Optional
          srcset: 'https://www.dropbox.com/s/zj7pehfghjrb0na/04TB-SPIDERSILK-superJumbo.jpg?raw=1' // Optional for displaying responsive images
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

      //cabin
      media2: [{ // For an image
          type: 'image', // Can be omitted for image
          thumb: 'https://www.dropbox.com/s/mlc8vc0sz9qjgbe/1.png?raw=1',
          src: 'https://www.dropbox.com/s/mlc8vc0sz9qjgbe/1.png?raw=1',
          caption: 'Caption to display. HTML <b>enabled</b>', // Optional
          srcset: 'https://www.dropbox.com/s/mlc8vc0sz9qjgbe/1.png?raw=1' // Optional for displaying responsive images
        }, { // For an image
          type: 'image', // Can be omitted for image
          thumb: 'https://www.dropbox.com/s/jvcp5gv0qev56x8/2.png?raw=1',
          src: 'https://www.dropbox.com/s/jvcp5gv0qev56x8/2.png?raw=1',
          caption: 'Caption to display. HTML <b>enabled</b>', // Optional
          srcset: 'https://www.dropbox.com/s/jvcp5gv0qev56x8/2.png?raw=1' // Optional for displaying responsive images
        }, { // For an image
          type: 'image', // Can be omitted for image
          thumb: 'https://www.dropbox.com/s/f1b8uia6467avwf/3.png?raw=1',
          src: 'https://www.dropbox.com/s/f1b8uia6467avwf/3.png?raw=1',
          caption: 'Caption to display. HTML <b>enabled</b>', // Optional
          srcset: 'https://www.dropbox.com/s/f1b8uia6467avwf/3.png?raw=1' // Optional for displaying responsive images
        }, { // For an image
          type: 'image', // Can be omitted for image
          thumb: 'https://www.dropbox.com/s/t5ptww9ohi6ijv9/4.png?raw=1',
          src: 'https://www.dropbox.com/s/t5ptww9ohi6ijv9/4.png?raw=1',
          caption: 'Caption to display. HTML <b>enabled</b>', // Optional
          srcset: 'https://www.dropbox.com/s/t5ptww9ohi6ijv9/4.png?raw=1' // Optional for displaying responsive images
        }, { // For an image
          type: 'image', // Can be omitted for image
          thumb: 'https://www.dropbox.com/s/aeldtjlh1889zve/5.png?raw=1',
          src: 'https://www.dropbox.com/s/aeldtjlh1889zve/5.png?raw=1',
          caption: 'Caption to display. HTML <b>enabled</b>', // Optional
          srcset: 'https://www.dropbox.com/s/aeldtjlh1889zve/5.png?raw=1' // Optional for displaying responsive images
        }, { // For an image
          type: 'image', // Can be omitted for image
          thumb: 'https://www.dropbox.com/s/6hbrj2wp5ho66nz/6.png?raw=1',
          src: 'https://www.dropbox.com/s/6hbrj2wp5ho66nz/6.png?raw=1',
          caption: 'Caption to display. HTML <b>enabled</b>', // Optional
          srcset: 'https://www.dropbox.com/s/6hbrj2wp5ho66nz/6.png?raw=1' // Optional for displaying responsive images
        }, { // For an image
          type: 'image', // Can be omitted for image
          thumb: 'https://www.dropbox.com/s/jwwojv6o9upexhh/7.png?raw=1',
          src: 'https://www.dropbox.com/s/jwwojv6o9upexhh/7.png?raw=1',
          caption: 'Caption to display. HTML <b>enabled</b>', // Optional
          srcset: 'https://www.dropbox.com/s/jwwojv6o9upexhh/7.png?raw=1' // Optional for displaying responsive images
        }, { // For an image
          type: 'image', // Can be omitted for image
          thumb: 'https://www.dropbox.com/s/2vtrtqq511a6cfg/8.png?raw=1',
          src: 'https://www.dropbox.com/s/2vtrtqq511a6cfg/8.png?raw=1',
          caption: 'Caption to display. HTML <b>enabled</b>', // Optional
          srcset: 'https://www.dropbox.com/s/2vtrtqq511a6cfg/8.png?raw=1' // Optional for displaying responsive images
        }, { // For an image
          type: 'image', // Can be omitted for image
          thumb: 'https://www.dropbox.com/s/5z741pc4m4b2j2p/9.png?raw=1',
          src: 'https://www.dropbox.com/s/5z741pc4m4b2j2p/9.png?raw=1',
          caption: 'Caption to display. HTML <b>enabled</b>', // Optional
          srcset: 'https://www.dropbox.com/s/5z741pc4m4b2j2p/9.png?raw=1' // Optional for displaying responsive images
        }, { // For an image
          type: 'image', // Can be omitted for image
          thumb: 'https://www.dropbox.com/s/ng6rznhmywa4ugu/10.png?raw=1',
          src: 'https://www.dropbox.com/s/ng6rznhmywa4ugu/10.png?raw=1',
          caption: 'Caption to display. HTML <b>enabled</b>', // Optional
          srcset: 'https://www.dropbox.com/s/ng6rznhmywa4ugu/10.png?raw=1' // Optional for displaying responsive images
        }, { // For an image
          type: 'image', // Can be omitted for image
          thumb: 'https://www.dropbox.com/s/0ngq2orfnnrlin3/11.png?raw=1',
          src: 'https://www.dropbox.com/s/0ngq2orfnnrlin3/11.png?raw=1',
          caption: 'Caption to display. HTML <b>enabled</b>', // Optional
          srcset: 'https://www.dropbox.com/s/0ngq2orfnnrlin3/11.png?raw=1' // Optional for displaying responsive images
        }, { // For an image
          type: 'image', // Can be omitted for image
          thumb: 'https://www.dropbox.com/s/arbyd5csoub2xzn/12.png?raw=1',
          src: 'https://www.dropbox.com/s/arbyd5csoub2xzn/12.png?raw=1',
          caption: 'Caption to display. HTML <b>enabled</b>', // Optional
          srcset: 'https://www.dropbox.com/s/arbyd5csoub2xzn/12.png?raw=1' // Optional for displaying responsive images
        }, { // For an image
          type: 'image', // Can be omitted for image
          thumb: 'https://www.dropbox.com/s/b3g21hldd9d8sgb/13.png?raw=1',
          src: 'https://www.dropbox.com/s/b3g21hldd9d8sgb/13.png?raw=1',
          caption: 'Caption to display. HTML <b>enabled</b>', // Optional
          srcset: 'https://www.dropbox.com/s/b3g21hldd9d8sgb/13.png?raw=1' // Optional for displaying responsive images
        }, { // For an image
          type: 'image', // Can be omitted for image
          thumb: 'https://www.dropbox.com/s/ihds6kdn7ff88i4/14.png?raw=1',
          src: 'https://www.dropbox.com/s/ihds6kdn7ff88i4/14.png?raw=1',
          caption: 'Caption to display. HTML <b>enabled</b>', // Optional
          srcset: 'https://www.dropbox.com/s/ihds6kdn7ff88i4/14.png?raw=1' // Optional for displaying responsive images
        }, { // For an image
          type: 'image', // Can be omitted for image
          thumb: 'https://www.dropbox.com/s/22n1kc6nfdset7n/15.png?raw=1',
          src: 'https://www.dropbox.com/s/22n1kc6nfdset7n/15.png?raw=1',
          caption: 'Caption to display. HTML <b>enabled</b>', // Optional
          srcset: 'https://www.dropbox.com/s/22n1kc6nfdset7n/15.png?raw=1' // Optional for displaying responsive images
        }, { // For an image
          type: 'image', // Can be omitted for image
          thumb: 'https://www.dropbox.com/s/jiuk9yf4nkb5mfi/16.png?raw=1',
          src: 'https://www.dropbox.com/s/jiuk9yf4nkb5mfi/16.png?raw=1',
          caption: 'Caption to display. HTML <b>enabled</b>', // Optional
          srcset: 'https://www.dropbox.com/s/jiuk9yf4nkb5mfi/16.png?raw=1' // Optional for displaying responsive images
        }, { // For an image
          type: 'image', // Can be omitted for image
          thumb: 'https://www.dropbox.com/s/s3bv818qknad5kk/17.png?raw=1',
          src: 'https://www.dropbox.com/s/s3bv818qknad5kk/17.png?raw=1',
          caption: 'Caption to display. HTML <b>enabled</b>', // Optional
          srcset: 'https://www.dropbox.com/s/s3bv818qknad5kk/17.png?raw=1' // Optional for displaying responsive images
        }, { // For an image
          type: 'image', // Can be omitted for image
          thumb: 'https://www.dropbox.com/s/7cw8qpum1naycem/18.png?raw=1',
          src: 'https://www.dropbox.com/s/7cw8qpum1naycem/18.png?raw=1',
          caption: 'Caption to display. HTML <b>enabled</b>', // Optional
          srcset: 'https://www.dropbox.com/s/7cw8qpum1naycem/18.png?raw=1' // Optional for displaying responsive images
        }, { // For an image
          type: 'image', // Can be omitted for image
          thumb: 'https://www.dropbox.com/s/fgdgctcxgdksmvj/19.png?raw=1',
          src: 'https://www.dropbox.com/s/fgdgctcxgdksmvj/19.png?raw=1',
          caption: 'Caption to display. HTML <b>enabled</b>', // Optional
          srcset: 'https://www.dropbox.com/s/fgdgctcxgdksmvj/19.png?raw=1' // Optional for displaying responsive images
        }, { // For an image
          type: 'image', // Can be omitted for image
          thumb: 'https://www.dropbox.com/s/xrxikrck4cijvo2/20.png?raw=1',
          src: 'https://www.dropbox.com/s/xrxikrck4cijvo2/20.png?raw=1',
          caption: 'Caption to display. HTML <b>enabled</b>', // Optional
          srcset: 'https://www.dropbox.com/s/xrxikrck4cijvo2/20.png?raw=1' // Optional for displaying responsive images
        }, { // For an image
          type: 'image', // Can be omitted for image
          thumb: 'https://www.dropbox.com/s/kc3qz4k0rowreu8/21.png?raw=1',
          src: 'https://www.dropbox.com/s/kc3qz4k0rowreu8/21.png?raw=1',
          caption: 'Caption to display. HTML <b>enabled</b>', // Optional
          srcset: 'https://www.dropbox.com/s/kc3qz4k0rowreu8/21.png?raw=1' // Optional for displaying responsive images
        }, { // For an image
          type: 'image', // Can be omitted for image
          thumb: 'https://www.dropbox.com/s/odda5g8beqr4i86/22.png?raw=1',
          src: 'https://www.dropbox.com/s/odda5g8beqr4i86/22.png?raw=1',
          caption: 'Caption to display. HTML <b>enabled</b>', // Optional
          srcset: 'https://www.dropbox.com/s/odda5g8beqr4i86/22.png?raw=1' // Optional for displaying responsive images
        }, { // For an image
          type: 'image', // Can be omitted for image
          thumb: 'https://www.dropbox.com/s/6wh1b8osihgolr9/23.png?raw=1',
          src: 'https://www.dropbox.com/s/6wh1b8osihgolr9/23.png?raw=1',
          caption: 'Caption to display. HTML <b>enabled</b>', // Optional
          srcset: 'https://www.dropbox.com/s/6wh1b8osihgolr9/23.png?raw=1' // Optional for displaying responsive images
        }, { // For an image
          type: 'image', // Can be omitted for image
          thumb: 'https://www.dropbox.com/s/dbjhyc5g279hw2m/24.png?raw=1',
          src: 'https://www.dropbox.com/s/dbjhyc5g279hw2m/24.png?raw=1',
          caption: 'Caption to display. HTML <b>enabled</b>', // Optional
          srcset: 'https://www.dropbox.com/s/dbjhyc5g279hw2m/24.png?raw=1' // Optional for displaying responsive images
        }, { // For an image
          type: 'image', // Can be omitted for image
          thumb: 'https://www.dropbox.com/s/y58m07ihpw2gy0s/25.png?raw=1',
          src: 'https://www.dropbox.com/s/y58m07ihpw2gy0s/25.png?raw=1',
          caption: 'Caption to display. HTML <b>enabled</b>', // Optional
          srcset: 'https://www.dropbox.com/s/y58m07ihpw2gy0s/25.png?raw=1' // Optional for displaying responsive images
        }, { // For an image
          type: 'image', // Can be omitted for image
          thumb: 'https://www.dropbox.com/s/p3kv3z2fe42w4on/26.png?raw=1',
          src: 'https://www.dropbox.com/s/p3kv3z2fe42w4on/26.png?raw=1',
          caption: 'Caption to display. HTML <b>enabled</b>', // Optional
          srcset: 'https://www.dropbox.com/s/p3kv3z2fe42w4on/26.png?raw=1' // Optional for displaying responsive images
        },
        { // For an image
          type: 'image', // Can be omitted for image
          thumb: 'https://www.dropbox.com/s/h78sisi84eyj0j6/27.png?raw=1',
          src: 'https://www.dropbox.com/s/h78sisi84eyj0j6/27.png?raw=1',
          caption: 'Caption to display. HTML <b>enabled</b>', // Optional
          srcset: 'https://www.dropbox.com/s/h78sisi84eyj0j6/27.png?raw=1' // Optional for displaying responsive images
        },
        { // For an image
          type: 'image', // Can be omitted for image
          thumb: 'https://www.dropbox.com/s/0br101ivo38sm6s/28.png?raw=1',
          src: 'https://www.dropbox.com/s/0br101ivo38sm6s/28.png?raw=1',
          caption: 'Caption to display. HTML <b>enabled</b>', // Optional
          srcset: 'https://www.dropbox.com/s/0br101ivo38sm6s/28.png?raw=1' // Optional for displaying responsive images
        },
        { // For an image
          type: 'image', // Can be omitted for image
          thumb: 'https://www.dropbox.com/s/puyp1sawndf5g2z/29.png?raw=1',
          src: 'https://www.dropbox.com/s/puyp1sawndf5g2z/29.png?raw=1',
          caption: 'Caption to display. HTML <b>enabled</b>', // Optional
          srcset: 'https://www.dropbox.com/s/puyp1sawndf5g2z/29.png?raw=1' // Optional for displaying responsive images
        },
        { // For an image
          type: 'image', // Can be omitted for image
          thumb: 'https://www.dropbox.com/s/6d2lfjhu2o741j3/30.png?raw=1',
          src: 'https://www.dropbox.com/s/6d2lfjhu2o741j3/30.png?raw=1',
          caption: 'Caption to display. HTML <b>enabled</b>', // Optional
          srcset: 'https://www.dropbox.com/s/6d2lfjhu2o741j3/30.png?raw=1' // Optional for displaying responsive images
        },
        { // For an image
          type: 'image', // Can be omitted for image
          thumb: 'https://www.dropbox.com/s/281id5ml8wzi6om/31.png?raw=1',
          src: 'https://www.dropbox.com/s/281id5ml8wzi6om/31.png?raw=1',
          caption: 'Caption to display. HTML <b>enabled</b>', // Optional
          srcset: 'https://www.dropbox.com/s/281id5ml8wzi6om/31.png?raw=1' // Optional for displaying responsive images
        },
        { // For an image
          type: 'image', // Can be omitted for image
          thumb: 'https://www.dropbox.com/s/2kf2j1eeyrksntu/32.png?raw=1',
          src: 'https://www.dropbox.com/s/2kf2j1eeyrksntu/32.png?raw=1',
          caption: 'Caption to display. HTML <b>enabled</b>', // Optional
          srcset: 'https://www.dropbox.com/s/2kf2j1eeyrksntu/32.png?raw=1' // Optional for displaying responsive images
        },
        { // For an image
          type: 'image', // Can be omitted for image
          thumb: 'https://www.dropbox.com/s/ltzbe8f5mz3zzuu/33.png?raw=1',
          src: 'https://www.dropbox.com/s/ltzbe8f5mz3zzuu/33.png?raw=1',
          caption: 'Caption to display. HTML <b>enabled</b>', // Optional
          srcset: 'https://www.dropbox.com/s/ltzbe8f5mz3zzuu/33.png?raw=1' // Optional for displaying responsive images
        },
        // { // For a video that can be played in the <video> tag
        //   type: 'video',
        //   thumb: 'https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg',
        //   sources: [{
        //     src: 'https://www.w3schools.com/html/mov_bbb.mp4',
        //     type: 'video/mp4'
        //   }],
        //   caption: '<h4>Monsters Inc.</h4>',
        //   width: 800, // Required
        //   height: 600, // Required
        //   autoplay: true // Optional: Autoplay video when the lightbox opens
        // }
      ],

      media3: [{ // For an image
          type: 'image', // Can be omitted for image
          thumb: 'https://www.dropbox.com/s/zj7pehfghjrb0na/04TB-SPIDERSILK-superJumbo.jpg?raw=1',
          src: 'https://www.dropbox.com/s/zj7pehfghjrb0na/04TB-SPIDERSILK-superJumbo.jpg?raw=1',
          caption: 'Caption to display. HTML <b>enabled</b>', // Optional
          srcset: 'https://www.dropbox.com/s/zj7pehfghjrb0na/04TB-SPIDERSILK-superJumbo.jpg?raw=1' // Optional for displaying responsive images
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

      media4: [{ // For an image
          type: 'image', // Can be omitted for image
          thumb: 'https://www.dropbox.com/s/zj7pehfghjrb0na/04TB-SPIDERSILK-superJumbo.jpg?raw=1',
          src: 'https://www.dropbox.com/s/zj7pehfghjrb0na/04TB-SPIDERSILK-superJumbo.jpg?raw=1',
          caption: 'Caption to display. HTML <b>enabled</b>', // Optional
          srcset: 'https://www.dropbox.com/s/zj7pehfghjrb0na/04TB-SPIDERSILK-superJumbo.jpg?raw=1' // Optional for displaying responsive images
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

      sectionPositionsValues: [],
      positionOfHeader: null,
    }
  },

  computed: {
    size() {
      let size = 0
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          size = 120
          break;
        case 'sm':
          size = 120
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
    // nosfh() {
    //   this.activeSection = this.nosfh;
    // },

    gtt() {
      this.scrollToSection(0);
      this.$emit('resetGtt', false);
    },

    poh() {
      if (this.poh >= this.sectionPositionsValues[0] && this.poh < this.sectionPositionsValues[1]) {
        this.activeSection = 0;
      } else if (this.poh >= this.sectionPositionsValues[1] && this.poh < this.sectionPositionsValues[2]) {
        this.activeSection = 1;
      } else if (this.poh >= this.sectionPositionsValues[2] && this.poh < this.sectionPositionsValues[3]) {
        this.activeSection = 2;
      } else if (this.poh >= this.sectionPositionsValues[3] && this.poh < this.sectionPositionsValues[4]) {
        this.activeSection = 3;
      } else if (this.poh >= this.sectionPositionsValues[4] && this.poh < this.sectionPositionsValues[5]) {
        this.activeSection = 4;
      } else if (this.poh >= this.sectionPositionsValues[5]) {
        this.activeSection = 5;
      }

      this.$emit('toNumberFromSection', this.activeSection);
    },

    activeAnimation() {
      if (this.activeAnimation == 'section0') {
        this.animSection0 = false;
        setTimeout(() => {
          this.animSection0 = true;
          setTimeout(() => {
            this.animTown = true;
          }, 1700);
        }, 200);
      } else if (this.activeAnimation == 'section1') {
        this.animSection1 = false;
        setTimeout(() => {
          this.animSection1 = true;
          this.animTown = false;
        }, 200);
      } else if (this.activeAnimation == 'section2') {
        this.animSection2 = false;
        setTimeout(() => {
          this.animSection2 = true;
          this.animTown = false;
        }, 200);
      } else if (this.activeAnimation == 'section3') {
        this.animSection3 = false;
        setTimeout(() => {
          this.animSection3 = true;
          this.animTown = false;
        }, 200);
      } else if (this.activeAnimation == 'section4') {
        this.animSection4 = false;
        setTimeout(() => {
          this.animSection4 = true;
          this.animTown = false;
        }, 200);
      } else {
        this.animSection5 = false;
        setTimeout(() => {
          this.animSection5 = true;
          this.animTown = false;
        }, 200);
      }
    }
  },

  mounted() {
    this.calculateSectionOffsets();
    this.whatSection();

    this.sectionPositionsValues.splice(0, 5);
    this.sectionPositionsValues.push(window.scrollY + document.querySelector('#section0').getBoundingClientRect().top);
    this.sectionPositionsValues.push(window.scrollY + document.querySelector('#section1').getBoundingClientRect().top);
    this.sectionPositionsValues.push(window.scrollY + document.querySelector('#section2').getBoundingClientRect().top);
    this.sectionPositionsValues.push(window.scrollY + document.querySelector('#section3').getBoundingClientRect().top);
    this.sectionPositionsValues.push(window.scrollY + document.querySelector('#section4').getBoundingClientRect().top);
    this.sectionPositionsValues.push(window.scrollY + document.querySelector('#section5').getBoundingClientRect().top);
    this.$emit('sectionPositions', this.sectionPositionsValues);
  },

  updated() {
    window.addEventListener('resize', () => {
      this.sectionPositionsValues.push(window.scrollY + document.querySelector('#section0').getBoundingClientRect().top);
      this.sectionPositionsValues.push(window.scrollY + document.querySelector('#section1').getBoundingClientRect().top);
      this.sectionPositionsValues.push(window.scrollY + document.querySelector('#section2').getBoundingClientRect().top);
      this.sectionPositionsValues.push(window.scrollY + document.querySelector('#section3').getBoundingClientRect().top);
      this.sectionPositionsValues.push(window.scrollY + document.querySelector('#section4').getBoundingClientRect().top);
      this.sectionPositionsValues.push(window.scrollY + document.querySelector('#section5').getBoundingClientRect().top);
      this.$emit('sectionPositions', this.sectionPositionsValues);
    });

    localStorage.setItem('activeSection', this.activeSection);
    let section = localStorage.getItem('activeSection');

    if (section == 0) {
      this.showSection0 = true;
    } else if (section == 1) {
      this.showSection1 = true;
    } else if (section == 2) {
      this.showSection2 = true;
    } else if (section == 3) {
      this.showSection3 = true;
    } else if (section == 4) {
      this.showSection4 = true;
    } else {
      this.showSection5 = true;
    }
  },

  methods: {
    //function for opening gallery of portfolio
    openGallery(index) {
      this.$refs.lightbox.showImage(index)
    },

    whatSection() {
      let section = JSON.parse(localStorage.getItem('activeSection'))
      if (section == 0) {
        this.animSection0 = false;
        setTimeout(() => {
          this.animSection0 = true;
          setTimeout(() => {
            this.animTown = true;
          }, 1700);
        }, 200);
      } else if (section == 1) {
        this.animSection1 = false;
        setTimeout(() => {
          this.animSection1 = true;
          this.animTown = false;
        }, 200);
      } else if (section == 2) {
        this.animSection2 = false;
        setTimeout(() => {
          this.animSection2 = true;
          this.animTown = false;
        }, 200);
      } else if (section == 3) {
        this.animSection3 = false;
        setTimeout(() => {
          this.animSection3 = true;
          this.animTown = false;
        }, 200);
      } else if (section == 4) {
        this.animSection4 = false;
        setTimeout(() => {
          this.animSection4 = true;
          this.animTown = false;
        }, 200);
      } else {
        this.animSection5 = false;
        setTimeout(() => {
          this.animSection5 = true;
          this.animTown = false;
        }, 200);
      }
    },

    calculateSectionOffsets() {
      let sections = document.getElementsByTagName('section');
      let length = sections.length;

      for (let i = 0; i < length; i++) {
        let sectionOffset = sections[i].offsetTop;
        this.offsets.push(sectionOffset);
      }
    },

    handleMouseWheel: function(e) {
      if (e.wheelDelta < 30 && !this.inMove) {
        this.moveUp();
      } else if (e.wheelDelta > 30 && !this.inMove) {
        this.moveDown();
      }

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

      if (this.activeSection < 0) {
        this.activeSection = 5;
      }
      // this.activeSection = this.offsets.length - 1;
      this.scrollToSection(this.activeSection, true);
    },

    moveUp() {
      this.inMove = true;
      this.activeSection++;

      if (this.activeSection > 5) {
        this.activeSection = 0;
      }
      // if (this.activeSection > this.offsets.length - 1) this.activeSection = 0;

      this.scrollToSection(this.activeSection, true);
    },

    scrollToSection(id, force = false) {
      if (this.inMove && !force) return false;

      this.activeSection = id;
      this.inMove = true;

      if (id == 0) {
        this.animSection0 = false;
        setTimeout(() => {
          this.animSection0 = true;
          setTimeout(() => {
            this.animTown = true;
          }, 1700);
        }, 200);
      } else if (id == 1) {
        this.animSection1 = false;
        setTimeout(() => {
          this.animSection1 = true;
          this.animTown = false;
        }, 200);
      } else if (id == 2) {
        this.animSection2 = false;
        setTimeout(() => {
          this.animSection2 = true;
          this.animTown = false;
        }, 200);
      } else if (id == 3) {
        this.animSection3 = false;
        setTimeout(() => {
          this.animSection3 = true;
          this.animTown = false;
        }, 200);
      } else if (id == 4) {
        this.animSection4 = false;
        setTimeout(() => {
          this.animSection4 = true;
          this.animTown = false;
        }, 200);
      } else {
        this.animSection5 = false;
        setTimeout(() => {
          this.animSection5 = true;
          this.animTown = false;
        }, 200);
      }
      document.getElementsByTagName('section')[id].scrollIntoView({
        behavior: 'smooth'
      });

      setTimeout(() => {
        this.inMove = false;
      }, 400);

    },
  },
  created() {
    this.calculateSectionOffsets();

    if (this.dialog == false && this.dialog2 == false && this.dialog3 == false && this.dialog4 == false) {
      window.addEventListener('DOMMouseScroll', this.handleMouseWheelDOM); // Mozilla Firefox
      window.addEventListener('mousewheel', this.handleMouseWheel, {
        passive: false
      }); // Other browsers
    }
  },
  destroyed() {
    console.log("here");
    if (this.dialog == false && this.dialog2 == false && this.dialog3 == false && this.dialog4 == false) {
      window.removeEventListener('mousewheel', this.handleMouseWheel, {
        passive: false
      }); // Other browsers
      window.removeEventListener('DOMMouseScroll', this.handleMouseWheelDOM); // Mozilla Firefox
    }
  }
}
</script>

<style lang="scss" scoped>
.fullpage {
    min-height: 100vh;
    width: 100%;
    padding-top: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

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
    opacity: 0.6;
    transition: 0.4s ease all;
    cursor: pointer;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
}

.sections-menu .menu-point.active {
    opacity: 1;
    transform: scale(1.5);
}

.v-overlay {
    z-index: 4 !important;
}

.v-skeleton-loader .v-skeleton-loader__image {
    background-color: blue !important;
}

.v-skeleton-loader__image {
    color: blue;
}

::v-deep .v-skeleton-loader.v-skeleton-loader--is-loading {
    .v-skeleton-loader__image {
        height: 250px !important;
    }
}

.borderCards.v-sheet.v-card {
    border-width: 2px;
    border-color: #1976d2 !important;
}

.img_gallery img:hover {

    transform: scale(1.25);

}

.zoom {
    transition: 0.5s ease all !important;
    transform: scale(1) !important;
}
.zoom:hover {
    transition: all 0.8s !important;
    transform: scale(1.05) !important;
}

.theme--dark.v-card {
    background-color: #121212;
}

.theme--dark .icon-color {
    color: #fff;
}

.theme--light .icon-color {
    color: #1976d2;
}

.theme--dark .card_images {
    background-color: #1e1e1e !important;
}

.theme--light .card_images {
    background-color: #f5f5f5 !important;
}
</style>
