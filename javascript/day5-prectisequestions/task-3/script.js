let n1 = 0;
function bilcal(un){
    let uni = un
    let biilprie =0 ;
    if(uni > 50){
        if(uni > 150){
            if(uni > 250){
                uni = uni - 250;
                
                biilprie += 50 * 0.50;
                biilprie += 100 * 0.75;
                biilprie += 100 * 1.20;
                biilprie += uni * 1.50;
            }
            else{
                uni = uni -150;
                
                biilprie += 50 * 0.50;
                biilprie += 100 * 0.75;
                biilprie += uni * 1.20;
                
            }

        }
        else{
            let b10 = uni -50;
            biilprie += 50 * 0.50;
            biilprie += b10 * 0.75
        }
    }
    else
    {
        biilprie += uni*0.50;
    }
    if(biilprie > 0){
        biilprie += biilprie * 0.2;
    }
    return biilprie;
}

function main(){
    let uni = document.getElementById('bill').value;
    let pr = bilcal(uni);
    console.log(pr);
    document.getElementById("ans").innerHTML = pr;
}