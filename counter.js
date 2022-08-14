(function () {
  const count = document.querySelector("#count")
  const increaseBtn = document.querySelector("#addCount")
  const decreaseBtn = document.querySelector("#lowerCount")
  
  let total = 0
 increaseBtn.addEventListener("click", function () {
    total += 1
    if (total > 0) {
      count.style.color = "green"
    }else 
    if (total === 0) {
count.style.color = "yellow"
    }
    count.textContent = total
  })
decreaseBtn.addEventListener("click", function () {
    total -= 1
 if (total < 0) {
      count.style.color = "red"
    }else {
      if (total === 0) {
        count.style.color = "yellow"
      }
    }
  count.textContent = total
})
})()



  