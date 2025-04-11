// Danh sách icon mới
var fontName = "user-tgic";

var prefix = "tgic ";

let abc = "icon-";
// Danh sách icon mới
var newIcons = [
  `${abc}star`,
  `${abc}solid-star`,
  `${abc}cut-tape`,
  `${abc}lkx-reel`,
  `${abc}direction"`,
  `${abc}solid-direction"`,
  `${abc}more-h`,
  `${abc}more-v`,
  `${abc}solid-more-h`,
  `${abc}solid-more-v`,
  `${abc}best-seller`,
  `${abc}solid-best-seller`,
  `${abc}discount`,
  `${abc}solid-discount`,
  `${abc}discount-1`,
  `${abc}solid-discount-1`,
  `${abc}fire`,
  `${abc}solid-fire`,
  `${abc}new`,
  `${abc}solid-new`,
  `${abc}new-1`,
  `${abc}solid-new-1`,
  `${abc}new-2`,
  `${abc}solid-new-2`,
  `${abc}shipping`,
  `${abc}solid-shipping`,
  `${abc}shipping-1`,
  `${abc}solid-shipping-1`,
];

// read iconData
fetch("user/iconData-1.txt")
  .then((response) => response.text())
  .then((data) => {
    // Xử lý dữ liệu từ file iconData.txt
    const iconDataText = data.replace("export default", "");
    const iconData = eval(iconDataText);

    const container = document.getElementById("icon-container");

    iconData.forEach((icon) => {
      const glyphDiv = document.createElement("div");
      glyphDiv.classList.add("glyph", "fs1");

      const iconDiv = document.createElement("div");
      iconDiv.classList.add("clearfix", "bshadow0", "pbs");

      const iconElement = document.createElement("i");
      icon.code.split(" ").forEach((cls) => iconElement.classList.add(cls));
      iconDiv.appendChild(iconElement);

      const spanElement = document.createElement("span");
      spanElement.classList.add("mls");
      spanElement.textContent = icon.code;
      iconDiv.appendChild(spanElement);

      glyphDiv.appendChild(iconDiv);

      const fieldset = document.createElement("fieldset");
      fieldset.classList.add("fs0", "size1of1", "clearfix", "hidden-false");

      const input = document.createElement("input");
      input.type = "text";
      input.readOnly = true;
      input.value = icon.content;
      input.classList.add("unit", "size1of2");
      fieldset.appendChild(input);

      glyphDiv.appendChild(fieldset);

      container.appendChild(glyphDiv);
    });
    //Hiển thị tên font
    const fontNameDIV = document.getElementById("fontName");
    fontNameDIV.textContent = `${fontName}`;
    // Hiển thị số lượng icon
    const iconCountDiv = document.getElementById("totalIconCount");
    iconCountDiv.textContent = `Icon: ${iconData.length}`;
  })
  .catch((error) => console.error("Error fetching iconData:", error));

// Function to fetch and display the file content Icon data
async function displayFileContent() {
  try {
    const response = await fetch("user/iconData-1.txt");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const text = await response.text();
    fileContent.textContent = text;

    // Count the occurrences of "ad-tgic"
    // const iconCountMatch = text.match(/ad-mm/g);
    const iconCountMatch = text.match(new RegExp(`${prefix}`, "g"));
    const count = iconCountMatch ? iconCountMatch.length : 0;
    iconCount.textContent = ` (${count})`;
  } catch (error) {
    fileContent.textContent = `Error: ${error.message}`;
  }
}
