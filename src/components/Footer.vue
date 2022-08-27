<template>
<v-footer class="p-0 footer">
  <v-snackbar v-model="snackbar" :multi-line="multiLine" :color="snackbarColor" :timeout="snackbarTimeout" :left="true" :bottom="true">
    <v-icon>mdi-check-circle</v-icon>
    {{ snackbarText }}
    <template v-slot:action="{ attrs }">
      <v-btn color="white" v-bind="attrs" @click="snackbar = false" fab text small>
        <v-icon>mdi-close-circle</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
  <!-- app bottom -->
  <v-card flat tile class="text-center part1">
    <v-container class="p-5 pb-0 pt-0 container-footer">
      <transition name="slide-fade-tb">
        <v-card-title class="pl-0 primary--text text-lg-h3 text-md-h3 text-h5 mt-3 mb-6 justify-center">Kontaktuj ma</v-card-title>
      </transition>
      <!-- <v-divider class="mt-0" /> -->
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="name" :rules="nameRules" :counter="20" label="Meno" tabindex="1" filled clearable required></v-text-field>
        <v-text-field v-model="email" :rules="emailRules" label="E-mail" tabindex="1" filled clearable required></v-text-field>
        <v-textarea v-model="message" :rules="messageRules" :counter="1000" label="Správa" tabindex="1" filled clearable auto-grow></v-textarea>

        <v-btn :loading="loading" :disabled="!valid || (!name || !email || !message)" color="primary" class="mb-2 mb-lg-0 mb-xl-0 mb-sm-0" @click="validate" rounded>
          Odoslať formulár
        </v-btn>

        <v-btn color="primary" :disabled="!name && !email && !message" class="ml-lg-2 ml-xl-2 ml-sm-2" @click="reset" rounded outlined>
          Resetovať formulár
        </v-btn>
      </v-form>
    </v-container>
    <!-- <v-card-text class="justify-center" justify="center">
    </v-card-text> -->

    <div class="container-footer2">
      <v-divider class="mt-0 mb-0" />
      <v-card-text class="justify-space-around">
        <v-icon color="primary" small>mdi-copyright</v-icon> {{ new Date().getFullYear() }} — <span>Made with <strong>
            <v-icon color="primary" small>mdi-heart-outline</v-icon>
          </strong> by <strong class="primary--text">Jaroslav Balent</strong>
        </span>
      </v-card-text>
    </div>
  </v-card>
</v-footer>
</template>

<script>
export default {
  name: 'Footer',
  components: {},
  data() {
    return {
      snackbar: false,
      multiLine: true,
      snackbarText: '',
      snackbarColor: '',
      snackbarTimeout: '-1',
      valid: false,
      name: '',
      nameRules: [
        v => !!v || 'Meno je povinné',
        v => (v && v.length <= 10) || 'Meno musí byť kratšie ako 20 znakov',
      ],
      message: '',
      messageRules: [
        v => !!v || 'Správa je povinná',
        v => (v && v.length <= 10) || 'Správa môže obsahovať maximálne 1000 znakov',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail je povinný',
        v => /.+@.+\..+/.test(v) || 'E-mail musí mať valídny tvar',
      ],

      loading: false,
    }
  },

  methods: {
    validate() {
      return this.$refs.form.validate();
    },
    sendMessage() {
      this.loading = true;
      // validate form
      if (this.validate()) {
        this.valid = true;
        // add snackbar
        this.snackbar = true;
        this.snackbarText = 'Správa bola úspešne odoslaná.';
        this.snackbarColor = 'success';
        this.snackbarTimeout = '5000';

        this.loading = false;
        // reset form
        this.$refs.form.reset();
      } else {
        this.loading = false;
        return
      }
    },

    reset() {
      this.$refs.form.reset();
    }
  }
}
</script>

<style scoped>
.theme--light.part1 {
  background: #f5f5f5;
}

.theme--dark.footer {
  background-color: #1e1e1e;
}

.part1 {
  padding-top: 64px;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.container-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.container-footer2 {
  position: absolute;
  width: 100vw;
  bottom: 0;
  left: 0;
}
</style>
