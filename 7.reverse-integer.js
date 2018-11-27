/**
 * @param {number} x
 * @return {number}
 */

var reverse = function(x) {

    if(x >= Math.pow(-2, 31) && x <= Math.pow(2, 31) -1){
      if(x < 0){
        str_x = x.toString()
        update_x = str_x.slice(1)
        let len_x = update_x.length
        let real_x = update_x.slice(Math.floor(len_x/2),Math.floor(len_x/2)+1)
        for (var i = 0;i< Math.floor(len_x/2);i++){
          if (len_x % 2 === 0){
            if (i === 0){
              real_x = ''
              let add_x_left = update_x.slice(Math.floor(len_x/2)+i,Math.floor(len_x/2)+i+1)
              let add_x_right = update_x.slice(Math.floor(len_x/2)-i-1,Math.floor(len_x/2)-i)
              real_x = add_x_left + real_x + add_x_right
            } else {
              add_x_left = update_x.slice(Math.floor(len_x/2)+i,Math.floor(len_x/2)+i+1)
              add_x_right = update_x.slice(Math.floor(len_x/2)-i-1,Math.floor(len_x/2)-i)
              real_x = add_x_left + real_x + add_x_right
            }
          } else {
            let add_x_left = update_x.slice(Math.floor(len_x/2)+i+1,Math.floor(len_x/2)+i+2)
            let add_x_right = update_x.slice(Math.floor(len_x/2)-i-1,Math.floor(len_x/2)-i)
            real_x = add_x_left + real_x + add_x_right
          }
        }
        real_x = '-'+real_x
        real_x = parseInt(real_x,10)
        if(real_x >= Math.pow(-2, 31) && real_x <= Math.pow(2, 31) -1){
          return real_x
        } else {
          return 0
        }
      } else if (x === 0){
        var real_x = x
        return real_x
      } else {
        update_x = x.toString()
        let len_x = update_x.length
        let real_x = update_x.slice(Math.floor(len_x/2),Math.floor(len_x/2)+1)
        for (var i = 0;i< Math.floor(len_x/2);i++){
          if (len_x % 2 === 0){
            if (i === 0){
              real_x = ''
              let add_x_left = update_x.slice(Math.floor(len_x/2)+i,Math.floor(len_x/2)+i+1)
              let add_x_right = update_x.slice(Math.floor(len_x/2)-i-1,Math.floor(len_x/2)-i)
              real_x = add_x_left + real_x + add_x_right
            } else {
              add_x_left = update_x.slice(Math.floor(len_x/2)+i,Math.floor(len_x/2)+i+1)
              add_x_right = update_x.slice(Math.floor(len_x/2)-i-1,Math.floor(len_x/2)-i)
              real_x = add_x_left + real_x + add_x_right
            }
          } else {
            let add_x_left = update_x.slice(Math.floor(len_x/2)+i+1,Math.floor(len_x/2)+i+2)
            let add_x_right = update_x.slice(Math.floor(len_x/2)-i-1,Math.floor(len_x/2)-i)
            real_x = add_x_left + real_x + add_x_right
          }
        }
        real_x = parseInt(real_x,10)
        if(real_x >= Math.pow(-2, 31) && real_x <= Math.pow(2, 31) -1){
          return real_x
        } else {
          return 0
        }
      }
    } else {
      return 0
    }
};

module.exports = reverse
