function calcCoordinates(R,N,H) {
  let arr = []
  for(let i = 0; i <= N; i++) {
    arr.push( Math.floor((R * Math.cos(2 * Math.PI * i / N)) * 1000) / 1000,
              Math.floor((R * Math.sin(2 * Math.PI* i / N) * 1000))/1000,
              H
    );
  }

  return arr;
}

module.exports = calcCoordinates;