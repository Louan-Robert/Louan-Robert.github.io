let toast;
const fermer = document.getElementsByClassName("fermer")
//const rideau = document.getElementById('rideau');

/* plus qu'un element de classe 'fermer' après suppression du message 'site en construction'
fermer[0].addEventListener("click", function(){
    console.log("ferme")
    document.getElementById("WIP").style.display = "none";
    rideau.style.display = "none";
})

fermer[1].addEventListener("click", function(){
  console.log("ferme")
  toast.hide()
  rideau.style.display = "none";

})
*/

fermer[0].addEventListener("click", function(){
  console.log("ferme")
  toast.hide()
  rideau.style.display = "none";

})

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    toast = new bootstrap.Toast(toastLiveExample)
    console.log("ui")
    //rideau.style.display = "block"
    toast.show()
  })
}