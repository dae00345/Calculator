let outputScreen = document.getElementById("outputScreen");
function show(num){
    outputScreen.value += num;
}

function calculator(){
    try{
        outputScreen.value = eval(outputScreen.value);
    }catch(error){
        alert("Periksa kembali inputan anda!");
    }

}
function bersihkan(){
    outputScreen.value = "";
}
function del(){
    outputScreen.value = outputScreen.value.slice(0,-1);
}