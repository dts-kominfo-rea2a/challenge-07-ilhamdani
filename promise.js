const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emotion) => {
  let theaterIXX = await promiseTheaterIXX()
  let theaterVGC = await promiseTheaterVGC()
  let total = 0

  let datas = [theaterIXX, theaterVGC]
  datas.map(values => {
    values.map(value => {
      if(value.hasil === emotion) total +=1
    })
  })

  return total
};

module.exports = {
  promiseOutput,
};
