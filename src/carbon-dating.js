const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string" || isNaN( String.fromCharCode(sampleActivity.keyCode))) {
    return false;
  }
};
