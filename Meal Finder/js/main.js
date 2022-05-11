//On Page load, load content
//document.addEventListener('DOMContentLoaded', find)

//Create event listener for when user clicks on button

document.querySelector('a').addEventListener('click', find)

//Create find function 

function find () {
  //if statment for when there are more slides than meals
  if(document.querySelectorAll('.swiper-slide')!== null) {
    (document.querySelectorAll('.swiper-slide').forEach(el => el.remove()))
  }
  //create variable for user input

  const enterMeal = document.querySelector('input').value

  //Fetch api for when user enters a meal

  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${enterMeal}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      //if statement if meal soes not exist
      if(data.meals === null) {
        document.querySelector('.end').innerText = (`${enterMeal} not found, try another`)

      }
      else{
          data.meals.forEach(meal => {
            console.log(meal.strMeal)
            
            const slide = document.createElement('div');
            slide.className = 'swiper-slide';
            document.querySelector('.swiper-wrapper').appendChild(slide)

            const card = document.createElement('div');
            card.className = 'mealCard';
            slide.appendChild(card)

            const mealName = document.createElement('h2')
            mealName.innerText = meal.strMeal
            card.appendChild(mealName)

            const mealImage = document.createElement('img')
            mealImage.src = meal.strMealThumb;
            card.appendChild(mealImage)

            const instructions = document.createElement('h3')
            instructions.innerText = meal.strInstructions
            card.appendChild(instructions)

            //const mealType = document.createElement('p')
            //mealType.innerText = meal.strCategory
            //card.appendChild(mealType)

          })
          //document.querySelector('h2').innerText = data.meals[i].strMeal
      }
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

  /*
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${enterMeal}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      if(data.meals === 0) {
        //document.querySelector('.end').innerText = (`${enterMeal} not found, try another`)

      }else{
        /*document.querySelector('h2').innerText = data.meals[i].strMeal
        document.querySelector('img').src = data.meals[i].strMealThumb
        document.querySelector('.instructions').innerText = data.meals[i].strInstructions
        document.querySelector('.mealType').innerText = data.meals[i].strCategory
      //}
    })
    .catch(err => {
        console.log(`error ${err}`)
    });*/

}

