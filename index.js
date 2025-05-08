const custom = document.getElementById("custom");

let mainWrapper = document.querySelector(".mainWrapper");


let right = document.getElementById("right");
let bottom = document.getElementById("bottom");
let left = document.getElementById("left");
let tp = document.getElementById("top");

let bdr = document.getElementById("bdr");

function updateBorderRadius() {
  custom.style.borderRadius = `${tp.value}% ${100 - tp.value}% ${100 - bottom.value}% ${bottom.value}% / ${left.value}% ${right.value}% ${100 - right.value}% ${100 - left.value}%`;
  bdr.value = `${tp.value}% ${100 - tp.value}% ${100 - bottom.value}% ${bottom.value}% / ${left.value}% ${right.value}% ${100 - right.value}% ${100 - left.value}%`;
}




//animation for borderRadius
let aa, bb, cc, dd;

function animateRandomRadius() {
  aa = Math.floor(Math.random() * 100);
  bb = Math.floor(Math.random() * 100);
  cc = Math.floor(Math.random() * 100);
  dd = Math.floor(Math.random() * 100);
  
  return `${aa}% ${100 - aa}% ${bb}% ${100 - bb}% / ${cc}% ${dd}% ${100 - dd}% ${100 - cc}%`;
}


const animate = document.querySelector(".animate");
setInterval(() => {
  let r = animateRandomRadius();
  animate.style.borderRadius = r;
  animate.addEventListener("click", () => {
    tp.value = aa;
    bottom.value = 100 - bb;
    right.value = dd;
    left.value = cc;
    bdr.value = r;
    custom.style.borderRadius = r;
  })
}, 2300)


//cs
let container = document.querySelector(".container");
if (window.innerWidth > 700 && window.innerWidth < 1400) {
  container.style.transform = "scale(3)";
} else if (window.innerWidth > 1400 && window.innerWidth < 1900) {
  container.style.transform = "scale(4)";
}






let cs = document.querySelector(".check");
let customSize = document.querySelector(".customSize");
cs.addEventListener("input", () => {
  let WH;
  if (cs.checked) {
    if (!document.getElementById("frameWH")) {
      WH = document.createElement("div");
      WH.id = "frameWH";
      
      //inserted element
      let header = document.createElement("p");
      header.classList.add("header");
      header.innerHTML = "WH Size";
      
      let width = document.createElement("div");
      width.classList.add("widthDiv");
      let spanW = document.createElement("span");
      spanW.innerHTML = "Width";
      let inputW = document.createElement("input");
      inputW.type = "number";
      inputW.value = 1.0;
      inputW.addEventListener("input", () => {
        container.style.transform = `scaleX(${inputW.value}) scaleY(${inputH.value})`;
        allCtr.style.transform = `scaleX(${inputW.value}) scaleY(${inputH.value})`;
      });
      
      
      if (window.innerWidth > 700 && window.innerWidth < 1400) {
        inputW.value = 3;
      } else if (window.innerWidth > 1400 && window.innerWidth < 1900) {
        inputW.value = 4;
      }
      
      width.appendChild(spanW);
      width.appendChild(inputW);
      
      let height = document.createElement("div");
      height.classList.add("heightDiv");
      
      let spanH = document.createElement("span");
      spanH.innerHTML = "Height";
      let inputH = document.createElement("input");
      inputH.type = "number";
      inputH.min = 1;
      inputH.step = 0.1;
      inputH.max = 5;
      inputH.maxLength = 5;
      inputH.value = 1.0;
      inputH.addEventListener("input", () => {
        container.style.transform = `scaleX(${inputW.value}) scaleY(${inputH.value})`;
        allCtr.style.transform = `scaleX(${inputW.value}) scaleY(${inputH.value})`;
      });
      
      if (window.innerWidth > 700 && window.innerWidth < 1400) {
        inputH.value = 3;
      } else if (window.innerWidth > 1400 && window.innerWidth < 1900) {
        inputH.value = 4;
      }
      
      
      height.appendChild(spanH);
      height.appendChild(inputH);
      
      
      
      WH.appendChild(height);
      WH.appendChild(width);
      WH.appendChild(header);
      customSize.appendChild(WH);
    }
  } else if (!cs.checked) {
    if (document.getElementById("frameWH")) {
      document.getElementById("frameWH").remove();
    }
  }
})








let allCtr = document.querySelector(".allCtr");

if (window.innerWidth > 700 && window.innerWidth < 1400) {
  allCtr.style.transform = "scale(3)";
} else if (window.innerWidth > 1400 && window.innerWidth < 1900) {
  allCtr.style.transform = "scale(4)";
}



let edge = document.getElementById("edge");

let a = document.getElementById("a");
let b = document.getElementById("b");
let c = document.getElementById("c");
let d = document.getElementById("d");
let e = document.getElementById("e");
let f = document.getElementById("f");
let g = document.getElementById("g");
let h = document.getElementById("h");


function fullCTR() {
  edge.style.borderRadius = `${a.value}% ${b.value}% ${d.value}% ${c.value}% / ${e.value}% ${g.value}% ${h.value}% ${f.value}%`;
  bdr.value = `${a.value}% ${b.value}% ${d.value}% ${c.value}% / ${e.value}% ${g.value}% ${h.value}% ${f.value}%`;
}








document.addEventListener("DOMContentLoaded", () => {
  updateBorderRadius();
  [tp, bottom, right, left].forEach(input => {
    input.addEventListener("input", updateBorderRadius)
  })
  
  
  fullCTR();
  if (a && b && c && d && e && f && g && h) {
    [a, b, c, d, e, f, g, h].forEach(inp => {
      inp.addEventListener("input", fullCTR);
    });
  }
  
  
  
  
  bdr.onfocus = () => {
    navigator.clipboard.writeText(`border-radius: ${bdr.value};`)
      .then(() => {
        let cp = document.createElement("div");
        cp.id = "copy";
        cp.innerHTML =
          "Successfully Copied!👍";
      document.body.appendChild(cp);
        navigator.vibrate(100);
        setTimeout(() => {
          cp.remove();
        }, 2000);
      })
      .catch(() => alert('Failed to copy!'));
  };
})



// more controls to its radius

let ctrM = document.getElementById("ctrM");
allCtr.style.display = "none";
ctrM.addEventListener("click", () => {
  if (container.style.display === "none" && animate.style.display === "none") {
    container.style.display = "flex";
    animate.style.display = "block";
    ctrM.innerHTML = `<span class="material-symbols-outlined">switch_access</span>`;
    allCtr.style.display = "none";
  } else {
    container.style.display = "none";
    animate.style.display = "none";
    ctrM.innerHTML = `<span class="material-symbols-outlined">switch_access_3</span>`;
    allCtr.style.display = "flex";
    bdr.value = `50% 50% 50% 50% / 50% 50% 50% 50%`;
  }
})


// about me

let ident = document.getElementById("identity");

ident.addEventListener("click", () => {
  ident.style.color = "blue";
  
  if(!document.getElementById("one")){
  let infoPage = document.createElement("div");
  infoPage.classList.add("info");
  infoPage.id = "one";
  
  document.querySelector(".links").appendChild(infoPage);
  let close = document.createElement("div");
  let imageArea = document.createElement("div");
  let contentBIO = document.createElement("div");
  let cent = document.createElement("div");
  cent.classList.add("cent");
  close.innerHTML = `<span class="material-symbols-outlined">close</span>`;
  imageArea.innerHTML = `<img src="youself.png" alt="my_pic"/>`;
  contentBIO.innerHTML = `<address style="font-family: 'cursive'">
  <strong>Name: </strong> CodPro Sui (°_*)<br>
  <strong>Skills: </strong> $HFL Programming language (:CS
</address>`;
  close.classList.add("close");
  imageArea.classList.add("image");
  contentBIO.classList.add("bio");
  infoPage.appendChild(close);
  cent.appendChild(imageArea);
  cent.appendChild(contentBIO);
  infoPage.appendChild(cent);
  close.addEventListener("click", () => {
    infoPage.remove();
  })
  }
});