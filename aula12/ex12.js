var idade = 12

if (idade < 16){
    console.log(`Você tem ${idade} anos, então não vota!`)
}else if (idade<18 || idade > 65){
       console.log(`Você tem ${idade} anos, então o voto é opcional!`)
}else{
       console.log(`Você tem ${idade} anos, voto Obrigatorio!`)
}
