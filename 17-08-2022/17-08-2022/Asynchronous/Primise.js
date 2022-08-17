console.log('Promise');
function func1(){
      return new Promise(function(reslove,reject){
        setTimeout(() => {
          const error = true;
          if(!error){
            console.log('Function:your promise has been resolved');
            reslove();
          } else {
            console.log('Function:your promise has not been resolved');
            reject('sorry not fulfilled')
          }
        }, 2000);
      })
    
}

func1().then(function(){
  console.log('hiren: thanks for resolved');
}).catch(function(error){
  console.log('very bad bro ' + error);
})