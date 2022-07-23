import icecream from '../img/i1.png'
import chicken from '../img/c3.png'
import strawberry from '../img/f1.png'
import fish from '../img/fi1.png'

export const imageData = [
    {id:0, name:'Icecream', desc:'Dark chocolate', cost:'4.75', src: icecream},
    {id:1, name:'Strawberry', desc:'Farm Berries', cost:'3.75', src: strawberry},
    {id:2, name:'Meat', desc:'Spicy Chicken', cost:'7.75', src: chicken},
    {id:3, name:'Fish', desc:'Fresh Tilapia', cost:'10.15', src: fish},
]

export const categories = [
  {
    id: 0,
    name: "Choose Category",
    url: "other"
  },
  {
    id: 1,
    name: "Chicken",
    url: "chicken"
  },
  {
    id: 2,
    name: "Thai Curry",
    url: "curry"
  },

  {
    id: 3,
    name: "Fish",
    url: "fish"
  },

  {
    id: 4,
    name: "Rice",
    url: "rice"
  },
  {
    id: 5,
    name: "Fruits",
    url: "fruits"
  },
  {
    id: 6,
    name: "Desserts",
    url: "icecream"
  },
  {
    id: 7,
    name: "Beverages",
    url: "beverages"
  },
];
