export {DynamicText}

let DynamicText = (text) => {
    this.text = text

    this.createTextSection = () => {
        this.textSection = document.createElement("div")


    }
    this.appearingText = () => {

    }
}

let myText = new DynamicText("Just Begin")

myText.createTextSection

console.log(myText)