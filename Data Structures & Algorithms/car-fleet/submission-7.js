class Solution {

    /**
     * Approach: linear Equation and stack
     *  - As as per question fleet is formed based on the car ahead of it.
     *  - We sort the pair of pos & speed as per thier position in descreasing order
     *  - we cal. each car's time of arrival and push that in stack
     *  - if there is already time of arrival for car ahead of it and our curr. pushed arrival is less than that means there will be intersection in b/w.
     *  - We pop the pushed element as it will from a single fleet with car ahead of it.
     *  - So in end total ele. in stack is total fleets formed.
     * 
     * T.C=> O(NLog(N)) overall due to sorting
     * S.C=> O(N) (In case all cars forming a fleet indivisually)
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleetWithStack(target, position, speed) {
        const pairs = position.map((pos,i)=>[pos,speed[i]])
        const desSortPairs = pairs.sort((a,b)=>b[0]-a[0]);

        let stack = [];
        for(let [pos,speed] of desSortPairs){
            let timeOfArrival = (target-pos)/speed;
            stack.push(timeOfArrival)
            if(stack.length>=2 && stack[stack.length-1]<=stack[stack.length-2]){
            stack.pop()
            }
        }
        return stack.length;
    }

     /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleetIteratively(target, position, speed) {
          const pairs = position.map((pos,i)=>[pos,speed[i]])
        const desSortPairs = pairs.sort((a,b)=>b[0]-a[0]);

        let prevFleetTime = (target-pairs[0][0])/pairs[0][1]
        let totalFleet = 1;

        for(let i=1;i<desSortPairs.length;i++){
            let currTime = (target-pairs[i][0])/pairs[i][1];

            if(currTime>prevFleetTime){
                totalFleet++;
                prevFleetTime = (target-pairs[i][0])/pairs[i][1];
            }
        }

        return totalFleet;

    }
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        // return this.carFleetWithStack(target,position,speed)
        return this.carFleetIteratively(target,position,speed);
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
        let fleet = 1;
        let maxTime = times[0];
console.log(times)
        for(let i=1;i<times.length;i++){
            if(times[i]>maxTime){
                fleet++;
                maxTime = times[i]
            }
          
        }
        return fleet;

         let stack=[];

        //  for(let time of times){
        //     // console.log("Stack",stack,"time",time)
        //     if(!stack.length)stack.push(time);

        //     if(stack[stack.length-1]<time){
        //         // console.log("Push",time)
        //         stack.push(time)
        //     }
           
            
        //  }
// console.log("res",stack)
         return stack.length;
    }
}
