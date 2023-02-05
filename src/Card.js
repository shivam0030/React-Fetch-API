 const d =[2,3,4,5,6]
 function getDatas(){
    setTimeout(()=>{
        let output = ""
        d.forEach((data)=>{
            output+=`<li>${data}</li>`

        })
        document.body.innerHTML=output
    },1000)
 }
 function createdata(newd){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            d.push(newd)
            let error = false;
            if(!error){
                resolve()
            }else{
                reject("kuch to gadbad hai...")
            }
        },1000)

    })
 }
 async function start(){
    await createdata(8)
    getDatas()
}
start()