import { heroes } from "../data/hero";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitComponent = async (element) => {
    const id1 = '5d86371f97c29d020f1e1f6d';
    const id2 = '5d86371fd55e2e2a30fe1cc4';

    // const { name: name1 } = await finHero(id1);
    // const { name: name2 } = await finHero(id2);

    try {
        const hero1 = await finHero(id1);
        const hero2 = await finHero(id2);

        element.innerHTML = ` ${hero1.name} / ${hero2.name}`;

    } catch (error) {
        element.innerHTML = error;
    }
}



const finHero = async (id) => {
    const hero = heroes.find(hero => hero.id === id);
    if (!hero)
        throw `Hero not found`;

    return hero;
}