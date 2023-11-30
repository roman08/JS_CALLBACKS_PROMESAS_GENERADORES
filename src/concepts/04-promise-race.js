/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseRaceComponent = (element) => {
    console.log('promiseRaceComponent');
    element.innerHTML = 'Loading...';
    const renderValie = ( value) => {
        element.innerHTML = value;
    }


    Promise.race([ 
        slowPromise(), 
        mediumPromise(), 
        fastPromise()
    ]).then( renderValie);
}





const slowPromise = () =>  new Promise ( resolve => {
    setTimeout( () => {
        resolve("slow");
    }, 2000)
})

const mediumPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve("medium");
    }, 1500)
})

const fastPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve("fast");
    }, 1000)
})