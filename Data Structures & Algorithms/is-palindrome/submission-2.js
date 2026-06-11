class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.replace(/[^a-zA-Z0-9]/g, '');

        let s1 = s.toLowerCase();
        let s2 = [...s].reverse().join('').toLowerCase();

        return s1 === s2;
    }
}
