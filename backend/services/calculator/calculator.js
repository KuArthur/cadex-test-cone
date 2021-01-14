function calcCoordinates(R,N,H) {
    let arr = []
    for(let i = 0; i < N; i++) {
      arr.push( R * Math.cos(2 * Math.PI * i / N),
                R * Math.sin(2 * Math.PI* i / N),
                H
      );
    }
  
    return arr;
}

module.exports = calcCoordinates;