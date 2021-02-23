
module.exports = class DepthCalculator {
  calculateDepth(arr) {
    return Array.isArray(arr) ? 
    (arr.length === 0 ? 1 : Math.max(...arr.map(nextLevel => this.calculateDepth(nextLevel))) + 1) :
    0;
  }
};