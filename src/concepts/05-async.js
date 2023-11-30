import { heroes } from "../data/hero"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncComponent = (element) => {

    const id1 = '5d86371fd55e2e2a30fe1ccbdf';

    console.log(' Inicio de componente');
    const renderHero = 
    findHero(id1)
        .then( name => element.innerHTML = name )
        .catch( error => element.innerHTML = error );
}



/**
 * 
 * @param {String} id 
 * @returns {Promise<String>}
 */
const findHero =  async( id ) => {
    const hero = heroes.find( hero => hero.id === id );
    if( !hero )
        throw `Hero with id ${ id } not found`;
    return hero.name;
}