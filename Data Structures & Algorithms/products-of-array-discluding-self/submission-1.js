class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        const result = [];

        for(let i = 0; i < nums.length; i++){

            let mul = 1;

            for(let j = 0; j < nums.length; j++){

                if(i != j){
                    mul *= nums[j];
                }
            }

            result.push(mul);
            
        }

        return result;
    }
}
