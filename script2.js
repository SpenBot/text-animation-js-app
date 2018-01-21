

///////////////////////// SET DOM VARIABLES /////////////////////////////
/////////////////////////////////////////////////////////////////////////

let textInput = document.getElementById('textInput')
let indicatorSquare = document.getElementById('technoFace')


///////////////////////// SET GLOBAL VARIABLES //////////////////////////
let sampleText = "Hello World"





////////////////////////// ANIMATE TEXT /////////////////////////////////
/////////////////////////////////////////////////////////////////////////

function animateText(str) {

  let textSplit = str.split("")
  let count = 0
  let textArray = []
  let finalText = ""


  /////////////////////////////////////////////
  function addLetters() {

    if (textSplit[count] !== " " && count < textSplit.length ) {
      setTimeout( ()=>  {
        textArray.push(textSplit[count])
        finalText = textArray.join("")
        textInput.innerHTML= finalText
        document.getElementById('boop').play()
        console.log("no space")
        count += 1
        addLetters()
      }, 160)
    } else if (textSplit[count] === " " && count < textSplit.length ) {
        textArray.push(textSplit[count])
        finalText = textArray.join("")
        textInput.innerHTML= finalText
        console.log("space")
        count += 1
        addLetters()
    } else if ( count >= textSplit.length ) {
        indicatorSquare.style.backgroundColor = "red"
    }

  }
  /////////////////////////////////////////////

  addLetters()


}



////////////////////////// ANIMATE ALL //////////////////////////////////
/////////////////////////////////////////////////////////////////////////

function animateAll (str) {

  indicatorSquare.style.backgroundColor = "green"

  animateText(str)

}
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
