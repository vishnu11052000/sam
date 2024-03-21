import { arr } from "./20.js";

document.getElementById("std-info").addEventListener("click", () => {

  let v = arr.map((u) => {

    let h = `<br> <h5> <img src=${u.image} height="100px" width="200px"> <br> stdid: ${u.stdid} <br> stdname: ${u.stdname} <br> stdno:${u.stdno} <br> degree: ${u.degree} </h5> <hr>`;
    return h;
    
  }).join("  ");
  console.log(v);
  document.getElementById("res").innerHTML=v
})




//       Filter
document.getElementById("filter").addEventListener("click",()=>{


let x=arr.filter((ele)=>{return ele.degree=="bsc","bca"})
console.log(arr);


let v = x.map((u) => {

   return `<br> <h5> <img src=${u.image} height="100px" width="200px"> <br> stdid: ${u.stdid} <br> stdname: ${u.stdname} <br> stdno:${u.stdno} <br> degree: ${u.degree} </h5> <hr>`;
  
  
}).join("  ");
console.log(v);
document.getElementById("res").innerHTML=v
})






//                   A) INSERTION

//              1.Push -last object insert


document.getElementById("push").addEventListener("click",()=>{

let ins={stdid:"005",stdname:"Alexandra",stdno:"9876543232",degree:"bcom",image:"../images/images5.jpg"}

   arr.push(ins);
  //  console.log(arr);

  let v = arr.map((u) => {

    return `<br> <h5> <img src=${u.image} height="100px" width="200px"> <br> stdid: ${u.stdid} <br> stdname: ${u.stdname} <br> stdno:${u.stdno} <br> degree: ${u.degree} </h5> <hr>`;
    
    
  }).join("  ");
  console.log(v);
  document.getElementById("res").innerHTML=v 


})





//              2. Unshift - First Object Insert

document.getElementById("unshift").addEventListener("click",()=>{

let unshins={stdid:"006",stdname:"BraieLarson",stdno:"9988776644",degree:"bsc",image:"../images/images6.jpg"}

arr.unshift(unshins);

// console.log(arr);

let v = arr.map((u) => {

  let h = `<br> <h5> <img src=${u.image} height="100px" width="200px"> <br> stdid: ${u.stdid} <br> stdname: ${u.stdname} <br> stdno:${u.stdno} <br> degree: ${u.degree} </h5> <hr>`;
  return h;
  
}).join("  ");
console.log(v);
document.getElementById("res").innerHTML=v 

})







//                 3. Splice - For Specific Place for your own choice

document.getElementById("spl").addEventListener("click",()=>{

  let slice={stdid:"007",stdname:"Tony",stdno:"9988776645",degree:"BA",image:"../images/images7.jpg"}
  

  arr.splice(3,0,slice);

  console.log(arr)

  let v = arr.map((u) => {

    let h = `<br> <h5> <img src=${u.image} height="100px" width="200px"> <br> stdid: ${u.stdid} <br> stdname: ${u.stdname} <br> stdno:${u.stdno} <br> degree: ${u.degree} </h5> <hr>`;
    return h;
    
  }).join("  ");
  console.log(v);
  document.getElementById("res").innerHTML=v 
  
  })
  








//                       B) DELETION

//                        1.PoP - last object deleted


document.getElementById("pop").addEventListener("click",()=>{

arr.pop();

console.log(arr)


let v = arr.map((u) => {

  let h = `<br> <h5> <img src=${u.image} height="100px" width="200px"> <br> stdid: ${u.stdid} <br> stdname: ${u.stdname} <br> stdno:${u.stdno} <br> degree: ${u.degree} </h5> <hr>`;
  return h;
  
}).join("  ");
console.log(v);
document.getElementById("res").innerHTML=v 

})





//                      2.Shift - First object deleted

document.getElementById("shif").addEventListener("click",()=>{

  arr.shift();
  console.log()

  let v = arr.map((u) => {

    let h = `<br> <h5> <img src=${u.image} height="100px" width="200px"> <br> stdid: ${u.stdid} <br> stdname: ${u.stdname} <br> stdno:${u.stdno} <br> degree: ${u.degree} </h5> <hr>`;
    return h;
    
  }).join("  ");
  console.log(v);
  document.getElementById("res").innerHTML=`${v} `;
  
})






//                       3.Delete- Specific Place for your oen choice

document.getElementById("del").addEventListener("click",()=>{

  delete arr[1];
  console.log(arr)
  let v = arr.map((u) => {

    let h = `<br> <h5> <img src=${u.image} height="100px" width="200px"> <br> stdid: ${u.stdid} <br> stdname: ${u.stdname} <br> stdno:${u.stdno} <br> degree: ${u.degree} </h5> <hr>`;
    return h;
    
  }).join("  ");
  console.log(v);
  document.getElementById("res").innerHTML=`${v} `;
  
})









//                          C) UPDATE

document.getElementById("update").addEventListener("click",()=>{

  let z=arr.findIndex((n)=>{return n.stdname=="Vinay"
})
  console.log("z")
  arr[z].stdid="006";
  arr[z].stdno= "8877669900";
  arr[z].degree="Mcom"
  arr[z].image="../images/images8.jpg";

  let v = arr.map((u) => {

    let h = `<br> <h5> <img src=${u.image} height="100px" width="200px"> <br> stdid: ${u.stdid} <br> stdname: ${u.stdname} <br> stdno:${u.stdno} <br> degree: ${u.degree} </h5> <hr>`;
    return h;
    
  }).join("  ");
  console.log(v);
  document.getElementById("res").innerHTML=v 
  
  })





  //              Upadte mote than 1

   document.getElementById("more").addEventListener("click",()=>{
  
    let k=arr.map((u)=>{
      
      //if condition
      if(u.degree=="bca")
      {
        u.degree="mca"
      }          

    // u.degree=="bsc"? u.degree="msc":(false stmt);  //ternary

    console.log(arr)
    let h = `<br> <h5> <img src=${u.image} height="100px" width="200px"> <br> stdid: ${u.stdid} <br> stdname: ${u.stdname} <br> stdno:${u.stdno} <br> degree: ${u.degree} </h5> <hr>`;
    return h;
    
    })
     document.getElementById("res").innerHTML=k

})








//                       Serach Operation


document.getElementById("search").addEventListener("click",()=>{

let ele=arr.filter((u)=>{return (u.stdname=="vishnu" && degree=="bsc")




})




})








//                   Sort Opetration


document.getElementById("sort").addEventListener("click",()=>{

  let slot =arr.sort((m,n)=>{
  return((m.stdname < n.stdname)? -1: 0)
 
})

 console.log(slot)
  document.getElementById("res").innerHTML=slot.map((u)=>{
  let h = `<br> <h5> <img src=${u.image} height="100px" width="200px"> <br> stdid: ${u.stdid} <br> stdname: ${u.stdname} <br> stdno:${u.stdno} <br> degree: ${u.degree} </h5> <hr>`;
  return h;


}).join(" ")
 

})




