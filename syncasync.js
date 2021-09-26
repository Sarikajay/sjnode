const { readFileSync,writeFileSync } = require("fs")

   const first = readFileSync('./content/first.txt','utf8')
   const second = readFileSync('./content/sec.txt','utf8')
   
   console.log(first,second)
 
   writeFileSync('./content/result-sync.txt',
   `result : ${first},${second}`,{flag: 'a'}) 


   const{readFile,writeFile} = require('fs')

   readFile('./content/first.txt','utf8',(err,result) =>
   {
       if(err)
       {
           console.log(err)
           return
       }
          const first = result;
          readFile('./content/sec.txt','utf8',(err,result) =>
          {
              if(err)
              {
                  console.log(err)
                  return
              }
              const second = result   
           
       writeFile('./content/resultasync.txt',
       `new :${first},${second}`,(err,result)=>
       {
         if(err)
            {
            console.log(err)
            return
            }
         console.log('done')
        } 
       )
    }
    )
}
)
          
