//Font Icon Test
if (!("boxShadow" in document.body.style)) {
  document.body.setAttribute("class", "noBoxShadow");
}

document.body.addEventListener("click", function (e) {
  var target = e.target;
  if (
    target.tagName === "INPUT" &&
    target.getAttribute("class").indexOf("liga") === -1
  ) {
    target.select();
  }
});

(function () {
  var fontSize = document.getElementById("fontSize"),
    testDrive = document.getElementById("testDrive"),
    testText = document.getElementById("testText");
  function updateTest() {
    testDrive.innerHTML = testText.value || String.fromCharCode(160);
    if (window.icomoonLiga) {
      window.icomoonLiga(testDrive);
    }
  }
  function updateSize() {
    testDrive.style.fontSize = fontSize.value + "px";
  }
  fontSize.addEventListener("change", updateSize, false);
  testText.addEventListener("input", updateTest, false);
  testText.addEventListener("change", updateTest, false);
  updateSize();
})();
// Total icon
function countTotalIcon() {
  var iconElements = document.querySelectorAll(".mls");
  var totalCount = iconElements.length;

  var totalIconCountElement = document.getElementById("totalIconCount");
  totalIconCountElement.innerHTML = "(Icons: " + totalCount + ")";
}

//Live Search
function searchIconByName(iconName) {
  var iconElements = document.querySelectorAll(".mls");

  iconElements.forEach(function (element) {
    var iconText = element.textContent.toLowerCase();
    var parentGlyph = element.closest(".glyph");

    if (iconText.includes(iconName.toLowerCase())) {
      parentGlyph.classList.remove("hidden-true");
    } else {
      parentGlyph.classList.add("hidden-true");
    }
  });
}

//toast
// Sự kiện click trên pseudo-element :before
document.addEventListener("click", function (event) {
  var target = event.target;

  // Kiểm tra xem phần tử được click có class mls hay không
  if (target.classList.contains("mls")) {
    if(copyIcon()==1){
        copyIconName1(target.textContent.trim());
    }else if(copyIcon()==2){
        copyIconName2(target.textContent.trim());
    }

  }
});

function copyIconName1(iconName) {
  var prefix = "ad-tgic ";

  // Tạo một thẻ input tạm thời để sao chép giá trị vào clipboard
  var tempInput = document.createElement("input");
  tempInput.value = '<i class="' + prefix + iconName + '"></i>';
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  // Hiển thị toast
  var toastContainer = document.getElementById("toastContainer");
//   toastContainer.innerHTML =
//     "Đã copy: " + '<i class="' + prefix + iconName + '"></i>';
  toastContainer.innerText =
    "Đã copy: " + '<i class="' + prefix + iconName + '"></i>';
  toastContainer.classList.add("show");

  setTimeout(function () {
    toastContainer.classList.remove("show");
  }, 4000);
}

function copyIconName2(iconName) {
    var prefix = "ad-tgic ";
  
    // Tạo một thẻ input tạm thời để sao chép giá trị vào clipboard
    var tempInput = document.createElement("input");
    tempInput.value =  prefix + iconName;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  
    // Hiển thị toast
    var toastContainer = document.getElementById("toastContainer");
    // toastContainer.innerHTML =
    //   "Đã copy: " + '<i class="' + prefix + iconName + '"></i>';
    toastContainer.innerText =
      "Đã copy: " + prefix + iconName;
    toastContainer.classList.add("show");
  
    setTimeout(function () {
      toastContainer.classList.remove("show");
    }, 4000);
  }
function copyIcon() {
    var selectedFunction = document.getElementById('copyFunctionSelect').value;
    
    if (selectedFunction === 'copyIconName1') {
        return 1;
    } else if (selectedFunction === 'copyIconName2') {
        return 2;
    }
}

// Mở modal và hiển thị danh sách icon mới
function openModal() {
  var overlay = document.getElementById("overlay");
  overlay.style.display = "flex";
  let abc = 'adm';
  // Danh sách icon mới
  var newIcons = [
    `${abc}-share-link`,
    `${abc}-solid-share-link`,
    `${abc}-list-link`,
    `${abc}-solid-list-link`,
    `${abc}-file-import`,
    `${abc}-file-export`,
    `${abc}-warehouse`,
    `${abc}-solid-warehouse`,
    `${abc}-blog`
  ];

  // Hiển thị icon mới trong modal
  var newIconContainer = document.getElementById("newIconContainer");
  newIconContainer.innerHTML = "";

  newIcons.forEach(function (iconClass) {
    var iconElement = document.createElement("div");
    iconElement.className = "new-icon";
    iconElement.innerHTML =
      '<i class="ad-tgic ' +
      
      iconClass +
      '"></i>' +
      "<p>" +
      iconClass +
      "</p>";
      if(copyIcon()==1){
        iconElement.setAttribute("onclick", 'copyIconName1("' + iconClass + '")');
    }else if(copyIcon()==2){
        iconElement.setAttribute("onclick", 'copyIconName2("' + iconClass + '")');
    } 
    newIconContainer.appendChild(iconElement);
  });
}

function closeModal() {
  var overlay = document.getElementById("overlay");
  overlay.style.display = "none";
}

// Close the popup if the user clicks outside of the popup content
window.addEventListener("click", function (event) {
  if (event.target == overlay) {
    overlay.style.display = "none";
  }
});

window.onload = function () {
  countTotalIcon();
  openModal();
};

// Get elements
const popup = document.getElementById("popup");
const openPopupBtn = document.getElementById("open-popup");
const closeBtn = document.getElementsByClassName("close-btn")[0];
const fileContent = document.getElementById("file-content");
const copyBtn = document.getElementById("copy-btn");
const iconCount = document.getElementById("icon-count");

// Function to fetch and display the file content
async function displayFileContent() {
  try {
    const response = await fetch("iconData.txt");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const text = await response.text();
    fileContent.textContent = text;

    // Count the occurrences of "icon-mm"
    const iconCountMatch = text.match(/icon-mm/g);
    const count = iconCountMatch ? iconCountMatch.length : 0;
    iconCount.textContent = ` (${count})`;
  } catch (error) {
    fileContent.textContent = `Error: ${error.message}`;
  }
}

// Function to open the popup
function openPopup() {
  displayFileContent();
  popup.style.display = "flex";
}

// Function to close the popup
function closePopup() {
  popup.style.display = "none";
}

// Function to copy the content to clipboard
function copyContent() {
  const text = fileContent.textContent;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("Đã sao chép");
    })
    .catch((err) => {
      alert("Failed to copy content: ", err);
    });
}

// Event listeners
openPopupBtn.addEventListener("click", openPopup);
closeBtn.addEventListener("click", closePopup);
copyBtn.addEventListener("click", copyContent);

// Close the popup if the user clicks outside of the popup content
window.addEventListener("click", function (event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
});
