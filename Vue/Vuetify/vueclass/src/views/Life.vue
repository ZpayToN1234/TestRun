<template>

<v-parallax height="1200" src="../assets/images.jpg">
<template>
  <v-timeline
    align-top
    :dense="$vuetify.breakpoint.smAndDown"
    style="px-2 mx-5"
  >
    <v-timeline-item
      v-for="(item, i) in items"
      :key="i"
      :color="item.color"
      :icon="item.icon"
      fill-dot
    >
      <v-card
        :color="item.color"
        dark
      >
        <v-card-title class="text-h6" style="font-size:20px ">
            {{item.head}}
 </v-card-title>
        <v-card-text class="white text--primary">
          <p style="font-size:16px "> {{item.text}}
          </p>
          <v-btn
            :color="item.color"
            class="mx-0 right"
            outlined
          >
            Achieved
          </v-btn>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>
    
</v-parallax>
</template>

<script>
export default {

   
    data: () => ({
      items: [
        {
          color: 'red lighten-2',
          icon: 'mdi-star',
          head:'Heaven',
          text:'I am a product of heaven and a beloved child of God.'
        },
        {
          color: 'purple darken-1',
          icon: 'mdi-book-variant',
          head:'Born to earth',
          text:'I was born onto the earth for something greater than myself. It is the start of learning who I am in Christ.'
        },
        {
          color: 'green lighten-1',
          icon: 'mdi-airballoon',
          head:'Find My Purpose ',
          text:'As I grow, the things of the world become very mandane. I look forward for a greater purpose in Christ.'
        },
        {
          color: 'indigo',
          icon: 'mdi-buffer',
          head:'What do I live for?',
          text:'I choose to live for Jesus and not myself for the glory of God. Taking the cross of Christ daily. In it there is fulfilment'
        },
        {
            color:'yellow lighten-2',
            icon:'',
            head:'Fighting a good fight',
            text:'I choose to carry my cross daily and follow Christ all the way to the end. Fighting a good fight.'

        },
        {
            color:'grey',
            icon:'',
            head:'Going Back into Glory',
            text:'Going back to dwell with my belovered forever.'

        }
      ],
    })
  
}
</script>

<style>
*{
    padding:0;
    margin: 0;
}
v-card{
  padding:2px;
  border-style:dotted;
  border-radius: 50%;

  
  


}
</style>