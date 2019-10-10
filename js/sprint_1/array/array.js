const button = document.querySelector('button');

// let array = [
//                 1, 
//                 "string", 
//                 0.4, 
//                 'c', 
//                 { nome: 'teste'}, 
//                 [1,2,3],
//                 button
//             ];


// console.log("Todos os valores: ",array);
// console.log("Valor especifico",array[7]);
// console.log("Valor especifico",array[1][0]);

// for(let i = 0; i < array.length; i++){
//     console.log(array[i]);
// }

// let i = 8;

// while(i < array.length){
//     console.log("while", array[i]);
//     i++; 
// }

// do{
//     console.log("do while", array[i]);
//     i++; 
// }while(i < array.length)

// let array = ["Evento H", "Evento A", "Evento F", "Evento K"]

// console.log("Todos os valores: ",array);

// array[25] = "Evento 5";
// array.pop();

// console.log("Todos os valores: ",array);

//ultimo lugar
// array.push("Evento 4");

//primeiro lugar
// array.unshift("Evento 4");

  

    // console.log("Todos os valores: ",array);

    // console.log(array.sort());
    // console.log(array.join(" "));
    // console.log(array.sort().reverse());

    // array.forEach(function(element , index, array){
    //     console.log(element, index, array);
    // });
    let array = [ 1, 2, 3, 4];

    // let array_novo = array.map(function(element, index, array){
    //     return element * 2;
    // })

    // let array_novo = array.filter(function(element){
    //     return element % 2 == 0
    // })

    let array_novo = array.reduce(function(acumulador, element){
        return acumulador + element;
    })

    console.log(array, array_novo)