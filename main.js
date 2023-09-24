import 'normalize.css/normalize.css'
import './style.css'

import { streetDictionary } from './streets'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <div class="stack">
      <div class="label">
        Street Name
      </div>
      <div class="street">
        <input type="text" class="text_input" id="street_input" list="street_names">
        <datalist id="street_names"></datalist>
        </div>
      <div id="district">
        <div id="district_name">district</div>
        <div id="district_location">location</div>
        <div id="district_address">address</div>
      </div>
    </div>
  </div>
`
let datalist = document.querySelector('#street_names')

Object.keys(streetDictionary).forEach((key) => {
  let option = document.createElement('option')
  option.value = key
  datalist.appendChild(option)
})

const districts = {
  1: {
    location: 'West Hill School',
    address: 'Cronin Drive'
  },
  2: {
    location: 'Moser School',
    address: '10 School Street'
  },
  3: {
    location: 'Griswold Middle School',
    address: '144 Bailey Road'
  }
}

let streetInput = document.querySelector('#street_input')

let district = document.querySelector('#district')

let districtName = document.querySelector('#district_name')
let districtLocation = document.querySelector('#district_location')
let districtAddress = document.querySelector('#district_address')

function onInput() {
  const key = streetInput.value
  if (key in streetDictionary) {
    const value = streetDictionary[key]
    districtName.textContent = `District ${value}`
    districtLocation.textContent = districts[value].location
    districtAddress.textContent = districts[value].address
    district.setAttribute('style', 'display: flex;')
  } else {
    district.setAttribute('style', 'display: none;')
  }
}

streetInput.addEventListener('input', onInput)
