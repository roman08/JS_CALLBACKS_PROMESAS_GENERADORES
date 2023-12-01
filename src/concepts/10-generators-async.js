import { heroes } from "../data/hero";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorAsyncComponent =  async(element) => {

    const heroGenerator = getHeroGenerato();
    let isFinished = false;


    do {

        const { value, done } = await heroGenerator.next();
        isFinished = done;

        if( isFinished ) break;
        element.innerHTML = value;
    } while(  !isFinished )
}


async function* getHeroGenerato() {
    for (const hero of heroes){
        await slepp();
        yield hero.name;
    }
}

const slepp = () => {
    return new Promise (( resolve ) => {
        setTimeout(() => {
            resolve();
        }, 500);
    })
}