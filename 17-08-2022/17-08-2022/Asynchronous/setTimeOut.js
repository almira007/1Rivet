console.log('Hello');

setTimeout(() => {
    for(let index=0; index < 40; index++){
        const element =  index;
        console.log("index",+index);
    }
},8000);
console.log("done printing");