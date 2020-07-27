
function changePicture(picture){
    document.getElementById('glass').src = picture;

}

/*about*/
function calc_total(){
    const qtd = Number(document.getElementById('tNumber').value)
    let tot = qtd * 1500;
    document.getElementById('txtTotalPrice').value = tot;
} 
/*about*/