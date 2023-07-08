const searchBtnElem = document.querySelector('button')
const searchInputElem = document.querySelector('input')
const paragraphElem = document.querySelector('#paragraph')

const searchWord = () => {

    let searchInputValue = searchInputElem.value
    let searchRegex = new RegExp(`${searchInputValue}` , "gi") 

    paragraphElem.innerHTML = paragraphElem.textContent.replace(searchRegex ,item => `<mark>${item}</mark>`)
}

searchBtnElem.addEventListener("click" , searchWord)