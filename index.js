let katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine[katzDeliLine.length] = name
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing() {
  if (katzDeli[0]) {
    return katzDeli.unshift();
  } else {
    return "There is nobody waiting to be served!"
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
