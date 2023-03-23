console.log('Person1: Show Ticket');
console.log('Person2: Show Ticket');

const preMovie = async() =>{
    const promiseWifeBringTickets= new Promise((resolve, reject)=>{
        resolve('ticket')
    },3000)

    const getPopcorn = new Promise((resolve, reject)=> resolve('popcorn'))
    const getButter = new Promise((resolve, reject)=> resolve('butter'))
    const getColdDrinks = new Promise((resolve, reject)=> resolve('coldDrinks'))
    let ticket = await promiseWifeBringTickets;

    console.log(`Wife: I have the ${ticket}`);
    console.log('Husband: We should go in.');
    console.log('Wife: No, I am hungry');

    let popcorn= await getPopcorn;

    console.log(`Husband: I got some ${popcorn}`);
    console.log('Husband: we should go in.');
    console.log('Wife: No, I need butter on my popcorn');

    let butter = await getButter;

    console.log(`Husband: I got some ${butter} on popcorn`);
    console.log('Husband: we should go in.');
    console.log('Wife: No, I need cold drinks');

    let coldDrinks= await getColdDrinks;

    console.log(`Husband: I got some ${coldDrinks}`);
    console.log('Husband: we should go in.');
    console.log('Wife: Lets go.');

    return ticket;
}

preMovie().then((m)=> console.log(m))
