const items=document.querySelectorAll(".list-item")
const container=document.querySelector(".list")
const scoll=document.querySelector(".carourcler")
const next=document.querySelector(".next")
const prev=document.querySelector(".prev")
const buttonn=document.querySelectorAll(".btn")
var indexItem=0;
var remove=undefined;
const indexWidth=items[0].offsetWidth;

const move=(index)=>{
     container.style.transform=`translateX(-${index*indexWidth}px)`
     indexItem=index
     const arrbtn =[...buttonn].filter(function(value,indexx){
           return indexx==index
     })
      const arrbtn2=[...buttonn].filter(function(value,indexx){
        return indexx!==index
      })
     arrbtn2.forEach(function(value,i){
         if(value.className.includes("active")){
             value.classList.remove("active")
         }
     })
      arrbtn[0].classList.add("active")
}
function startSlide(){
    remove=setInterval(function(){
        var index=indexItem+1
        if(index>=items.length){
            index=0
        }
        console.log(index)
        move(index)
    },5000)
}
function reset(){
    clearInterval(remove)
    startSlide()
}
startSlide()
prev.onclick=function(){
    move((indexItem+1)% items.length)
    reset()
}
next.onclick=function(){
    move((indexItem-1+items.length)%items.length)
    reset()
}
buttonn.forEach((item,index)=>{
    item.onclick=function(){
        move(index)
        reset()
    }
})
// Chuyen mau xe
// chuyen theo nut
const style_color=document.querySelectorAll(".style-color div")
const itemsImg=document.querySelectorAll(".style-img-item")
const containerImg=document.querySelector(".style-img")
const banner=document.querySelector(".style-img-box")
const nextImg=document.querySelector(".next1")
const prevImg=document.querySelector(".prev1")
const change_photo=document.querySelector(".style-img-item img")
var indexItemImg=0;
const arrImg=[
    "./assets/imgs/red-removebg-preview.png",
    "./assets/imgs/white-removebg-preview.png",
    "./assets/imgs/blue-removebg-preview.png",
    "./assets/imgs/black-removebg-preview (2).png"
]
const indexWidthImg=itemsImg[0].offsetWidth;
const moveImg=(value,index)=>{
    //  containerImg.style.transform=`translateX(-${index*indexWidthImg}px)`
    change_photo.setAttribute("src",value)
    change_photo.classList.add("animion")
    setTimeout(function(){
       change_photo.classList.remove("animion")
    },500)
     indexItemImg=index
}
prevImg.onclick=function(){
    var item =(indexItemImg+1) %arrImg.length;
    console.log(item)
    const arrPrev=arrImg.filter(function(value,index){
           return item==index
    })
     moveImg(arrPrev[0],item)
    // moveImg((indexItemImg+1)% itemsImg.length)
}
nextImg.onclick=function(){
  
    var item= (indexItemImg-1+arrImg.length)%arrImg.length;
    const arrPrev=arrImg.filter(function(value,index){
        return item==index
 })
      moveImg(arrPrev[0],item)
      
}
const moveImg2=(index)=>{
    containerImg.style.transform=`translateX(-${index*indexWidthImg}px)`
    indexItemImg=index
}
style_color.forEach(function(value,index){
     value.onclick=function(){
        clearInterval(remo)
        moveImg(value.getAttribute("data-img"),index)
     }
})
const remo=setInterval(function(){
     let item=(indexItemImg+1) %arrImg.length;
     const arrPrev=arrImg.filter(function(value,index){
        return item==index
 })
  moveImg(arrPrev[0],item)
},5000)
// model
const telephone=document.querySelector(".telephone")
const model=document.querySelector(".modelone")
const close=document.querySelector(".close")
telephone.onclick=function(){
    console.log("1")
    model.classList.add("active")
}
close.onclick=function(){
    model.classList.remove("active")
}
model.onclick=function(e){
  if(e.target===model){
    model.classList.remove("active")
  }
}
// quiz
const title_parameter=document.querySelectorAll(".parameter-quiz")
const parameter_item=document.querySelectorAll(".parameter-item-box")
const title_add=document.querySelectorAll(".title-add")
// title_parameter.forEach(function(item){
//      item.onclick=function(){
//         console.log(1)
//      }
// })
title_parameter.forEach(function(item,index){
   var arr=[]
   var arrr=[]
   item.onclick=function(){
     arr=[...parameter_item].filter(function(number,i){
        return i!==index
    })
    arrr=[...title_add].filter(function(number,key){
        return key!==index
    })
    console.log(arr)
    arr.forEach(function(value){
        if(value.className.includes("active")){
               value.classList.remove("active")
        }          
  })
  arrr.forEach(function(value,index){
        if(value.className=="fa-solid fa-chevron-down title-add"){
            value.className="fa-solid fa-angle-right title-add"
        }
   })
     if(item.lastElementChild.className.includes("active")){
        item.lastElementChild.classList.remove("active")
        title_add[index].className="fa-solid fa-angle-right title-add"
     }else{
        item.lastElementChild.classList.add("active")
        title_add[index].className="fa-solid fa-chevron-down title-add"
     }
   }
})
// title_add.forEach(function(item,index){
//     var arrr=[]
//     var arActive=[]
//     item.onclick=function(){
//       arrr=[...title_add].filter(function(number,key){
//          return key!==index
//      })
//      arActive=[...parameter_item].filter(function(valueItem,indexItem){
//         return indexItem!==index
//     })
//      arActive.forEach(function(value,i){
//          if(value.className.includes("active")){
//                 value.classList.remove("active")
//          }          
//    })
//    console.log(arrr)
//    arrr.forEach(function(value,index){
//     console.log(value)
//         if(value.className=="fa-solid fa-minus title-add"){
//             value.className="fa-solid fa-plus title-add"
//         }
//    })
//       if(parameter_item[index].className.includes("active")){
//         parameter_item[index].classList.remove("active")
//          title_add[index].className="fa-solid fa-plus title-add"
//       }else{
//         parameter_item[index].classList.add("active")
//          title_add[index].className="fa-solid fa-minus title-add"
//       }

//     }
//  })
// đăng kí lái thử
var login=document.querySelector(".header_icon ")
console.log(login)
login.onclick=function(){
    model.classList.add("active")
}
//trải nghiệm đẳng cấp
// var login=document.querySelector(".banner_qc-text5")
// console.log(login)
// login.onclick=function(){
//     model.classList.add("active")
// }
//trải nghiệm đẳng cấp
var login=document.querySelectorAll(".button2")
console.log(login)

login.forEach(
    login.onclick=function(value,index){
        value.onclick=function(){
            model.classList.add("active")
        }
    }
)
//trải nghiệm đẳng cấp
// var login=document.querySelector(".button")
// console.log(login)
// login.onclick=function(){
//     model.classList.add("active")
// }
// anh chay vao
var table_img=document.querySelector(".baner_car")
console.log(table_img)
window.addEventListener('scroll', function() {
    var currentScrollPosition = window.pageYOffset;
   if(currentScrollPosition>=300){
    console.log("yes")
        // transform: translateX(500px);
       table_img.classList.add("active")
   }
  });
/* click img hien imgfull*/ 
const model2=document.querySelector(".modeltwo")
const modelfullimg=document.querySelector(".modelfull img")
const close2=document.querySelector(".closetwo")
var clickimg=document.querySelectorAll(".click")
console.log(clickimg)

close2.onclick=function(){
    model2.classList.remove("active")
}

clickimg.forEach(function(value,item){
    value.onclick=function(){
        let img=value.getAttribute("src")
        console.log(img)
        modelfullimg.setAttribute("src",img)
        model2.classList.add("active")
    }
});
model2.onclick=function(e){
    if(e.target!=modelfullimg){
      model2.classList.remove("active")
    }
  }
const img_right=document.querySelector(".img-right")
window.addEventListener('scroll', function() {
    var currentScrollPosition2 = window.pageYOffset;
   if(currentScrollPosition2>=1400){
        // transform: translateX(500px);
       img_right.classList.add("active")
   }
  });