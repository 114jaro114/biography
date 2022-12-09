<template>
<div>
  <v-app-bar class="toolbar" id="toolbar" app elevation="0" :elevate-on-scroll="true">
    <v-row class="mr-0 mt-0 mb-0 ml-0 hidden-sm-and-down justify-end">
      <div class="hidden-sm-and-down" v-if="$root.overlay">
        <div class="d-flex w-100" v-if="selectedLang == 0">
          <v-skeleton-loader class="mr-1 btn-0-sk" type="chip" min-height="36"></v-skeleton-loader>
          <v-skeleton-loader class="mr-1 btn-1-sk" type="chip" min-height="36"></v-skeleton-loader>
          <v-skeleton-loader class="mr-1 btn-2-sk" type="chip" min-height="36"></v-skeleton-loader>
          <v-skeleton-loader class="mr-1 btn-3-sk" type="chip" min-height="36"></v-skeleton-loader>
          <v-skeleton-loader class="mr-1 btn-4-sk" type="chip" min-height="36"></v-skeleton-loader>
          <v-skeleton-loader class="btn-5-sk" type="chip" min-height="36"></v-skeleton-loader>
        </div>

        <div class="d-flex w-100" v-else>
          <v-skeleton-loader class="mr-1 btn-0-en" type="chip" min-height="36"></v-skeleton-loader>
          <v-skeleton-loader class="mr-1 btn-1-en" type="chip" min-height="36"></v-skeleton-loader>
          <v-skeleton-loader class="mr-1 btn-2-en" type="chip" min-height="36"></v-skeleton-loader>
          <v-skeleton-loader class="mr-1 btn-3-en" type="chip" min-height="36"></v-skeleton-loader>
          <v-skeleton-loader class="mr-1 btn-4-en" type="chip" min-height="36"></v-skeleton-loader>
          <v-skeleton-loader class="btn-5-en" type="chip" min-height="36"></v-skeleton-loader>
        </div>
      </div>

      <div v-else>
        <v-btn v-if="pos == 0" rounded class="mr-1" color="primary" elevation="0" @click="scrollToSection(0)">{{ $t('header.pos1') }}</v-btn>
        <v-btn v-else text rounded class="mr-1" color="primary" elevation="0" @click="scrollToSection(0)">{{ $t('header.pos1') }}</v-btn>

        <v-btn v-if="pos == 1" rounded class="mr-1" color="primary" elevation="0" @click="scrollToSection(1)">{{ $t('header.pos2') }}</v-btn>
        <v-btn v-else text rounded class="mr-1" color="primary" elevation="0" @click="scrollToSection(1)">{{ $t('header.pos2') }}</v-btn>

        <v-btn v-if="pos == 2" rounded class="mr-1" color="primary" elevation="0" @click="scrollToSection(2)">{{ $t('header.pos3') }}</v-btn>
        <v-btn v-else text rounded class="mr-1" color="primary" elevation="0" @click="scrollToSection(2)">{{ $t('header.pos3') }}</v-btn>

        <v-btn v-if="pos == 3" rounded class="mr-1" color="primary" elevation="0" @click="scrollToSection(3)">{{ $t('header.pos4') }}</v-btn>
        <v-btn v-else text rounded class="mr-1" color="primary" elevation="0" @click="scrollToSection(3)">{{ $t('header.pos4') }}</v-btn>

        <v-btn v-if="pos == 4" rounded class="mr-1" color="primary" elevation="0" @click="scrollToSection(4)">{{ $t('header.pos5') }}</v-btn>
        <v-btn v-else text rounded class="mr-1" color="primary" elevation="0" @click="scrollToSection(4)">{{ $t('header.pos5') }}</v-btn>

        <v-btn v-if="pos == 5" rounded class="mr-1" color="primary" elevation="0" @click="scrollToSection(5)">{{ $t('header.pos6') }}</v-btn>
        <v-btn v-else text rounded class="mr-1" color="primary" elevation="0" @click="scrollToSection(5)">{{ $t('header.pos6') }}</v-btn>
      </div>

      <v-spacer />

      <div v-if="$root.overlay">
        <v-skeleton-loader class="mr-1 btn-theme" type="chip" min-height="36"></v-skeleton-loader>
      </div>

      <v-tooltip bottom v-else>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" text rounded class="mr-1" color="primary" @click="toggle_dark_mode">
            <v-icon color="orange" v-if="!$vuetify.theme.dark">mdi-lightbulb-on-outline</v-icon>
            <v-icon color="grey" v-else>mdi-lightbulb-outline</v-icon>
          </v-btn>
        </template>
        <span v-if="!$vuetify.theme.dark">{{ $t('header.theme.t1') }}</span>
        <span v-else>{{ $t('header.theme.t2') }}</span>
      </v-tooltip>

      <div v-if="$root.overlay">
        <v-skeleton-loader class="btn-lang" type="chip" min-height="36"></v-skeleton-loader>
      </div>

      <v-menu offset-y nudge-bottom="5" v-else>
        <template v-slot:activator="{ on, attrs }">
          <div class="lang">
            <v-btn class="position-relative" color="primary" text rounded v-bind="attrs" v-on="on">
              <div class="menu-en" v-if="selectedLang == '1'">
                <CountryFlag :country="'gb'" size='normal' />
                <span class="position-relative ml-2" style="top:-5px">en</span>
              </div>
              <div class="menu-sk" v-else>
                <CountryFlag :country="'sk'" size='normal' />
                <span class="position-relative ml-2" style="top:-5px">sk</span>
              </div>
            </v-btn>
          </div>
        </template>
        <v-list class="langlist">
          <v-list-item-group v-model="selectedLang" color="primary">
            <v-list-item v-for="(item, i) in countries" :key="i" @click="setlang(item)">
              <v-list-item-avatar>
                <CountryFlag :country='item.flag' size='normal' />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="pt-2" v-text="item.name"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>
    </v-row>

    <v-row class="mr-0 mt-0 mb-0 ml-0 hidden-md-and-up justify-end">
      <v-menu class="mr-1" min-width="250px" style="z-index:12" v-model="smDevicesMenu" :close-on-content-click="false" offset-y nudge-bottom="5">
        <template v-slot:activator=" { on }">
          <v-btn text rounded v-on="on">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-card class="v-card-logout">
          <v-list dense class="">
            <v-list-item-group v-model="position" fullscreen color="primary">
              <!-- Section1 -->
              <v-list-item @click="smDevicesMenu = false;scrollToSection(0)">
                <v-list-item-avatar class="ml-0" size="36">
                  <v-icon class="mr-1">mdi-clipboard-account</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-card class="p-2 rounded-lg card-comments" elevation="0">
                    <v-card-title class="d-flex justify-start text-subtitle-2 font-weight-bold p-0 pb-3 pl-1">
                      {{ $t('header.pos1') }}
                    </v-card-title>
                    <v-card-subtitle class="d-flex text-left caption grey--text p-0 pl-1">{{ $t('header.smtoolbar.t1') }}</v-card-subtitle>
                  </v-card>
                </v-list-item-content>
              </v-list-item>
              <!-- Section2 -->
              <v-list-item @click="smDevicesMenu = false;scrollToSection(1)">
                <v-list-item-avatar class="ml-0" size="36">
                  <v-icon class="mr-1">mdi-school</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-card class="p-2 rounded-lg card-comments" elevation="0">
                    <v-card-title class="d-flex justify-start text-subtitle-2 font-weight-bold p-0 pb-3 pl-1">
                      {{ $t('header.pos2') }}
                    </v-card-title>
                    <v-card-subtitle class="d-flex text-left caption grey--text p-0 pl-1">{{ $t('header.smtoolbar.t2') }}</v-card-subtitle>
                  </v-card>
                </v-list-item-content>
              </v-list-item>
              <!-- Section3 -->
              <v-list-item @click="smDevicesMenu = false;scrollToSection(2)">
                <v-list-item-avatar class="ml-0" size="36">
                  <v-icon class="mr-1">mdi-brain</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-card class="p-2 rounded-lg card-comments" elevation="0">
                    <v-card-title class="d-flex justify-start text-subtitle-2 font-weight-bold p-0 pb-3 pl-1">
                      {{ $t('header.pos3') }}
                    </v-card-title>
                    <v-card-subtitle class="d-flex text-left caption grey--text p-0 pl-1">{{ $t('header.smtoolbar.t3') }}</v-card-subtitle>
                  </v-card>
                </v-list-item-content>
              </v-list-item>
              <!-- Section4 -->
              <v-list-item @click="smDevicesMenu = false;scrollToSection(3)">
                <v-list-item-avatar class="ml-0" size="36">
                  <v-icon class="mr-1">mdi-basketball</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-card class="p-2 rounded-lg card-comments" elevation="0">
                    <v-card-title class="d-flex justify-start text-subtitle-2 font-weight-bold p-0 pb-3 pl-1">
                      {{ $t('header.pos4') }}
                    </v-card-title>
                    <v-card-subtitle class="d-flex text-left caption grey--text p-0 pl-1">{{ $t('header.smtoolbar.t4') }}</v-card-subtitle>
                  </v-card>
                </v-list-item-content>
              </v-list-item>
              <!-- Section5 -->
              <v-list-item @click="smDevicesMenu = false;scrollToSection(4)">
                <v-list-item-avatar class="ml-0" size="36">
                  <v-icon class="mr-1">mdi-pencil-box</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-card class="p-2 rounded-lg card-comments" elevation="0">
                    <v-card-title class="d-flex justify-start text-subtitle-2 font-weight-bold p-0 pb-3 pl-1">
                      {{ $t('header.pos5') }}
                    </v-card-title>
                    <v-card-subtitle class="d-flex text-left caption grey--text p-0 pl-1">{{ $t('header.smtoolbar.t5') }}</v-card-subtitle>
                  </v-card>
                </v-list-item-content>
              </v-list-item>
              <!-- Section6 -->
              <v-list-item @click="smDevicesMenu = false;scrollToSection(5)">
                <v-list-item-avatar class="ml-0" size="36">
                  <v-icon class="mr-1">mdi-email-fast</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-card class="p-2 rounded-lg card-comments" elevation="0">
                    <v-card-title class="d-flex justify-start text-subtitle-2 font-weight-bold p-0 pb-3 pl-1">
                      {{ $t('header.pos6') }}
                    </v-card-title>
                    <v-card-subtitle class="d-flex text-left caption grey--text p-0 pl-1">{{ $t('header.smtoolbar.t6') }}</v-card-subtitle>
                  </v-card>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-menu>

      <v-spacer />
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" text rounded color="primary" class="mr-1" @click="toggle_dark_mode">
            <v-icon color="orange" v-if="!$vuetify.theme.dark">mdi-lightbulb-on-outline</v-icon>
            <v-icon color="grey" v-else>mdi-lightbulb-outline</v-icon>
          </v-btn>
        </template>
        <span v-if="!$vuetify.theme.dark">{{ $t('header.theme.t1') }}</span>
        <span v-else>{{ $t('header.theme.t2') }}</span>
      </v-tooltip>

      <v-menu id="langMenu" offset-y nudge-bottom="5">
        <template v-slot:activator="{ on, attrs }">
          <v-btn id="lang" color="primary" text rounded v-bind="attrs" v-on="on">
            <div v-if="selectedLang == '1'">
              <CountryFlag :country="'gb'" size='normal' />
              <span class="position-relative ml-2" style="top:-5px">en</span>
            </div>
            <div v-else>
              <CountryFlag :country="'sk'" size='normal' />
              <span class="position-relative ml-2" style="top:-5px">sk</span>
            </div>
          </v-btn>
        </template>
        <v-list class="langlist">
          <v-list-item-group v-model="selectedLang" color="primary">
            <v-list-item v-for="(item, i) in countries" :key="i" @click="setlang(item)">
              <v-list-item-avatar>
                <CountryFlag :country='item.flag' size='normal' />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="pt-2" v-text="item.name"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>
    </v-row>
    <vue-scroll-progress-bar backgroundColor="#1976d2" height="4px" @complete="handleComplete" @begin="handleBegin" />
  </v-app-bar>
</div>
</template>

<script>
import CountryFlag from 'vue-country-flag';
import {
  VueScrollProgressBar
} from '@guillaumebriday/vue-scroll-progress-bar'
export default {
  name: 'Header',
  components: {
    CountryFlag,
    VueScrollProgressBar,
  },
  props: {
    nos: {
      type: Number,
      default: null
    },

    sp: {
      type: Array,
      default: null
    }
  },

  data() {
    return {
      smDevicesMenu: false,
      switch1: false,
      position: null,
      pos: 0,
      sectionPositions: [],

      select: localStorage.getItem('language'),
      selectedLang: 0,
      countries: [{
          name: "sk",
          flag: "sk"
        },
        {
          name: "en",
          flag: "gb"
        },
      ],
    }
  },

  mounted() {
    if (!(localStorage.getItem('language'))) {
      localStorage.setItem('language', 'sk');
      this.selectedLang = 0;
    }

    if (localStorage.getItem('language') == 'sk') {
      this.selectedLang = 0;
    } else {
      this.selectedLang = 1;
    }

    if (localStorage.getItem('activeSection') != null) {
      this.pos = localStorage.getItem('activeSection');
      this.position = localStorage.getItem('activeSection');
      this.setColorFirstSection();
    }

    this.select = localStorage.getItem('language');
  },

  updated() {
    // localStorage.setItem('language', this.select);\
    const scrollDemo = document.querySelector("#toolbar");
    window.addEventListener("scroll", () => {
      this.$emit('positionOfHeader', Math.round(window.scrollY + scrollDemo.getBoundingClientRect().top));
    }, {
      passive: true
    });
  },

  watch: {
    nos() {
      this.position = this.nos;
      this.pos = this.nos;
      this.setColorFirstSection();
    },

    sp() {
      this.sectionPositions = this.sp;
    }
  },

  methods: {
    setColorFirstSection() {
      var element = document.getElementById('toolbar');
      var theme = localStorage.getItem('dark_theme');

      if (this.pos == 0) {
        if (theme == 'false') {
          element.style.backgroundColor = '#fff';
        } else {
          element.style.backgroundColor = '#121212';
        }
      } else {
        if (theme == 'false') {
          element.style.backgroundColor = '#f5f5f5';
        } else {
          element.style.backgroundColor = '#272727';
        }
      }
    },

    setlang(item) {
      localStorage.setItem('language', item.name);
      if (item.name == 'sk') {
        this.selectedLang = 0;
        this.$i18n.locale = 'sk';
      } else {
        this.selectedLang = 1;
        this.$i18n.locale = 'en';
      }
    },

    handleBegin() {},

    handleComplete() {},

    toggle_dark_mode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());

      var element = document.getElementById('toolbar');
      if (this.pos == 0) {
        if (this.$vuetify.theme.dark == true) {
          element.style.backgroundColor = '#121212';
        } else {
          element.style.backgroundColor = '#fff';
        }
      } else {
        if (this.$vuetify.theme.dark == true) {
          element.style.backgroundColor = '#272727';
        } else {
          element.style.backgroundColor = '#f5f5f5';
        }
      }
    },

    scrollToSection(id, force = false) {
      if (this.inMove && !force) return false;
      this.position = id;
      this.activeSection = id;
      this.inMove = true;
      // this.pos = id;

      // let ypos = 0;
      // if (id == 0) {
      //   ypos = this.sectionPositions[0];
      // } else if (id == 1) {
      //   ypos = this.sectionPositions[1];
      // } else if (id == 2) {
      //   ypos = this.sectionPositions[2];
      // } else if (id == 3) {
      //   ypos = this.sectionPositions[3];
      // } else if (id == 4) {
      //   ypos = this.sectionPositions[4];
      // } else {
      //   ypos = this.sectionPositions[5];
      // }

      // window.scrollTo({
      //   top: ypos,
      //   behavior: 'smooth'
      // });

      // this.$emit('toSectionFromHeader', id);

      document.getElementsByTagName('section')[id].scrollIntoView({
        behavior: 'smooth'
      });

      this.$emit('activeAnimationFromHeader', document.getElementsByTagName('section')[id].id);

      this.setColorFirstSection();
      this.inMove = false;
    },
  }
}
</script>

<style scoped>
.progress-bar-container--container {
  bottom: 0 !important;
  top: unset !important;
}

.v-list {
  padding: 0;
}

.test {
  width: 0 !important;
}

.v-toolbar__content {
  padding: 0
}

.langlist .v-list-item {
  padding: 0px !important;
}

.headerSec0ThemeLight {
  background-color: white;
}

.headerSec0ThemeDark {
  background-color: #121212;
}

.lang .v-btn:not(.v-btn--round).v-size--default {
  width: 91px;
}

::v-deep .v-skeleton-loader__chip {
  border-radius: 28px;
  height: 36px;
}

::v-deep .toolbar .btn-0-sk .v-skeleton-loader__chip {
  width: 82.77px;
}

::v-deep .toolbar .btn-0-en .v-skeleton-loader__chip {
  width: 111.94px;
}

::v-deep .toolbar .btn-1-sk .v-skeleton-loader__chip {
  width: 117.89px;
}

::v-deep .toolbar .btn-1-en .v-skeleton-loader__chip {
  width: 120.39px;
}

::v-deep .toolbar .btn-2-sk .v-skeleton-loader__chip {
  width: 215.98px;
}

::v-deep .toolbar .btn-2-en .v-skeleton-loader__chip {
  width: 221.28px;
}

::v-deep .toolbar .btn-3-sk .v-skeleton-loader__chip {
  width: 92.11px;
}

::v-deep .toolbar .btn-3-en .v-skeleton-loader__chip {
  width: 99.59px;
}

::v-deep .toolbar .btn-4-sk .v-skeleton-loader__chip {
  width: 118.56px;
}

::v-deep .toolbar .btn-4-en .v-skeleton-loader__chip {
  width: 118.56px;
}

::v-deep .toolbar .btn-5-sk .v-skeleton-loader__chip {
  width: 104.34px;
}

::v-deep .toolbar .btn-5-en .v-skeleton-loader__chip {
  width: 104.84px;
}

::v-deep .toolbar .btn-theme .v-skeleton-loader__chip {
  width: 64px;
}

::v-deep .toolbar .btn-lang .v-skeleton-loader__chip {
  width: 91px;
}

.menu-sk,
.menu-en {
  position: absolute;
  bottom: -16px;
}
</style>
