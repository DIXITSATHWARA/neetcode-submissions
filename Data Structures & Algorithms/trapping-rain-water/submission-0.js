class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        
        if(!height || height.length == 0) return 0;

        let left = 0
        let right = height.length -1

        let maxleft = 0
        let maxright = 0

        let totalwater =  0

        while(left < right){
            if(height[left] < height[right]){
                if(maxleft < height[left]){
                    maxleft = height[left]
                }else{
                    totalwater += maxleft - height[left]
                }

                left++
            }else{
                if(height[right] > maxright){
                    maxright = height[right]
                }else{
                    totalwater += maxright - height[right]
                }
                right--
            }
        }

        return totalwater;
    }
}
