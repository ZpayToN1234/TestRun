var app = new Vue({
  el: "#app",
  data: {
    firstName: "Kojo",
    lastName: " Amah",
    num1: 1,
    num3: 1,
  },
  methods: {
    make() {
      document.write("where do you come from?");
    },
  },
  // always use getters and setters for the computed. 
  // it can use a fucntion as a parameter. 
  
  computed: {
    name() {
      var nike = this.firstName;
      return nike;
    },
    calculations() {
      return this.num1 + this.num3;

    },
  },
});
