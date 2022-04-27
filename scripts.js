function cambiar_parrafo(){
    document.getElementById("edit-sobremi").style.display="block";
    let texto = document.getElementById("text-sobremi").innerText;
    console.log(texto);
}

function myFunction2(valor){
    document.getElementById("text-sobremi").innerText=valor;
}

/*-- ESTO VA EN EL HTML 

<div class="btn-edit-sobremi">
<div class="btn-edit" onclick="cambiar_parrafo()">
    <a href="#sobremi" class="btn-rigth">
        <i class="fa fa-pen" id="pen"></i>
    </a>    
</div>
<div>
    <input id="edit-sobremi" type="text" oninput="myFunction2(this.value)" style="display:none">
</div>

<script>
    let textarea=document.getElementById("edit-sobremi")
    textarea.addEventListener('keyup', (e) => {
    if (e.key=="Enter"){
    document.getElementById("edit-sobremi").style.display="none"}});
</script>
</div>
*/
