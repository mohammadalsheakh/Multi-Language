let arabic = document.getElementById(`arabic`)
let english = document.getElementById(`english`)
let mohammadname = document.getElementById(`mohammadname`)
let welcomer = document.getElementById(`welcomer`)
let aboutus = document.getElementById(`aboutus`)
let contactspan = document.getElementById(`contactspan`)
let contactbutton = document.getElementById(`contactbutton`)


arabic.onclick = ()=>{
    website_Language(`arabic`)
    localStorage.setItem(`sitelanguage`,`arabic`)
}
english.onclick = () => {
    website_Language(`english`)
    localStorage.setItem(`sitelanguage`, `english`)

}
function website_Language(sitelanguage){
    if (sitelanguage === `arabic`) {
        mohammadname.innerHTML = `محمد ابراهيم`
        welcomer.innerHTML = `اهلا وسهلا في موقعي `
        aboutus.innerHTML = `حولنا`
        contactspan.innerHTML = `انا مبرمج ومهندس مدني`
        contactbutton.innerHTML = `تواصل معنا`
    }
    else if(sitelanguage === `english`){
        mohammadname.innerHTML = `Mohammad Ibrahim`
        welcomer.innerHTML = `Welcome To My Web Site`
        aboutus.innerHTML = `About US`
        contactspan.innerHTML = `Im Programer And Civil Engineer`
        contactbutton.innerHTML = `Contct Us`
    }

}
onload = () => website_Language(localStorage.getItem(`sitelanguage`))