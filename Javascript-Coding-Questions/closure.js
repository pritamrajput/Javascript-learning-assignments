function x(){
    const i =1;
    for(var r = 1;i<=5;r++){
        setTimeout(function(){
            console.log(r);
        },r*1000);
    }
}
x();