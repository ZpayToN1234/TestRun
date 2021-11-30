var app1 = new Vue({
  el: "#app",
  data: {
    clients: {
      person: { id: 1, name: " Pato boy", language: " not known" },
      person: { id: 2, name: " Kojo Amoako", language: "java" },
      person: { id: 3 }
    },
    show: false,
    show1: false,
    number: " command",
    fredThings: {
      padding: "5px",
      color: "pink",
      borderRadius: "30%",
      backgoundColor: "black",
      say:'the days of the lord'
    },
    fret: {
      boxShadow: "2px 18px 5px 12px rgba(220,192,115,0.53)",
      color: "orange",
      padding: "30px",
      fontSize: "small",
      position: "absolute",
      left: "20%",
      right: "60%",
      borderRadius: "20%",
      width: "auto",
      textAlign: "left",
    },
  },
  methods: {
    add_string() {
      return this.person1.name + this.person1.language;
    },
    alerta() {
      return alert(
        " this is the day the lord has made lets rejoice and be glad in it."
      );
    },
    appear() {
      this.show = !this.show;
    },
    changeColor() {
      this.show1 = true;
    },
    showAlert(){
      return alert(" i am the one the hear you.");
    },
    psomething(input){
      return document.write(input);
    }
  },
  computed: {
    current(add_string) {
      return add_string + this.command;
    },
  },
});


