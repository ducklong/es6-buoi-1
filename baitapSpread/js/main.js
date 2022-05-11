const createText = (text) => {
  const splitText = [...text];
  console.log(splitText);
  return splitText.reduce((result, span) => {
    return (result += `
              <span>${span}</span>
          `);
  }, "");
};

const jumpTest = () => {
  const hoverZone = document.getElementById("hover");
  const text = hoverZone.innerHTML;
  console.log(text);
  const newText = createText(text);
  console.log(`newText:${newText}`);
  hoverZone.innerHTML = newText;
};

jumpTest();
