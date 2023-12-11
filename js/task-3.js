function getElementWidth(content, padding, border) {
  const borderBox = content + "px" + padding *2 + "px" + border *2 + "px";
  return parseFloat(borderBox);
  
}


console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));
