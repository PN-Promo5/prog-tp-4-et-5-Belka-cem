console.log("hello world");


console.log("Exercice1")

let fruits = new Array("banane", "fraise", "pomme", "orange");



function functionBoard(tab) {
  let i = 0;
  let currentElement
  while (i < tab.length) {
    currentElement = fruits[i]
    i = i + 1
    console.log(currentElement)


  }


}
functionBoard(fruits)


console.log("Exercice2")

let number = new Array(1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 187, 13, 18, 12, 17, 29, 86, 15, 17)
let j = 0
let displayedNumber = 10

let currentElement2

function functionTen(tab) {
  while (j <= tab.length) {
    currentElement2 = tab[j]
    j = j + 1
    if (currentElement2 <= displayedNumber) {
      console.log(currentElement2)

    }

  }

}

functionTen(number)

console.log("Exercice3")


function functionLastTen(tab) {
  let i = 0
  let currentElement
  let displayedNumber = number.length - 9

  while (i <= tab.length) {
    currentElement = tab[i]
    i = i + 1

    if (currentElement > displayedNumber) {
      console.log(currentElement)

    }





  }



}



functionLastTen(number)



console.log("Exercice4")

let numberAdd1 = []

function functionAdd1(tab) {
  let i = 0
  let currentElement


  while (i <= tab.length) {
    currentElement = tab[i]
    i = i + 1

    if (currentElement) {

      currentElement = currentElement + 1
      numberAdd1.push(currentElement)
      console.log(currentElement)


    }

  }


}

functionAdd1(numberAdd1)


console.log("Exercice5")


function functionEven(tab) {
  let i = 0;
  let currentElement;

  while (i < tab.length) {
    currentElement = tab[i];
    i = i + 1
    if (currentElement % 2 === 0) {
      console.log(currentElement + " est paire")


    } else {
      console.log(currentElement + " est impaire")

    }

  }

}

functionEven(number)




console.log("Exercice6")

function functionSomme(tab) {
  let i = 0
  let currentElement
  let resultat = 0

  while (i < tab.length) {
    currentElement = tab[i]
    i = i + 1
    resultat = resultat +currentElement

  }
  return resultat

}

let result = functionSomme(number)
console.log(result)




console.log("Exercice7")

function functionPaire(tab) {
  let i = 0;
  let currentElement;

  while (i <= tab.length) {
    currentElement = tab[i];
    i = i + 1
    if (currentElement % 2 == 0) {
      console.log(currentElement)


    }

  }

}

functionPaire(number)

console.log("Exercice8")


function functionValeurMax(tab) {
  let i = 0;
  let currentElement;
  let max = tab[0]

  while (i <= tab.length) {
    currentElement = tab[i];
    i = i + 1
    if (currentElement > max) {
      max = currentElement

    }


  }
  return max
}

let max = functionValeurMax(number)
console.log(max)


console.log("Exercice9")

function functionValeurMin(tab) {
  let i = 0;
  let currentElement;
  let min = tab[0]

  while (i <= number.length) {
    currentElement = tab[i];
    i = i + 1
    if (currentElement < min) {
      min = currentElement

    }


  }
  return min
}

let min = functionValeurMin(number)
console.log(min)


console.log("Exercice10")

function functionCroissan(tab) {
  let i = 0
  let currentElement
  let nextElement
  while (i <= tab.length -1) {
    currentElement = tab[i]
    nextElement = tab[i +1]
    i = i + 1
    if (currentElement > nextElement) {
    return false


    }
  } return true
}

console.log(functionCroissan(number))


let fr = [1, 2, 3, 4, 5]
console.log(functionCroissan(fr))


console.log("exercice 11")

function functionoccurrence(tab){
  let i = 0
  let j = 0
  let currentElement
  let currentElement2
  let array = [tab[i]]
  let copy




  while (i <= tab.length) {
    currentElement = tab[i]
     i = i + 1
     copy = true

     while (j <= array.length) {
       currentElement2 = array[j]

       if (currentElement === currentElement2) {
         copy = false
       }
       j = j +1
     }
     if (copy) {
       array.push(currentElement)
     }

   }

  return array

  }








let array2 = [8,8,8,9,9,9,10,10,11]

 console.log(functionoccurrence(array2))




console.log("exercice12")


function functionInvers(tab){
  let i = 0 ;
  let currentElement ;
  let array = []
  while (i < tab.length) {

    currentElement = tab.length - 1 - i;
    array.push(tab[currentElement]);
    i++;
  }
  return array;


}

console.log(functionInvers(array2))


console.log("exercice13")


function functionTwoArray(tab1 ){
  let i = 0
  let currentElement
  let array = []

  while (i <= tab1.lenght) {
    currentElement = tab1[i]
    i = i + 1
    array.push(currentElement)

  }

  i = 0

  while (i <= tab2.lenght) {
    currentElement = tab2[i]
    i = i + 1
    array.push(currentElement)

  }
  return array
}


let tab1 = [1,1,1,1]
let tab2 = [3,2,1,1]
console.log(functionTwoArray(tab1, tab2))

console.log("exercice14")

function functionVoyelle(tab) {
  let i = 0
  let currentElement
  let commnenceVoyelle
  let array = []

  while (i <= tab.length) {
    currentElement = tab[i];
    i = i + 1;
    commnenceVoyelle = commenceParVoyelle(currentElementmt);
    if (commnenceVoyelle) {
      array.push(currentElement);
    }
  }

  return array;

}

function commenceParVoyelle(word) {
  if (word.charAt(0).toUpperCase() === 'A' ||
    word.charAt(0).toUpperCase() === 'E' ||
    word.charAt(0).toUpperCase() === 'I' ||
    word.charAt(0).toUpperCase() === 'O' ||
    word.charAt(0).toUpperCase() === 'U' ||
    word.charAt(0).toUpperCase() === 'Y') {
    return true;
  } else {
    return false;
  }
}



let mots = ["oula" , " cabrer"]
console.log(commenceParVoyelle(mots))
