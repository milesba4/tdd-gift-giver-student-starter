
class GiftExchange{

    static async pairs(names){
     if(names.length % 2 !=0){
    
     }
        
    const tuples = []
   
    while(names.length>0){
        const pair = []
        while(pair.length < 2 && names.length!=0){
            const generatedIndex = Math.floor(Math.random() * names.length)
            const name = names[generatedIndex]
            pair.push(name)
            }

        tuples.push(pair)
        
    }
    console.log("tuples1",tuples)
    return tuples
    
}

}



module.exports = GiftExchange