new Vue({
  el: '#alpp',
  data: {
    
    names:['Vincent','Maxwell','Ben','Eben'],
    age:9,
    mate:20,
    number1:20,
    number2: 45,
    name:' Kofi'
},
methods:{
  multiply(num){
    return num * this.age
  },
  add(){
    this.age += 1
  },
  sub(){
    this.age -= 1
  }
  
}

})

