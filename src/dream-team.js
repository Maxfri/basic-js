module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  let array = members.filter(function (element) {
    return typeof element === "string";
  });

  return array
    .map(function (item) {
      if (typeof item === "string" || item instanceof String) {
        let itemArray = item.split(" ").join("").toUpperCase();
        return itemArray[0];
      }
    })
    .sort()
    .join("");
};
