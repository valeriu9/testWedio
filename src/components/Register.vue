<template>
  <v-content>
    <v-container>
      <v-row>
        <v-col cols="2"> </v-col>
        <v-col cols="12" md="4">
          <h2 class="allow-overflow">
            WELCOME TO WEDIO —
          </h2>
          <span class="allow-overflow"
            >the fastest-growing European community of creators</span
          >
          <v-container class="register_social pa-0">
            <a class="fb_button">
              <span class="social_text_center"> Register with Facebook</span>
              <div class="fb_logo">
                <img class="warp_logo" src="../assets/fb_logov2.png" />
              </div>
            </a>
          </v-container>

          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            class="form-wrapper"
          >
            <v-text-field
              class="pa-0"
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
            <v-text-field
              class="pa-0"
              v-model="name"
              :rules="nameRules"
              label="Username"
              required
            ></v-text-field>
            <v-text-field
              class="pa-0"
              v-model="password"
              :append-icon="show1 ? 'mdi-eye-off' : 'mdi-eye'"
              :type="show1 ? 'text' : 'password'"
              label="New password"
              @click:append="show1 = !show1"
            ></v-text-field>

            <p class="terms_text">
              By clicking on Register, you agree to Wedio's
              <a class="hover_links"><b>Terms & Conditions </b></a> and
              <a class="hover_links"><b>Privacy Policy</b></a
              >.
            </p>
            <v-row>
              <v-col xs="12" sm="12" md="6" align="center" justify="center">
                <v-btn
                  x-large="true"
                  rounded="true"
                  outlined="true"
                  width="170px"
                  :disabled="!valid"
                  @click="validate"
                >
                  Sign In
                </v-btn>
              </v-col>
              <v-col xs="12" sm="12" md="6" align="center" justify="center">
                <v-btn
                  x-large="true"
                  rounded="true"
                  width="170px"
                  color="#00b2a9"
                  @click="reset"
                >
                  Register
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    show1: false,
    rules: [
      value => !!value || "Required.",
      v => v.length >= 8 || "Min 8 characters"
    ]
  }),
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>

<style>
.form-wrapper {
  max-width: 425px !important;
}
p span {
  display: block;
}
.terms_text {
  font-size: 15px;
}
.register_social {
  display: flex;
}
.warp_logo {
  width: 35px;
  height: 35px;
}
.social_text_center {
  padding: 0 15px;
  margin-right: 10px;
  margin: auto;
}
.fb_button {
  display: flex;
  justify-content: center;
  border: 1px solid rgba(53, 120, 229, 0.7);
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  margin-top: 24px;
  margin-bottom: 24px;
  width: -webkit-fit-content;
  background: linear-gradient(90deg, #000 50%, rgba(53, 120, 229, 0.7) 0);
  background-repeat: no-repeat;
  background-size: 300% 100%;
  background-position: 0 100%;
  transition: all 0.5s ease-out;
}

.fb_button:hover {
  background-position: 100% 0;
}
span {
  font-weight: 700;
  font-size: 17px;
}
.theme--dark.v-label {
  color: white !important;
}

.theme--dark.input h2 {
  font-weight: 800 !important;
}

.hover_links {
  border-bottom: 1px dotted;
  color: white;
  font-weight: 500;
  transition-duration: 0.3s;
}
.hover_links:hover {
  background-color: whitesmoke;
}
.allow-overflow {
  white-space: nowrap;
}

@media screen and (min-width: 769px) {
  .is-hidden-tablet {
    display: none !important;
  }
}
</style>
