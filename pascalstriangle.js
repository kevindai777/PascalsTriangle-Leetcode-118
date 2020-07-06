//Objective is to print all 'k' rows of a pascal triangle.

let k = 4


//O(k^2) solution that uses dynamic programming.

let dp = new Array(k).fill(1)

for (let i = 0; i < k; i++) {
    //Initialize each array
    dp[i] = []
    for (let j = 0; j <= i; j++) {
        //If it's at the edges/diagonal, return 1; else return the upper right + upper left
        dp[i][j] = (i == 0 || j == 0 || i == j) ? 1 : dp[i - 1][j] + dp[i - 1][j - 1]
    }
}

return dp