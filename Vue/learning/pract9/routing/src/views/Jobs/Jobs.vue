<template>
    <div v-for="name in names" :key="name.id" class="job">
 <router-link :to="{name:'Details',params:{id:name.id}}">
         <p>{{name.title}} </p>

  </router-link>

    </div>
</template>

<script>
    export default {
        data(){
            return{
                names:[{title:'Computer Science',id:23, company:'amalitech'},
                {title:'Data Science',id:678,company:'vodafone'},
                {title:'Database Administrator', id:78, company:'the greater things of the world  '}]
            }
        }
        
    }
</script>

<style >
.job p{
    padding:5px 10px;
    max-width:680px;
    background-color:lightsteelblue;
    cursor:pointer;
    margin:10px auto;
    color:white;
    text-align: center;
    border-radius: 4px;

}
.job p:hover{
    background-color:rgb(247, 109, 109);
}
.job a{
    text-decoration:none;
}

</style>