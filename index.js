let katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine[katzDeliLine.length] = name
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeli) {
  if (katzDeli[0]) {
    return "Currently serving " + katzDeli.shift() + ".";
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeli) {
  if (katzDeli[0]) {
    var temp = "";
    for (let i = 0; i < katzDeli.length; i++) {
      temp = temp + (i + 1) + ". " + katzDeli[i] + ", ";
    }
    return "The line is currently: " + temp;
  } else {
    return "The line is currently empty."
  }
}
