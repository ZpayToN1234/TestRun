<template>
  <v-app>
    <v-app-bar app padless flat height="70" color="#dd5928" md12 lg>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>

      <v-toolbar-title class="white--text">
        Internship at Amalitech</v-toolbar-title
      >

      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <v-navigation-drawer
        class="overflow-hidden"
        height="700"
        width="250"
        v-model="drawer"
        temporary
        app
      >
        <v-spacer></v-spacer>
        <div align="center">
          <v-avatar size="100" class="text--center pa-5">
            <img src="./assets/pic.jpg"
          /></v-avatar>
          <div class="secondary--text text--center">Patrick Akwetey Narh</div>
          <div class="text--center">Intern</div>
        </div>
        <v-spacer></v-spacer>

        <v-divider></v-divider>

        <v-spacer></v-spacer>
        <v-list flat center>
          <v-list-item-group active-class="deep-purple--text text--accent-4">
            <v-list-item>
              <v-list-item-title>
                <router-link to="/">Amalitech </router-link>
              </v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>
                <router-link to="/Education">Education </router-link>
              </v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>
                <router-link to="/life">Life Journey </router-link>
              </v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <router-view />
    </v-main>
    <v-footer app padless bottom id="footer">
      <v-card class="flex" color="#dd5928" flat tile>
        <v-card-title class="white--text">
          wonna keep in touch? contact me on social media and let's have a fun
          time working together
          <v-spacer></v-spacer>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            dark
            icon
            flat
            center
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-title>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
      drawer: false,
    };
  },
};
</script>
<style></style>
