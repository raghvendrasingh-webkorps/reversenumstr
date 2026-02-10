function reversenumstr(value) {
  if (typeof value === "number") {
    const sign = Math.sign(value);
    const reversed = parseInt(
      Math.abs(value).toString().split("").reverse().join("")
    );
    return sign * reversed;
  }

  if (typeof value === "string") {
    return value.split("").reverse().join("");
  }

  throw new TypeError("Only string or number is allowed");
}

export default reversenumstr;

