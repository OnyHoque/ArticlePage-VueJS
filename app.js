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
        document.getElementById("option1").style.color = "#EEE";
        document.getElementById("option2").style.color = "#EEE";
        document.getElementById("option3").style.color = "#EEE";
        document.getElementById("option4").style.color = "#EEE";
        document.getElementById("option1").classList.remove('nav_option1', 'nav_option2', 'nav_option3',  'nav_option4', 'nav_option5');
        document.getElementById("option1").classList.add('nav_option1');
        document.getElementById("option2").classList.remove('nav_option1', 'nav_option2', 'nav_option3',  'nav_option4', 'nav_option5');
        document.getElementById("option2").classList.add('nav_option1');
        document.getElementById("option3").classList.remove('nav_option1', 'nav_option2', 'nav_option3',  'nav_option4', 'nav_option5');
        document.getElementById("option3").classList.add('nav_option1');
        document.getElementById("option4").classList.remove('nav_option1', 'nav_option2', 'nav_option3',  'nav_option4', 'nav_option5');
        document.getElementById("option4").classList.add('nav_option1');
    },

    darkMode: function(){
        document.getElementById("nav-ul").style.backgroundColor = "rgb(185, 185, 185)";
        document.getElementById("adjuster").style.backgroundColor = "rgb(185, 185, 185)";
        document.getElementById("main").style.backgroundColor = "#111111";
        document.getElementById("font-size-id").style.color = "#111111";
        document.getElementById("main-article").style.color = "#EEE";
        document.getElementById("option1").style.color = "#1D1D1D";
        document.getElementById("option2").style.color = "#1D1D1D";
        document.getElementById("option3").style.color = "#1D1D1D";
        document.getElementById("option4").style.color = "#1D1D1D";

        document.getElementById("option1").classList.remove('nav_option1', 'nav_option2', 'nav_option3',  'nav_option4', 'nav_option5');
        document.getElementById("option1").classList.add('nav_option2');
        document.getElementById("option2").classList.remove('nav_option1', 'nav_option2', 'nav_option3',  'nav_option4', 'nav_option5');
        document.getElementById("option2").classList.add('nav_option2');
        document.getElementById("option3").classList.remove('nav_option1', 'nav_option2', 'nav_option3',  'nav_option4', 'nav_option5');
        document.getElementById("option3").classList.add('nav_option2');
        document.getElementById("option4").classList.remove('nav_option1', 'nav_option2', 'nav_option3',  'nav_option4', 'nav_option5');
        document.getElementById("option4").classList.add('nav_option2');
    },

    Theme1: function(){
      document.getElementById("nav-ul").style.backgroundColor = "white";
      document.getElementById("adjuster").style.backgroundColor = "grey";
      document.getElementById("main").style.backgroundColor = "black";
      document.getElementById("font-size-id").style.color = "white";
      document.getElementById("main-article").style.color = "white";
      document.getElementById("option1").style.color = "black";
      document.getElementById("option2").style.color = "black";
      document.getElementById("option3").style.color = "black";
      document.getElementById("option4").style.color = "black";

      document.getElementById("option1").classList.remove('nav_option1', 'nav_option2', 'nav_option3',  'nav_option4', 'nav_option5');
        document.getElementById("option1").classList.add('nav_option3');
        document.getElementById("option2").classList.remove('nav_option1', 'nav_option2', 'nav_option3',  'nav_option4', 'nav_option5');
        document.getElementById("option2").classList.add('nav_option3');
        document.getElementById("option3").classList.remove('nav_option1', 'nav_option2', 'nav_option3',  'nav_option4', 'nav_option5');
        document.getElementById("option3").classList.add('nav_option3');
        document.getElementById("option4").classList.remove('nav_option1', 'nav_option2', 'nav_option3',  'nav_option4', 'nav_option5');
        document.getElementById("option4").classList.add('nav_option3');
    },

    Theme2: function(){
      document.getElementById("nav-ul").style.backgroundColor = "white";
      document.getElementById("adjuster").style.backgroundColor = "grey";
      document.getElementById("main").style.backgroundColor = "red";
      document.getElementById("font-size-id").style.color = "white";
      document.getElementById("main-article").style.color = "white";
      document.getElementById("option1").style.color = "red";
      document.getElementById("option2").style.color = "red";
      document.getElementById("option3").style.color = "red";
      document.getElementById("option4").style.color = "red";

      document.getElementById("option1").classList.remove('nav_option1', 'nav_option2', 'nav_option3',  'nav_option4', 'nav_option5');
        document.getElementById("option1").classList.add('nav_option4');
        document.getElementById("option2").classList.remove('nav_option1', 'nav_option2', 'nav_option3',  'nav_option4', 'nav_option5');
        document.getElementById("option2").classList.add('nav_option4');
        document.getElementById("option3").classList.remove('nav_option1', 'nav_option2', 'nav_option3',  'nav_option4', 'nav_option5');
        document.getElementById("option3").classList.add('nav_option4');
        document.getElementById("option4").classList.remove('nav_option1', 'nav_option2', 'nav_option3',  'nav_option4', 'nav_option5');
        document.getElementById("option4").classList.add('nav_option4');
    },

    Theme3: function(){
      document.getElementById("nav-ul").style.backgroundColor = "white";
      document.getElementById("adjuster").style.backgroundColor = "rgb(0, 250, 50)";
      document.getElementById("main").style.backgroundColor = "rgb(140, 255, 170)";
      document.getElementById("font-size-id").style.color = "black";
      document.getElementById("main-article").style.color = "black";
      document.getElementById("option1").style.color = "black";
      document.getElementById("option2").style.color = "black";
      document.getElementById("option3").style.color = "black";
      document.getElementById("option4").style.color = "black";

      document.getElementById("option1").classList.remove('nav_option1', 'nav_option2', 'nav_option3',  'nav_option4', 'nav_option5');
        document.getElementById("option1").classList.add('nav_option5');
        document.getElementById("option2").classList.remove('nav_option1', 'nav_option2', 'nav_option3',  'nav_option4', 'nav_option5');
        document.getElementById("option2").classList.add('nav_option5');
        document.getElementById("option3").classList.remove('nav_option1', 'nav_option2', 'nav_option3',  'nav_option4', 'nav_option5');
        document.getElementById("option3").classList.add('nav_option5');
        document.getElementById("option4").classList.remove('nav_option1', 'nav_option2', 'nav_option3',  'nav_option4', 'nav_option5');
        document.getElementById("option4").classList.add('nav_option5');
    },
  },
});
