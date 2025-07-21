let ar=[10,20,30,40,10,30]
let newar=[]
for(let i=0;i<ar.length;i++){
    if(newar.includes(ar[i])){
        console.log("duplicate value",ar[i])
    }
    else{
        newar.push(ar[i])
    }
}