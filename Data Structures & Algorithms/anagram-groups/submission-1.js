class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const output = {};
        strs.forEach(word => {
            let key = word.split('').sort().join('');
            if(!output[key]){
                output[key] = [];
            }
            output[key].push(word);
        })
        return Object.values(output);
    }
}
