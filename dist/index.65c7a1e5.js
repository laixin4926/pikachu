let html = document.querySelector('#demo');
let style = document.querySelector('#style');
let string = `
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  .skin {
    position: relative;
  }
  body {
    background: #ffe600;
    min-height: 100vh;
  }
  .nose {
    height: 0px;
    width: 0px;
    border: 10px solid #000;
    border-color: #000 transparent transparent;
    border-bottom: none;
    position: relative;
    left: 50%;
    top: 140px;
    margin-left: -10px;
    z-index: 2;
  }
  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    33% {
      transform: rotate(5deg);
    }
    66% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  .nose:hover {
    animation: wave 20ms infinite linear;
  }
  .yuan {
    position: absolute;
    height: 6px;
    width: 20px;
    border-radius: 10px 10px 0 0;
    top: -16px;
    left: -10px;
    border: 1px solid #000;
    background: #000;
  }
  .eye {
    height: 64px;
    width: 64px;
    border: 2px solid black;
    position: absolute;
    left: 50%;
    top: 100px;
    background: #2e2e2e;
    margin-left: -32px;
    border-radius: 50%;
  }
  .eye .black {
    content: "";
    display: block;
    border: 2px solid #000;
    width: 24px;
    height: 24px;
    background: #fff;
    border-radius: 50%;
    position: relative;
    left: 10px;
    top: 4px;
  }
  .eye.left {
    transform: translateX(-120px);
  }
  .eye.right {
    transform: translateX(120px);
  }
  .mouth {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 170px;
    margin-left: -100px;
  }
  .mouth .up {
    position: relative;
    top: -10px;
  }
  .mouth .up .lip {
    border: 3px solid black;
    height: 30px;
    width: 100px;
    border-top-color: transparent;
    border-right-color: transparent;
    position: absolute;
    left: 50%;
    z-index: 1;
    background: #ffe600;
  }
  .mouth .up .lip.left {
    border-radius: 0 0 0 50px;
  
    transform: rotate(-20deg);
  
    margin-left: -100px;
  }
  .mouth .up .lip.right {
    border-radius: 0 0 50px 0;
  
    transform: rotate(20deg);
    margin-left: 2px;
  }
  .mouth .up .lip::before {
    content: "";
    display: block;
    width: 7px;
    height: 30px;
    position: absolute;
    bottom: 0;
    background: #ffe600;
  }
  .mouth .up .lip.left::before {
    right: -6px;
  }
  
  .mouth .up .lip.right::before {
    left: -6px;
  }
  .mouth .down {
    height: 150px;
    position: absolute;
    top: 0;
    width: 100%;
    overflow: hidden;
  }
  .mouth .down .yuan1 {
    border: 1px solid black;
    width: 150px;
    height: 1000px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    border-radius: 75px/300px;
    background: #96000a;
    overflow: hidden;
  }
  .mouth .down .yuan1 .yuan2 {
    width: 200px;
    height: 300px;
    background: green;
    position: absolute;
    bottom: -180px;
    left: 50%;
    margin-left: -100px;
    border-radius: 100px;
    background: #ff485f;
  }
  .face {
    position: absolute;
    left: 50%;
    border: 3px solid black;
    width: 75px;
    height: 75px;
    top: 200px;
    margin-left: -44px;
    border-radius: 50%;
    background: #ff0000;
    z-index: 3;
  }
  .face.left {
    transform: translateX(-150px);
  }
  .face.right {
    transform: translateX(150px);
  }
  .eye .black {
    animation: move 1s linear infinite;
  }
  
  @keyframes move {
    30% {
      margin: 0 0 0 0;
    }
    70% {
      margin: 0 0 10px 0;
    }
    75% {
      margin: 0 20px 10px 0;
    }
    80% {
      margin: 0 20px 0 10px;
    }
  
    90% {
      margin: 0 0 0 0;
    }
  }
  

`;
let string2 = "";
let n = 0;
let step = ()=>{
    setTimeout(()=>{
        if (string[n] === "\n") string2 += "<br>";
        else if (string[n] === " ") string2 += "&nbsp;";
        else string2 += string[n];
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        console.log(html.innerHTML);
        window.scrollTo(0, 9999); /*滚动条一直在最底部*/ 
        demo.scrollTo(0, 9999);
        if (n < string.length - 1) {
            //如果n不是最后一个，就继续
            n = n + 1;
            step();
        }
    }, 35);
};
step(); /* 
 style.innerHTML=`
body{
    color:red;
}
` 
 */ 

//# sourceMappingURL=index.65c7a1e5.js.map
