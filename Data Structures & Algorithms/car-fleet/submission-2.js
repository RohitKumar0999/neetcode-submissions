class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let pair = [];
        for(let i=0;i<position.length;i++){
            pair[i]=[position[i],speed[i]]
        }

        // sort array
        pair.sort((a,b)=>b[0]-a[0])
        // console.log("sroted pair",pair)
         const times= [];
         for(let i=0;i<pair.length;i++){
            const totalTime = (target-pair[i][0])/pair[i][1];
            times.push(totalTime);
            // console.log("Each time",times)
         }
        //  console.log("TImes",times)

         let stack=[];

         for(let time of times){
            // console.log("Stack",stack,"time",time)
            if(!stack.length)stack.push(time);

            if(stack[stack.length-1]<time){
                // console.log("Push",time)
                stack.push(time)
            }
           
            
         }
// console.log("res",stack)
         return stack.length;
    }
}
