var asyncAdd = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number'){
                resolve(a + b);
            } else{
                reject('must be numbers')
            }
        }, 3000);
    });
};

asyncAdd(6,7).then((res) => {
console.log('Result:', res);    
return asyncAdd(res, 88);
}).then((res) => {
    console.log('RESULT IS ', res)
}).catch((errorMessage) => {
    console.log(errorMessage)
});















var somePromise = new Promise((resolve, reject)=>{
   setTimeout(() => {
    //resolve('IT WORKED');
    reject('UNABLE TO WORK')
   }, 3000); 
});

somePromise.then((message) => {
    console.log('succEss', message)
},(errorMessage)=>{
    console.log('FAILURE', errorMessage    )
});