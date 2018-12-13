var getUser = (id, callback) => {
    var user ={
        id:id,
        name:'vikram'
    };
    setTimeout(() => {
        callback(user);
    }, 3000);
}
// getUser call back is to fetch user from database or web api

getUser(12345,(aaaa)=>{
    console.log(aaaa);
});
// here first argument is id and second argument is function when user data comes back


for(var I=0;I<=5;I++){
    setTimeout(
        function()
            {console.log(I);},100);
        }
    

    for(let I=0;I<=5;I++){
        setTimeout(
            function()
                {console.log(I);},1000);
            }
        