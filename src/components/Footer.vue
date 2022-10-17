<template>
<div>
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
      <v-container class="p-0 container-footer">
        <transition name="slide-fade-tb">
          <v-card-title class="pl-0 primary--text text-lg-h3 text-md-h3 text-h5 mt-3 mb-6 justify-center">
            <v-icon class="mr-3 mt-0 mt-lg-1 mt-md-1" color="primary" :large="iconSize">mdi-email-fast</v-icon>
            {{ $t('section6.title') }}
          </v-card-title>
        </transition>
        <!-- <v-divider class="mt-0" /> -->
        <v-col cols="10" sm="10" md="6" lg="6" class="p-0">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="name" :rules="nameRules" :counter="20" :label="$t('section6.form.name')" tabindex="1" filled clearable required></v-text-field>
            <v-text-field v-model="email" :rules="emailRules" :label="$t('section6.form.email')" tabindex="1" filled clearable required></v-text-field>
            <v-textarea v-model="message" :rules="messageRules" :counter="1000" :label="$t('section6.form.msg')" tabindex="1" filled clearable auto-grow></v-textarea>

            <div class="">
              <v-btn :loading="loading" :disabled="!valid || (!name || !email || !message)" color="primary" class="ma-1" @click="showDialog" rounded>
                {{ $t('section6.buttons.n1') }}
              </v-btn>

              <v-btn color="primary" :disabled="!name && !email && !message || loading" class="ma-1" @click="reset" rounded outlined>
                {{ $t('section6.buttons.n2') }}
              </v-btn>
            </div>
          </v-form>
        </v-col>

        <v-dialog v-model="dialog" persistent max-width="360">
          <v-card>
            <v-card-title class="text-h5">
              {{ $t('section6.dialog.title') }}
            </v-card-title>
            <v-card-text>
              <p>{{ $t('section6.dialog.t1') }} <span class="font-weight-bold">{{name}}</span>,</p> {{ $t('section6.dialog.t2') }} <span class="font-weight-bold">{{email}}</span> {{ $t('section6.dialog.t3') }}
            </v-card-text>
            <v-card-text><span class="font-weight-bold">
                <v-icon color="error">mdi-alert-circle</v-icon> {{ $t('section6.dialog.t4') }}
              </span></v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="warning" text @click="editEmail">
                {{ $t('section6.dialog.buttons.n1') }}
              </v-btn>
              <v-btn color="primary" :loading="loadingConfirm" text @click="sendMessage">
                {{ $t('section6.dialog.buttons.n2') }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-container>

      <div class="container-footer2">
        <v-divider class="mt-0 mb-0" />
        <v-card-text class="justify-space-around">
          <v-icon color="primary" small>mdi-copyright</v-icon> {{ new Date().getFullYear() }} — <span>{{ $t('section6.bottompart.t1') }} <strong>
              <!-- <v-icon color="primary" small>mdi-heart-outline</v-icon> -->
            </strong> {{ $t('section6.bottompart.t2') }} <strong class="primary--text">{{ $t('section6.bottompart.t3') }}.</strong>
          </span>
        </v-card-text>
      </div>
    </v-card>
  </v-footer>
</div>
</template>

<script>
import emailjs from 'emailjs-com';
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
        v => !!v || this.$t('section6.form.validate.name.n1'),
        v => (v && v.length <= 10) || this.$t('section6.form.validate.name.n2'),
      ],
      message: '',
      messageRules: [
        v => !!v || this.$t('section6.form.validate.msg.n1'),
        v => (v && v.length <= 1000) || this.$t('section6.form.validate.msg.n2'),
      ],
      email: '',
      emailRules: [
        v => !!v || this.$t('section6.form.validate.email.n1'),
        v => /.+@.+\..+/.test(v) || this.$t('section6.form.validate.email.n2'),
      ],

      loading: false,
      loadingConfirm: false,
      iconLarge: false,
      dialog: false,
    }
  },

  computed: {
    iconSize() {
      let iconLarge = false;
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          iconLarge = false
          break;
        case 'sm':
          iconLarge = false
          break;
        case 'md':
          iconLarge = true
          break;
        case 'lg':
          iconLarge = true
          break;
        case 'xl':
          iconLarge = true;
      }
      return iconLarge;
    },
  },

  methods: {
    validate() {
      return this.$refs.form.validate();
    },

    showDialog() {
      this.loading = true;
      if (this.validate()) {
        this.valid = true;
        this.dialog = true;
      } else {
        this.loading = false;
        return
      }
    },

    editEmail() {
      this.dialog = false;
      this.loading = false;
    },

    sendMessage() {
      this.loadingConfirm = true;
      // validate form
      if (this.validate()) {
        this.valid = true;
        var templateParams = {
          name: this.name,
          email: this.email,
          message: this.message
        };
        emailjs.send('service_1pw1pxa', 'template_euzboxt', templateParams, 'o5ldfXTWwrJiLeZIk')
          .then(() => {
            // add snackbar
            this.snackbar = true;
            this.snackbarText = this.$t('section6.snackbar.succ');
            this.snackbarColor = 'success';
            this.snackbarTimeout = '5000';
            this.loading = false;
            this.loadingConfirm = false;
            this.dialog = false;
            this.$refs.form.reset();
            // reset form
          }, function(error) {
            this.snackbar = true;
            this.snackbarText = this.$t('section6.snackbar.err');
            this.snackbarColor = 'error';
            this.snackbarTimeout = '5000';
            this.loading = false;
            this.loadingConfirm = false;
            this.dialog = false;
            console.log('FAILED...', error);
          });
      } else {
        this.loadingConfirm = false;
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
  width: 100vw;
  height: calc(100vh - 64px);
  display: flex;
  align-items: center;
  justify-content: center;
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
