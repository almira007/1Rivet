console.log('Async Await');

 async function hiren (){
   console.log('Inside function calling');
   const response = await fetch('https://api.github.com/users');
   console.log('before response');
   const users = await response.json();
   console.log('user resolved');
   return users
  // return 'hiren'
}
console.log('after calling');
let a= hiren();
console.log('before calling');
console.log('a==>',a);
a.then(data=>console.log('data===>',data))
console.log('last calling');

