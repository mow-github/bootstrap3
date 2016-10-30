/*
Author: Mats Wikmar
Github: mow-github
Email: matwik@gmail.com
Date: 2016-10-29
*/

window.onload = function(){

  let navUl = document.getElementsByClassName("nav masthead-nav")[0];
  let li = navUl.children;

  for(let i = 0; i < li.length; i++){
    i === 0 ? li[i].addEventListener("click",hamClicked, false) : li[i].addEventListener("click",navLiClicked, false);
  }

  /*change li className based on the click event*/
  function navLiClicked(event){
    event.preventDefault();
    loopLiAndApplyClassNames("remove");
    this.className === "" ? this.className = "active" : this.className = "";
  }

  function hamClicked(event){
    event.preventDefault();
    loopLiAndApplyClassNames();
  }

  function loopLiAndApplyClassNames(para1){
    for(let i = 1; i < li.length; i++){
      para1 ? li[i].className = "" : li[i].className === "" || li[i].className === "active" ? li[i].className = "hidden-xs" : li[i].className = "";
    }
  }

}

