"use strict";

const BASE_URL = "http://numbersapi.com/";

console.log("hi");

/** Num Facts pt1
 * takes in a number
 * adds one fact to the dom
 */

// async function get_num_fact(num) {

//   const response = await axios.get(`${BASE_URL}${num}`);
//   let fact = response.data;

//   $("#num").append(`<p>${fact}</p>`);
// }

// console.log("bye")


// let num_fact1 = get_num_fact(5)
// let num_fact2 = get_num_fact(20)
// let num_fact3 = get_num_fact(30)

// let results = [num_fact1, num_fact2, num_fact3]

// console.log(results)

// part3
// async function get_fact_fav() {

//   let fact1 = await axios.get(`${BASE_URL}1`);
//   let fact2 = await axios.get(`${BASE_URL}1`);
//   let fact3 = await axios.get(`${BASE_URL}1`);
//   let fact4 = await axios.get(`${BASE_URL}1`);

//   let results = await Promise.allSettled([fact1, fact2, fact3, fact4]);

//   let promisedResults = results
//     .filter(results => results.status === "fulfilled")
//     .map(results => results.value.data);

//   console.log(promisedResults);
//   $("#num").append(`<p>${promisedResults}</p>`);
// }

// get_fact_fav();


// grab deck id after

// Part 2. question 1

// async function getDeck(){
//   let response = await axios.get('http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
//   let deckId = response.data.deck_id

//   let drawCard = await axios.get(`http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
//   console.log(drawCard.data.cards[0].suit)
//   console.log(drawCard.data.cards[0].value)
// }

// getDeck()


// part 2. question 2

async function getDeck(){
  let response = await axios.get('http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
  let deckId = response.data.deck_id

  let drawCard = await axios.get(`http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
  console.log(drawCard.data.cards[0].suit)
  console.log(drawCard.data.cards[0].value)

  let drawCard2 = await axios.get(`http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
  console.log(drawCard2.data.cards[0].suit)
  console.log(drawCard2.data.cards[0].value)
}

getDeck()