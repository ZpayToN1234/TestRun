new Vue({
  el: "#app",
  data: {
    names: "",
    store: "",
    tarea: "",
    done: false,
  
  },
  methods: {
    save() {
      this.done = true;
    },
  },
  computed: {
    show() {
      return this.names;
    },
  },
});

// capture user inpupt
// inputs
// textarea
// single
// multi select dropdown control
// checkbox
// checkbox group
// RadioNodeListsubmit
