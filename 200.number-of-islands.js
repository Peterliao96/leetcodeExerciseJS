/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let count = 0
  for(var i = 0;i < grid.length;i++){
    for(var j = 0;j < grid[0].length;j++){
      countGrid(grid,i,j)  
    }
  }
};

var countGrid = function(grid,i, j){

}
