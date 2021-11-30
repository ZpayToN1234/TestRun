<template>
  
 <v-container  color="green lighten-7" class="grey lighten-5" id="container">
 <v-row gutters id="heads" > 
         <v-col col="4" >
             <v-card class="yellow lighten-4" id="edu">
                 <v-card-title>
                     <div align="center">
                       Education 
                     </div>
                 </v-card-title>
                 
             </v-card>
         </v-col>
     
 <v-col cols="4">
 <v-card color="primary lighten-3">
          <v-card-title align="center">
              People 
          </v-card-title>
          <v-card-text>

          </v-card-text>
      </v-card>
 </v-col>

 <v-col cols="4" >
 <v-card color="warning lighten-3">
          <v-card-title align="center--text">
              Extra  
          </v-card-title>
          <v-card-text>

          </v-card-text>
      </v-card>
 </v-col>
</v-row>

    <v-row no-gutters>
      <v-col
        v-for="n in things"
        :key="n"
        cols="12"
        sm="4"
        
      >
        <v-card
          class="pa-4 ma-5"
          outlined
          tile
          align="center"
          height="300"
        >
        <div class="subheading" id="title"> <strong> {{n.title}} </strong> </div>
           <div> <v-avatar size="100" class="text--center pa-5"> {{ n.img}} </v-avatar> </div>
          <div align="center" > {{n.text}}</div>
          <div class="pa-4" > {{n.another}}</div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>
<script>
    export default {
        data(){
            return{
                things:[{title:'EDUCATION',text:'Kwame Nkrumah University of Science and Technology', another:'SOS Hermain Gmeiner International College'},
            {title:'SPORTS',text:'100 meters runner, 200 meters runner, triple jump, volleyball team captain, Hockey, Debate society, Spoken word artist '},            
            {title:'FRIENDS', text: 'Jesus, Fellow brother'},
            ]
            }
        }   
    }
</script>

<style >
*{margin: 0;
padding: 0;
}

#container{  
width: auto;
position: absolute;
top: 2%;
left: 10%;
text-align: center;
padding: 30px;
box-shadow: 3px 4px 35px -7px rgba(235,26,26,0.75);
border-radius: 20px;
}
#heads{
padding: 10px;
box-shadow: 0px 0px 30px 0.4px rgba(0,0,0,0.5);
border-radius: 90px;
}

#edu:hover{
  background-color: pink lighten;
}

#title{
  text-align: center;
}


</style>
