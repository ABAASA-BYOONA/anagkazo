(function(){
document.querySelectorAll(".pic img").forEach(function(i){
 function bad(){i.parentNode.classList.remove("ok");i.remove()}
 i.addEventListener("error",bad);
 if(i.complete&&i.naturalWidth===0)bad(); else i.addEventListener("load",function(){i.parentNode.classList.add("ok")});
});

var revealItems=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){
  var observer=new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },{threshold:0.12});
  revealItems.forEach(function(item){observer.observe(item)});
} else {
  revealItems.forEach(function(item){item.classList.add('visible');});
}
var c=document.getElementById("copy");
if(c)c.onclick=function(){var o=document.getElementById("copied"),t="3205147041";
 try{navigator.clipboard.writeText(t).then(function(){o.textContent="Account number copied."},function(){o.textContent="Account number: "+t})}catch(e){o.textContent="Account number: "+t}};
var f=document.getElementById("form");
if(f)f.onsubmit=function(e){e.preventDefault();var g=function(x){return document.getElementById(x).value};
 var b="Name: "+g("n")+"\nPhone: "+g("p")+"\nInterest: "+g("t")+"\n\n"+g("m");
 location.href="mailto:anagkazooutreach@gmail.com?subject="+encodeURIComponent("Website inquiry: "+g("t"))+"&body="+encodeURIComponent(b)};
})();
