class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        if(nums.length == 0){
            return 0;
        }
        if(nums.length == 1){
            return 1;
        }
        let sortedArr = nums.sort((a,b) => a - b);

        let cs = 1;
        let csA = [];
        for(let i=0; i<(sortedArr.length-1); i++){

            if((sortedArr[i+1] - sortedArr[i]) == 0){
                if(i == (sortedArr.length-2)){
                    csA.push(cs);  
                }
            }else if((sortedArr[i+1] - sortedArr[i]) == 1){
            cs+=1;
            if(i == (sortedArr.length-2)){
                csA.push(cs);  
            }
            }else{
            csA.push(cs);
            cs=1;
            }
        }
        const max = csA.sort((a,b)=>b-a);
        return max[0];
    }
}
