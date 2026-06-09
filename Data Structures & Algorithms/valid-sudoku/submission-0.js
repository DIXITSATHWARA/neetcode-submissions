class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let i = 0;
        let col = [];
        let group = []; 
        while(i < board.length){
            const subBoard = board[i];
            const chkrArr = subBoard.filter(item => item !== ".");
            const chkVaid = chkrArr.length == new Set(chkrArr).size;
            if(!chkVaid){
                return false;
            }
            let j = 0;
            while(j < subBoard.length){
                if(!col[j]){
                    col[j] = [];
                }
                col[j].push(subBoard[j]);
                j++;
            }
            i++;
        }

        let k = 0;
        while(k < col.length){
            const subBoard = col[k];
            const chkrArr = subBoard.filter(item => item !== ".");
            const chkVaid = chkrArr.length == new Set(chkrArr).size;
            if(!chkVaid){
                return false;
            }
            k++;
        }

        for(let row=0; row < 9; row+=3){
            for(let col=0; col < 9; col+=3){

                const values = [];
                for(let r=row; r<row+3;r++){
                    for(let c=col; c<col+3;c++){
                        if(board[r][c] !== "."){
                            values.push(board[r][c]);
                        }
                    }     
                }

                if(values.length !== new Set(values).size){
                    return false;
                }
            }
        }
        return true;
    }
}
