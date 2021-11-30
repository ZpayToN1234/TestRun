
   <template>
  <v-container>
    <v-row>
      <v-col row="6" no gutters>
        <v-carousel :show-arrows="false" height="400" width="20">
          <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
          </v-carousel-item>
        </v-carousel>
      </v-col>
      
      <v-col cols="5">
        <v-card
          height="500"
          width="1000"
          flat
          dense
          class="ma-3 pa-5 text-lg-center"
          id="exptations"
        >
          <v-expansion-panels>
            <v-expansion-panel v-for="(item, i) in focus" :key="i">
              <v-expansion-panel-header
               
                class="red--text"
              >
                {{ item.title }}
              </v-expansion-panel-header>
              <v-expansion-content>
                {{ item.Description }}
              </v-expansion-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </v-col>

       <div class="pt-12">
      <v-stepper>
        <v-stepper-header>
          <v-stepper-step step="1" complete> CSS </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="2" complete> HTML </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="3" complete> Javascript </v-stepper-step>
        </v-stepper-header>
      </v-stepper>

      <v-stepper class="pt-4">
        <v-stepper-header
        value="2">
          <v-stepper-step step="1" complete> Vue.js </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="2" complete > Vuetify </v-stepper-step>
          <v-divider></v-divider>
        </v-stepper-header>
      </v-stepper>

      <v-stepper  id="step">
        <v-stepper-header
        value="3">
          <v-stepper-step step="1" complete> Knowing People </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="2" complete> Make Friends, Find mentors </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="3"> Impacting with Christ </v-stepper-step>
        </v-stepper-header>
      </v-stepper>      
</div>

      <v-parallax
     
        width="50"
        height="500"
        src="https://images.pexels.com/photos/1742370/pexels-photo-1742370.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
      >
        <v-col>
          <v-col col="4">
            <v-card>
              <v-card-title class="text--center">
                My experience at Amalitech
              </v-card-title>

              <v-card-text>
                Having a growth mindset is crucial to working at Amalitech. Has
                been nothing but a jourtney of self discovery and growth. Thank
                you to all you all.. I'm appreciative and I look forward to
                coming back for more. Great things are ahead of us all.
                <div class="text-center ">
                  <v-rating
                    v-model="rating"
                    color="yellow darken-3"
                    background-color="grey darken-1"
                    empty-icon="$ratingFull"
                    half-increments
                    hover
                    large
                  ></v-rating>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-col>
      </v-parallax>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      rating: 4.5,
      items: [
        { src: require("@/assets/spiral.jpg") },
        { src: require("@/assets/vacancy.jpg") },
        { src: require("@/assets/missions.jpg") },
        { src: require("@/assets/women.jpg") },
      ],
      focus: [
        { title: "Fears Expectations", Description: "Meeting new people,I was very timid because my skillset was nothing to write home about" },
        
        {
          title: "Experince",
          Description: "Learning new things from the workers",
        },
        {
          title: "The People",
          Description:
            " innovative individauls with the interest of bringing new indeas to live.",
        },
      ],
    };
  },
};
</script>
<style >
#exptations {
  border-radius: 5px;
  box-shadow: 7px 18px 46px -1px rgba(110, 13, 13, 0.75);
}
v-stepper{
  background-color: green;
  display:grid;
  grid-gap:10px;
}
</style>


