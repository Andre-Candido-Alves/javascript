document.querySelector(".cxAlta").addEventListener("click", caixaAlta)
// document.querySelector(".prLetra").addEventListener("click", caixaBaixa)
// document.querySelector(".prLetraPal").addEventListener("click", )
document.querySelector(".cxBaixa").addEventListener("click", caixaBaixa)
// document.querySelector(".neg").addEventListener("click", )
// document.querySelector(".ital").addEventListener("click", )

let text = document.querySelector("textarea").value

function caixaAlta(){
    text = document.querySelector("textarea").value
    document.querySelector("textarea").value = text.toUpperCase()
}
function caixaBaixa(){
    text = document.querySelector("textarea").value
    document.querySelector("textarea").value = text.toLowerCase()
}
function firstUpp(){
    text = document.querySelector("textarea").value
    document.querySelector("textarea").value = text
}