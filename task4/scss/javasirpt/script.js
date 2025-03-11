let click = 0;
debugger
const tap = document.getElementById("button");
const loc = document.getElementById("counter");

let loci=document.getElementsByClassName("loci")
 for (let i = 0; i < loci.length; i++) {
  loci[i].innerHTML="click me"
}

tap.addEventListener("click", () => {
  if (click < 50) {
    click++;
    loc.innerHTML = click; 
  }

  if (click >= 50) {
    tap.disabled = true; 
    alert("остоновитесь?");
  }
});
