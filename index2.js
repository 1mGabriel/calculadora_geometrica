let menu = ''

//funções:
function triangulo(base,altura){
    let area = base * altura / 2
    return area
}
function retangulo(base,altura){
    let area = base * altura
    return area
}
function quadrado(lado){
    let area = lado*2
    return area
}
function trapezio(baseMaior, baseMenor, altura){
    let area = (baseMaior + baseMenor) * altura/2
    return area
}
function circulo(raio){
    let area = 3.14*(raio*raio)
    return area
}
//Menu responsivo:
do{
    menu = prompt(`CALCULADORA GEOMETRICA
    ------------
    1)ÁREA DO TRIÂNGULO:
    2)ÁREA DO RETÂNGULO:
    3)ÁREA DO QUADRADO:
    4)ÁREA DO TRAPÉZIO:
    5)ÁREA DO CÍRCULO:
    0)SAIR`)
//aplicando as opções:
    switch(menu){
        case "1":
            let baseTriangulo = (Number(prompt("INFORME A BASE DO TRRÂNGULO:"))) 
            let alturaTriangulo = (Number(prompt("INFORME A ALTURA DO TRRÂNGULO:"))) 
            alert(`A ÁREA DO TRIÂNGULO É : ${triangulo(baseTriangulo,alturaTriangulo)}`)
            break
        case "2":
             let baseRetangulo = (Number(prompt("INFORME A BASE DO RETÂNGULO:"))) 
             let alturaRetangulo = (Number(prompt("INFORME A ALTURA DO RETÂNGULO:"))) 
             alert(`A ÁREA DO RETÂNGULO É : ${retangulo(baseRetangulo,alturaRetangulo)}`)
            break
        case "3":
            let baseQuadrado = (Number(prompt("INFORME A BASE DO QUADRADO:"))) 
           let  alturaQuadrado = (Number(prompt("INFORME A ALTURA DO QUADRADO:"))) 
            alert(`A ÁREA DO QUADRADO É : ${quadrado(baseQuadrado,alturaQuadrado)}`)
           break
        case "4":
            let baseMaiorTrapezio = (Number(prompt("INFORME A BASE MAIOR DO TRAPÉZIO:"))) 
            let baseMenorTrapezio = (Number(prompt("INFORME A BASE MENOR DO TRAPÉZIO:"))) 
            let alturaTrapezio = (Number(prompt("INFORME A ALTURA DO TRAPÉZIO:"))) 
            alert(`A ÁREA DO TRAPÉZIO É : ${trapezio(baseMaiorTrapezio,baseMenorTrapezio,alturaTrapezio)}`)
           break
        case "5":
            let raioCirculo = (Number(prompt("ISFORME O RAIO DO CÍRCULO:")))
            alert(`A ÁREA DO CÍRCULO É: ${circulo(raioCirculo)}`)
            break
        case "0":
            alert("SAINDO")
            break
        default:
            alert("OPÇÃO INVALIDA")
            break
        }       

    
}while(menu !== "0")