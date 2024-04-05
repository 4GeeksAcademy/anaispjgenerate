/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domain = [".com", ".es", ".net", ".uk"];

  const combinaciones = pronoun.map(p => {
    return adj.map(a => {
      return noun.map(n => {
        return domain.map(d => {
          return " " + p + a + n + d;
        });
      });
    });
  });

  let websites = document.querySelector("#doms");

  websites.innerHTML = combinaciones;
};
