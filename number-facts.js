"use strict"

 const BASE_URL = "http://numbersapi.com/"

console.log("hi")

/** Num Facts pt1
 * takes in a number
 * adds one fact to the dom
 */

async function get_num_fact(num) {

  const response = await axios.get(`${BASE_URL}${num}`)
  let fact = response.data

  $("#num").append(`<p>${fact}</p>`)
}

console.log("bye")


let num_fact1 = get_num_fact(5)
let num_fact2 = get_num_fact(20)
let num_fact3 = get_num_fact(30)

let results = [num_fact1, num_fact2, num_fact3]

console.log(results)




