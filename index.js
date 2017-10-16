let katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine[katzDeliLine.length] = name
  return `${name} you are No.${katzDeliLine.length}`
}

function nowServing() {
  if (katzDeli[0]) {
    return katzDeli.unshift();
  } else {
    return "There is nobody wating to be served!"
  }
}

function currentLine() {
  if (katzDeli[0]) {
    let temp = "";
    for (var i = 0; i < katzDeli.length; i++) {
      temp = temp + i + ". " + katzDeli[i] + ", ";
    }
    return "The line is currently: " + temp;
  } else {
    return "The line is currently empty."
  }
}
