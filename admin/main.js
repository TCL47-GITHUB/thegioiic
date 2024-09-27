// Danh sách icon mới
var fontName = "admin-tgic";

var prefix = "ad-tgic ";

let abc = "adm-";
// Danh sách icon mới
var newIcons = [
  `${abc}download`,
  `${abc}fire`,
  `${abc}more-h`,
  `${abc}more-v`,
  `${abc}solid-more-h`,
  `${abc}solid-more-v`,
  `${abc}group-users`,
  `${abc}solid-group-users`,
  `${abc}heart`,
  `${abc}solid-heart`,
  `${abc}loading`,
  `${abc}logo-linhkienx`,
  `${abc}logo-linhkienx-sm`,
  `${abc}arrows-up`,
  `${abc}arrows-right`,
  `${abc}arrows-down`,
  `${abc}arrows-left`,
  `${abc}bank`,
  `${abc}solid-bank`,
  `${abc}share-link`,
  `${abc}solid-share-link`,
  `${abc}list-link`,
  `${abc}solid-list-link`,
  `${abc}file-import`,
  `${abc}file-export`,
  `${abc}warehouse`,
  `${abc}solid-warehouse`,
  `${abc}blog`,
];

// read iconData
fetch("admin/iconData-1.txt")
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
