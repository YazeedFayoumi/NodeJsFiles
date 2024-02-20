const express = require('express')

var application= express();

var json = ('json')

application.get('/',function(req,res){
    console.log("start server")
    res.send("server started.")
})

application.get('/fact/:num',function(req,res){
    let x=fact(req.params.num)
    res.json("result is: "+ x)
})

application.get('/multiply/:num',function(req,res){ // dont forget to add params while testing
    let x=multiply(req.params.num)
    res.json("result is: "+ x)
})

application.get('/fib/:num',function(req,res){
    let x=fib(req.params.num)
    res.json("result is: "+ x)
})

application.get('/sumSeq/:num',function(req,res){
    let x=sumSeq(req.params.num)
    res.json("result is: "+ x)
})

application.get('/stringMirror/:string',function(req,res){
    let stringIn = stringMirror(req.params.string)
    res.json("the string is mirrored: "+ stringIn)
})

var server = application.listen(7001, function(){
    var host = server.address().address
    var port = server.address().port
})

function multiply(n){
    n2=n*5
    return n2
}

function fact(n){
    i=1, f=1
    while(i<=n)
    {
    f = f*i 
    i++
    }
    return f
}
 function fib(n){
    
    if(n<2){
        return n
      }else{
        return fib(n-1) + fib(n-2);
      }
 }

 function sumSeq(n){
    let i=1
    let s=0
    while(i<=n)
    {
    s = s+i 
    i++
    }
    return s
 }

 function stringMirror(str) {
    if (str.length % 2 === 0) {
        
        const firstHalf = str.slice(0, str.length / 2);
        const secondHalf = str.slice(str.length / 2);

       
        const reversedSecondHalf = secondHalf.split('').reverse().join('');

        
        return firstHalf === reversedSecondHalf;
    } else {
        
        const middleIndex = Math.floor(str.length / 2);
        const firstHalf = str.slice(0, middleIndex);
        const secondHalf = str.slice(middleIndex + 1);

        
        const reversedSecondHalf = secondHalf.split('').reverse().join('');

        
        return firstHalf === reversedSecondHalf;
    }
}
  
