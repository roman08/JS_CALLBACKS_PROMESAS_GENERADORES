/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatoFunctionsComponent = (element) => {
    const myGenerator = myFirstGeneratorFunction();

    const id = idGenerator();


    const button = document.createElement('button');
    button.innerHTML = 'Generate';
    element.append(button);

    const renderButton = () => {
        const  { value } = id.next();

        button.innerText = `Click ${ value }`;
    }
  
    button.addEventListener('click', renderButton)
}


function* idGenerator() {
    let currentId = 0;

    while(true) {
        yield ++currentId;
    }
}

function* myFirstGeneratorFunction () {

    yield 'Mi primer valor';
    yield 'Mi segundo valor';
    yield 'Mi tercer valor';
    yield 'Mi cuarto valor'; 
    return 'No hay valor';
}