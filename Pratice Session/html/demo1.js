let a=document.createElement("h1")
let b=document.createTextNode("Java Script")
a.appendChild(b)

document.body.appendChild(a)


let x=document.createElement("p")
let y= document.createTextNode("Welcome to JS")
x.appendChild(y)
document.body.appendChild(x)


let l=document.createElement("form")
l.setAttribute("method", "get")
l.setAttribute("action","#")
let k=document.createElement("input")
k.setAttribute("type","input")
let k2=document.createElement("input")
k2.setAttribute("type","number")
let k3=document.createElement("input")
k3.setAttribute("type","password")
l.appendChild(k)
l.appendChild(k2)
l.appendChild(k3)
document.getElementById("show").appendChild(l)