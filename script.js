const total = document.getElementById('billInput')
const tip = document.getElementById('tipInput')
const perPerson = document.getElementById('perPerson')
const people = document.getElementById('numberOfpeople')
const warn = document.getElementById('warning')

let n_people = Number(numberOfpeople.innerText)

function increasePeople(){
   n_people += 1;
   warn.innerHTML = ``
   numberOfpeople.innerText = n_people
   calculateBill();
  
}

function  decreasePeople() {
   if(n_people-1 < 1){
      warn.innerHTML = `Number of people cannot be less than 1`
   }else{
      n_people -= 1;
      warn.innerHTML = ``
      numberOfpeople.innerText = n_people
   }
   
   calculateBill();
}

function calculateBill(){
  let bill = Number(total.value)
  console.log(bill)
  
  let tipPer = Number(tip.value)/100;
  console.log(tipPer)
  
  let tipAmt = bill*tipPer
  console.log(tipAmt)
  
  const totalBill = bill + tipAmt
  console.log(totalBill)

  const perPeople = totalBill/n_people
  
  perPerson.innerText = `$${perPeople.toFixed(2)}`
}