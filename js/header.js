class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
  <div class="bgc1 px-2 py-2 flex gap-2 items-center sticky top-0 clearfix flex-col-reverse xl:flex-row sm:gap-1 sm:px-3 md:gap-2">
  <a class="logo hidden xl:block" href="#!">
   <i class="ad-tgic adm-logo-linhkienx tgic icon-logo-linhkienx text-[#fff] text-2xl"></i></a>
  <div class="min-w-80 flex rounded gap-1 items-center search-container bg-white px-4 py-1.5">
  <input type="text" class="" id="searchInput" oninput="searchIconByName(this.value)" placeholder="Tìm Icon...">
  
  <i class="mm-1 icon1-search cursor-pointer"></i>
  
  </div>

  <div class="flex flex-col-reverse w-full xl:w-fit gap-2 sm:flex-row sm:gap-2  items-center">
      <a class="logo hidden sm:block xl:hidden" href="#!">
        <i class="ad-tgic adm-logo-linhkienx tgic icon-logo-linhkienx text-[#fff] text-2xl"></i>
      </a>
      <div class="flex w-full text-nowrap">
  <a href="./admin.html" class="w-full text-sm rounded-r-none hover:scale-105 focus:outline-none flex justify-center px-2 py-1 rounded cursor-pointer hover:bg-sky-700 hover:text-sky-100 bg-sky-100 text-sky-700 border border-r-0 duration-200 ease-in-out border-sky-600 transition">
  <div class="flex leading-5">Admin</div>
  </a>
  <a href="./user.html" class="w-full text-sm hover:scale-105 focus:outline-none flex justify-center px-2 py-1 cursor-pointer hover:bg-sky-700 hover:text-sky-100 bg-sky-100 text-sky-700 border border-r-0 duration-200 ease-in-out border-sky-600 transition">
  <div class="flex leading-5">User</div>
  </a>
  <button id="open-popup" class="text-sm w-full hover:scale-105 focus:outline-none flex justify-center px-2 py-1 cursor-pointer hover:bg-teal-700 hover:text-teal-100 bg-teal-100 text-teal-700 border border-r-0 duration-200 ease-in-out border-teal-600 transition">
  <div class="flex leading-5">Icon data</div>
  </button>
  
  <button onclick="openModal()" class="text-sm w-full rounded-l-none hover:scale-105 focus:outline-none flex justify-center px-2 py-1 rounded cursor-pointer hover:bg-teal-700 hover:text-teal-100 bg-teal-100 text-teal-700 border duration-200 ease-in-out border-teal-600 transition">
  <div class="flex leading-5">New Icon</div>
  </button>
  </div>
      <div class="flex gap-2 items-center">
  <form class="w-max">
  <select id="copyFunctionSelect" class="w-full text-sm bg-gray-50 border border-gray-300 text-gray-800 rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option value="copyIconName1">Copy full tag</option>
  <option selected="" value="copyIconName2">Copy tên class</option>
  </select>
  </form>
  <h1 class="mhmm mvm text-sm text-nowrap">
  <span class="fgc1">Font name:</span> <span id="fontName"></span>
  <small class="fgc1"><span id="totalIconCount"></span></small>
  </h1>
  </div>
  </div>
  </div>
  
   <!-- Popup structure --> 
  <div id="popup" class="popup">
  <div class="popup-content">
  <i class="close-btn mm-1 icon1-times"></i>
  <p
  class="text-gray-600 font-bold"
  style="
    font-size: 1.5rem;
    margin-top: 14px;
    border-bottom: 1px solid #e8e8e8;
  "
  >
  Icon Data <span id="icon-count"></span>
  </p>
  <pre id="file-content"></pre>
  
  <button
  id="copy-btn"
  class="mt-3 text-sm focus:outline-none flex justify-center px-4 py-2 rounded cursor-pointer bg-white text-teal-700 border border-teal-600"
  >
  <div class="flex leading-5 gap-1 item-center">
    <i class="mm-1 icon1-copy"></i> Sao chép
  </div>
  </button>
  </div>
  </div>
  
  <div class="toast-container" id="toastContainer"></div>
  <!-- Thẻ overlay và modal -->
  <div class="overlay" id="overlay">
  <div class="modal">
  <strong
  class="text-gray-600"
  style="
    font-size: 1.5rem;
    margin-top: 14px;
    border-bottom: 1px solid #e8e8e8;
    padding: 0 1rem;
  "
  >Icon mới</strong
  >
  <div class="icon-container" id="newIconContainer"></div>
  <i onclick="closeModal()" class="close-btn mm-1 icon1-times"></i>
  </div>
  </div>

        `;
  }
}

customElements.define("my-header", Header);
