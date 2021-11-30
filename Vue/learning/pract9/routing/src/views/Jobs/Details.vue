<template>
    <div>
<p>
    Jobs details page
</p>The details are {{id}}
<p>   </p>

    </div>
</template>

<script>
    export default {
       props:['id']
    }
</script>

<style  scoped>
p{
    background-color: rgb(220, 199, 235);
    border-radius: 4px;
    color:red;

}
</style>