process.nextTick(()=>{
  console.log(1)
})

console.log(22)



setImmediate(()=>{
  console.log("time 211")
})