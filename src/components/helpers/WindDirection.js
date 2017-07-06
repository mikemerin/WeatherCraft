export function WindDirection(n) {
    var number = Math.floor((n / 22.5) + 0.5);
    var array = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return array[(number % 16)];
}
