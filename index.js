/* appearing text start */
function DynamicText(text){
    this.text = text

    this.createTextSection = () => {
        this.textSection = document.createElement("div")
        this.textSection.classList.add("js-text-section")
        this.textSection.innerText = this.text

    }

    this.addTextSection = () => {
        this.createTextSection()
        document.getElementById("six").append(this.textSection)
    }

}

let myText = new DynamicText("Hi all, I'm the appearing text from JS")

const pressMeButton = document.getElementById("press-me")
pressMeButton.addEventListener('click', myText.addTextSection)

/* appearing text end */

