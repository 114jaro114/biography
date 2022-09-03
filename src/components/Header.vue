<template>
<div>
  <v-app-bar class="toolbar" id="toolbar" app elevation="0" :elevate-on-scroll="true">
    <!-- <v-card class="rounded-lg" elevation="0" dense>
      <v-card-text class="p-2 pt-1 pb-1">
        <v-avatar size="36" class="pt-1">
          <v-img :lazy-src="require('../assets/img/profile_photo.jpg')" :src="require('../assets/img/profile_photo.jpg')" />
        </v-avatar>
        <span class="ml-2 pt-1 font-weight-bold primary--text">Jaroslav Balent</span>
      </v-card-text>
    </v-card> -->
    <v-row class="mr-0 mt-0 mb-0 ml-0 hidden-sm-and-down justify-end">
      <v-btn v-if="pos == 0" rounded class="mr-1" color="primary" elevation="0" @click="scrollToSection(0)">O mne</v-btn>
      <v-btn v-else text rounded class="mr-1" color="primary" elevation="0" @click="scrollToSection(0)">O mne</v-btn>

      <v-btn v-if="pos == 1" rounded class="mr-1" color="primary" elevation="0" @click="scrollToSection(1)">Vzdelanie</v-btn>
      <v-btn v-else text rounded class="mr-1" color="primary" elevation="0" @click="scrollToSection(1)">Vzdelanie</v-btn>

      <v-btn v-if="pos == 2" rounded class="mr-1" color="primary" elevation="0" @click="scrollToSection(2)">Znalosti a zručnosti</v-btn>
      <v-btn v-else text rounded class="mr-1" color="primary" elevation="0" @click="scrollToSection(2)">Znalosti a zručnosti</v-btn>

      <v-btn v-if="pos == 3" rounded class="mr-1" color="primary" elevation="0" @click="scrollToSection(3)">Záľuby</v-btn>
      <v-btn v-else text rounded class="mr-1" color="primary" elevation="0" @click="scrollToSection(3)">Záľuby</v-btn>

      <v-btn v-if="pos == 4" rounded class="mr-1" color="primary" elevation="0" @click="scrollToSection(4)">Portfólio</v-btn>
      <v-btn v-else text rounded class="mr-1" color="primary" elevation="0" @click="scrollToSection(4)">Portfólio</v-btn>

      <v-btn v-if="pos == 5" rounded class="mr-1" color="primary" elevation="0" @click="scrollToSection(5)">Kontakt</v-btn>
      <v-btn v-else text rounded class="mr-1" color="primary" elevation="0" @click="scrollToSection(5)">Kontakt</v-btn>

      <v-spacer />

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" text rounded class="mr-1" color="primary" @click="toggle_dark_mode">
            <v-icon color="orange" v-if="!$vuetify.theme.dark">mdi-lightbulb-on-outline</v-icon>
            <v-icon color="grey" v-else>mdi-lightbulb-outline</v-icon>
          </v-btn>
        </template>
        <span v-if="!$vuetify.theme.dark">Vypnúť svetlo</span>
        <span v-else>Zapnúť svetlo</span>
      </v-tooltip>

      <v-menu offset-y nudge-bottom="5">
        <template v-slot:activator="{ on, attrs }">
          <div class="lang">
            <v-btn color="primary" text rounded v-bind="attrs" v-on="on">
              <div v-if="selectedLang == '1'">
                <CountryFlag :country="'gb'" size='normal' />
                <span class="position-relative ml-2" style="top:-5px">en</span>
              </div>
              <div v-else>
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


      <!-- <v-select class="langselect" v-model="select" :items="countries" item-text="name" filled :menu-props="{ top: false, offsetY: true }">
        <template class="select_language" slot="selection" slot-scope="slotProps">
          <CountryFlag :country='slotProps.item.flag' size='normal' />
          <span class="pt-3 ml-2">{{slotProps.item.name}}</span>
        </template>
        <template class="select_language" v-slot:item="slotProps">
          <CountryFlag class="mr-2" :country='slotProps.item.flag' size='normal' />
          <span class="pt-3 ml-2">{{slotProps.item.name}}</span>
        </template>
        <span>Vybrať jayzk</span>
      </v-select> -->
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
                      O mne
                    </v-card-title>
                    <v-card-subtitle class="d-flex text-left caption grey--text p-0 pl-1">Pár informácií o mne</v-card-subtitle>
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
                      Vzdelanie
                    </v-card-title>
                    <v-card-subtitle class="d-flex text-left caption grey--text p-0 pl-1">Dosiahnuté vzdelanie</v-card-subtitle>
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
                      Znalosti a zručnosti
                    </v-card-title>
                    <v-card-subtitle class="d-flex text-left caption grey--text p-0 pl-1">Môj skill</v-card-subtitle>
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
                      Záľuby
                    </v-card-title>
                    <v-card-subtitle class="d-flex text-left caption grey--text p-0 pl-1">Moje koníčky</v-card-subtitle>
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
                      Protfólio
                    </v-card-title>
                    <v-card-subtitle class="d-flex text-left caption grey--text p-0 pl-1">Moje práce</v-card-subtitle>
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
                      Kontakt
                    </v-card-title>
                    <v-card-subtitle class="d-flex text-left caption grey--text p-0 pl-1">Pošli mi správu</v-card-subtitle>
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
        <span v-if="!$vuetify.theme.dark">Vypnúť svetlo</span>
        <span v-else>Zapnúť svetlo</span>
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
  },

  data() {
    return {
      smDevicesMenu: false,
      switch1: false,
      position: 0,
      pos: 0,
      test: '',

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

      this.setColorFirstSection();
    }

    this.select = localStorage.getItem('language');
  },

  updated() {
    // localStorage.setItem('language', this.select);
  },

  watch: {
    nos() {
      this.position = this.nos;
      this.pos = this.nos;

      this.setColorFirstSection();
      console.log("asssssssssssssssssssssssssssssssss");
    },
  },

  methods: {
    setColorFirstSection() {
      var element = document.getElementById('toolbar');
      if (this.pos == 0) {
        if (element.classList.contains("theme--light")) {
          element.style.backgroundColor = '#fff';
        } else {
          element.style.backgroundColor = '#121212';
        }
      } else {
        if (element.classList.contains('theme--light')) {
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
      } else {
        this.selectedLang = 1;
      }
    },

    handleBegin() {
      this.test = 'test';
      // console.log("begin");
    },

    handleComplete() {
      // console.log("complete");
    },

    toggle_dark_mode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
      if (this.$vuetify.theme.dark == true) {
        localStorage.setItem('graph_theme', 'dark');
        localStorage.setItem('graph_text_color', '#ffffff');
      } else {
        localStorage.setItem('graph_theme', 'light');
        localStorage.setItem('graph_text_color', '#2c3e50');
      }
      var element = document.getElementById('toolbar');
      if (this.pos == 0) {
        if (element.classList.contains("theme--light")) {
          element.style.backgroundColor = '#121212';
        } else {
          element.style.backgroundColor = '#fff';
        }
      } else {
        if (element.classList.contains('theme--light')) {
          element.style.backgroundColor = '#272727';
        } else {
          element.style.backgroundColor = '#f5f5f5';
        }
      }
    },

    scrollToSection(id, force = false) {
      if (this.inMove && !force) return false;
      this.pos = id;
      this.position = id;

      this.activeSection = id;
      this.inMove = true;

      this.$emit('toSectionFromHeader', id);
      document.getElementsByTagName('section')[id].scrollIntoView({
        behavior: 'smooth'
      });
      this.$emit('activeAnimationFromHeader', document.getElementsByTagName('section')[id].id);

      this.setColorFirstSection();

      setTimeout(() => {
        this.inMove = false;
      }, 400);

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
</style>
