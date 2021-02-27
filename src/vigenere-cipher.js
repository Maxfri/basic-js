class VigenereCipheringMachine {
  constructor(direction = true) {
    this.direction = direction;
  }

  encrypt(message, key) {
    if (typeof message === "undefined" || typeof key === "undefined") {
      throw new Error("Error");
    }

    let cipher = "";
    let count = 0;
    message = message.toUpperCase();
    key = key.toUpperCase();
    for (let i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        cipher += String.fromCharCode(
          ((message.charCodeAt(i) + key.charCodeAt(count % key.length) - 130) %
            26) +
            65
        );
        count++;
      } else cipher += message[i];
    }

    if (this.direction) {
      return cipher;
    } else {
      return cipher.split("").reverse().join("");
    }
  }
  decrypt(message, key) {
    if (typeof message === "undefined" || typeof key === "undefined") {
      throw new Error("Error");
    }

    let cipher = "";
    let count = 0;
    message = message.toUpperCase();
    key = key.toUpperCase();
    for (let i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        cipher += String.fromCharCode(
          ((message.charCodeAt(i) + 26 - key.charCodeAt(count % key.length)) %
            26) +
            65
        );
        count++;
      } else cipher += message[i];
    }

    if (this.direction) {
      return cipher;
    } else {
      return cipher.split("").reverse().join("");
    }
  }
}

module.exports = VigenereCipheringMachine;
