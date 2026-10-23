class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if(s.length == 1) return 1 
        let str = ""
        let maxL = 0
        for(let i=0; i<s.length; i++){
            
            
            if(str.indexOf(s[i]) >= 0){
                if(s[i] == str[str.length-1]){
                    str += s[i]
                    str = str.slice(str.lastIndexOf(s[i]))
                }else{
                    str = str.slice(str.lastIndexOf(s[i])+1)
                    str += s[i]
                }
            }else{
                str += s[i]
                maxL = Math.max(str.length, maxL)
            }
        }
        return maxL
    }
}
