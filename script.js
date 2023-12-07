function calculo_imc() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        document.getElementById("resultado").innerText = "Por favor, insira valores válidos para peso e altura.";
    } else {
        const imc = peso / (altura * altura);
        console.log(imc);
        document.getElementById("resultado").innerText = `Seu IMC é ${imc.toFixed(2)}`;
    }
}
