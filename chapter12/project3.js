"use strict"



//Simple math quiz

let app = function () {
  let game = {};
  let val1 = document.querySelector(".val1");
  let val2 = document.querySelector(".val2");
  let output = document.querySelector(".output");
  let answer = document.querySelector("input");
    function init() {
    document.querySelector("button").addEventListener(
    "click", checker);
    loadQuestion();
    }
    function ranValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1) +
    min);
    }
    function loadQuestion() {
    game.val1 = ranValue(1, 100);
    game.val2 = ranValue(1, 100);
    game.answer = game.val1 + game.val2;
    val1.textContent = game.val1;
    val2.textContent = game.val2;
    }
    function checker() {
    let bg = answer.value == game.answer ? "green" : "red";
    output.innerHTML +=
    `<div style="color:${bg}">${game.val1} +
    ${game.val2} = ${game.answer} (${answer.value})
    </div>`;
    answer.value = "";
    loadQuestion();
    }
    return {
    init: init
    };
    }();
    document.addEventListener("DOMContentLoaded", app.init);
