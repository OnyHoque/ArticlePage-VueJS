new Vue({
  el: "#vue-app",
  data: {
    font_size: 22,
  },
  methods: {
    fontIncrease: function () {
      if (this.font_size < 30) this.font_size++;
      document.getElementById("main-article").style.fontSize = this.font_size + "px";
    },

    fontDecrease: function () {
        if (this.font_size > 18) this.font_size--;
      document.getElementById("main-article").style.fontSize = this.font_size + "px";
    },

    lightMode: function(){
        document.getElementById("nav-ul").style.backgroundColor = "rgb(70, 70, 70)";
        document.getElementById("adjuster").style.backgroundColor = "rgb(70, 70, 70)";
        document.getElementById("main").style.backgroundColor = "white";
        document.getElementById("font-size-id").style.color = "#EEE";
        document.getElementById("main-article").style.color = "#1D1D1D";
    },

    darkMode: function(){
        document.getElementById("nav-ul").style.backgroundColor = "rgb(185, 185, 185)";
        document.getElementById("adjuster").style.backgroundColor = "rgb(185, 185, 185)";
        document.getElementById("main").style.backgroundColor = "#111111";
        document.getElementById("font-size-id").style.color = "#111111";
        document.getElementById("main-article").style.color = "#EEE";
    },
  },
});
