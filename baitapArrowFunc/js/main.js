const colorList = [
  "pallet",
  "viridian",
  "pewter",
  "cerulean",
  "vermilion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cinnabar",
];
// render color list
const pushColor = () => {
  const list = colorList.reduce((result, color, index) => {
    if (index == 0) {
      return (result += `
      
                  <button class="color-button ${color} " onclick="changeColor('${color}')"></button>
              `);
    } else {
      return (result += `
                  <button class="color-button ${color} "  onclick="changeColor('${color}')"></button>
              `);
    }
  }, "");
  document.getElementById("colorContainer").innerHTML = list;
};

pushColor();

// phuong thuc doi mau
const changeColor = (color) => {
  document.getElementById("house").className = "house " + color;
};
