class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
  <div class="bgc1 px-2 py-2 flex gap-2 items-center sticky top-0 clearfix flex-col-reverse xl:flex-row sm:gap-1 sm:px-3 md:gap-2">
  <a class="logo hidden xl:block" href="#!">
    <svg xmlns="http://www.w3.org/2000/svg" width="60"  viewBox="0 0 200 132" fill="none">
      <path d="M10.7164 44.1758L9.50623 51.9333H16.4801L15.875 55.6699H8.91625L6.62592 70.2348C6.1025 73.5841 6.74392 75.4811 9.4548 75.4811C10.4243 75.493 11.3914 75.3801 12.3321 75.1452L11.9751 78.8303C10.5494 79.3115 9.04984 79.5369 7.54568 79.4959C5.27653 79.4959 3.56408 78.7698 2.61104 77.4325C1.45528 75.9803 1.33426 73.581 1.83347 70.4012L4.15103 55.6668H0L0.586952 51.9333H4.73799L5.75457 45.4587L10.7164 44.1758Z" fill="white"/>
      <path d="M24.9879 39.3199H29.856L27.2086 56.1721H27.3327C28.3849 54.718 29.7657 53.5331 31.3627 52.7139C32.957 51.8327 34.7423 51.354 36.5636 51.3191C40.161 51.3191 45.5676 53.552 44.1032 62.8706L41.5527 78.9423H36.6816L39.1323 63.4273C39.816 59.0766 38.7904 55.3915 34.1946 55.3915C31.039 55.3915 28.198 57.6243 26.891 60.3019C26.5144 61.0334 26.2774 61.8285 26.1921 62.6467L23.6294 78.9423H18.7583L24.9879 39.3199Z" fill="white"/>
      <path d="M53.0104 66.3288C52.0785 72.9699 55.8544 75.708 60.7255 75.708C64.214 75.708 66.4135 75.1029 68.362 74.3132L68.6403 77.8289C66.8008 78.6095 63.7269 79.502 59.4639 79.502C51.2163 79.502 47.1499 74.0349 48.4328 65.8871C49.7156 57.7393 55.4823 51.3222 63.2851 51.3222C72.0319 51.3222 73.1363 59.0796 72.3617 64.0445C72.2316 64.8164 72.0569 65.5802 71.8383 66.3318L53.0104 66.3288ZM67.8355 62.8131C68.3832 59.6878 67.8174 54.8348 62.3381 54.8348C57.4095 54.8348 54.5323 59.4094 53.6095 62.8131H67.8355Z" fill="white"/>
      <path d="M102.212 51.9333C101.794 53.8848 101.343 56.0632 100.823 59.355L98.3602 75.0363C97.3859 81.2296 95.5706 85.0206 92.6116 87.3684C89.6224 89.8221 85.7376 90.6027 82.3611 90.6027C79.148 90.6027 75.7292 89.8221 73.7989 88.3729L75.6142 84.6333C77.2086 85.7497 79.8197 86.7512 83.1387 86.7512C88.1218 86.7512 92.1881 84.128 93.2591 77.3206L93.7311 74.2951H93.5919C92.5132 75.7186 91.1155 76.8691 89.5113 77.6542C87.907 78.4392 86.1409 78.8369 84.355 78.8152C77.7139 78.8152 73.8473 73.1211 75.0242 65.6451C76.4613 56.4928 83.1931 51.304 89.3441 51.304C93.9943 51.304 96.1545 53.7577 96.9654 55.9906H97.0773L97.9396 51.9182L102.212 51.9333ZM95.501 62.5893C95.6467 61.8549 95.6712 61.1017 95.5736 60.3594C95.1349 57.5124 93.123 55.1676 89.5801 55.1676C84.9328 55.1676 80.9875 59.1311 80.0042 65.3818C79.1722 70.6826 81.1358 75.0908 86.3942 75.0908C89.3834 75.0908 92.3938 73.1938 93.9368 70.0684C94.3291 69.2374 94.5982 68.3538 94.7356 67.4452L95.501 62.5893Z" fill="white"/>
      <path d="M104.333 78.9423L108.568 51.9333H113.439L109.204 78.9423H104.333ZM115.194 44.3423C115.081 45.2004 114.653 45.9858 113.992 46.5451C113.331 47.1045 112.486 47.3978 111.621 47.3678C109.906 47.3678 108.898 46.0305 109.161 44.3423C109.29 43.4955 109.715 42.722 110.361 42.16C111.008 41.598 111.833 41.2841 112.689 41.2744C114.517 41.2744 115.467 42.6116 115.194 44.3423Z" fill="white"/>
      <path d="M144.739 65.2124C143.168 75.1967 135.62 79.5534 129.145 79.5534C121.884 79.5534 117.143 74.1982 118.486 65.6602C119.908 56.6199 126.607 51.3191 134.025 51.3191C141.719 51.3191 146.037 56.9557 144.739 65.2124ZM123.439 65.4938C122.51 71.4087 125.185 75.8714 129.944 75.8714C134.594 75.8714 138.775 71.4632 139.731 65.3818C140.448 60.8042 139.093 55.0012 133.335 55.0012C127.578 55.0012 124.247 60.3594 123.439 65.4938Z" fill="white"/>
      <path d="M148.657 78.9423L152.892 51.9333H157.764L153.528 78.9423H148.657ZM159.518 44.3423C159.405 45.2004 158.977 45.9858 158.316 46.5451C157.656 47.1045 156.81 47.3978 155.945 47.3678C154.23 47.3678 153.222 46.0305 153.485 44.3423C153.614 43.4955 154.039 42.722 154.685 42.16C155.332 41.598 156.157 41.2841 157.013 41.2744C158.853 41.2744 159.803 42.6116 159.53 44.3423H159.518Z" fill="white"/>
      <path d="M162.671 78.9423L166.907 51.9333H171.778L167.542 78.9423H162.671ZM173.536 44.3423C173.422 45.2002 172.993 45.9851 172.333 46.5443C171.672 47.1035 170.827 47.3971 169.962 47.3678C168.247 47.3678 167.24 46.0305 167.503 44.3423C167.631 43.496 168.056 42.7229 168.702 42.1609C169.347 41.599 170.172 41.2848 171.027 41.2744C172.861 41.2744 173.808 42.6116 173.536 44.3423Z" fill="white"/>
      <path d="M195.931 77.9378C194.551 78.6064 191.589 79.4959 187.989 79.4959C179.907 79.4959 175.517 73.9713 176.815 65.7116C178.122 57.3974 184.715 51.3706 193.456 51.3706C196.333 51.3706 198.766 52.0967 199.988 52.7653L198.285 56.5624C197.229 55.8907 195.498 55.2765 192.839 55.2765C186.694 55.2765 182.652 59.8542 181.768 65.4907C180.785 71.7385 184.164 75.59 189.477 75.59C191.612 75.5825 193.721 75.1258 195.667 74.2497L195.931 77.9378Z" fill="white"/>
      <path d="M54.7168 14.8735H55.6245V29.7471H41.3318C45.0133 24.139 49.5266 19.1238 54.7168 14.8735Z" fill="white"/>
      <path d="M57.7605 12.5257C60.8212 10.3018 64.0686 8.34711 67.4664 6.68341V13.5393H57.7605V12.5257Z" fill="white"/>
      <path d="M67.4664 14.8735H57.7605V29.7471H67.4664V14.8735Z" fill="white"/>
      <path d="M69.5994 5.67288C72.5887 4.3312 75.6755 3.21863 78.8334 2.34479V13.5393H69.5994V5.67288Z" fill="white"/>
      <path d="M78.8334 14.8735H69.5994V29.7471H78.8334V14.8735Z" fill="white"/>
      <path d="M80.9633 1.82137C84.0787 1.07187 87.2448 0.552098 90.4363 0.266246V13.5393H80.9633V1.82137Z" fill="white"/>
      <path d="M90.4363 14.8735H80.9633V29.7471H90.4363V14.8735Z" fill="white"/>
      <path d="M96.3936 0C98.0919 0 99.7751 0.0635354 101.443 0.190608V13.5393H92.5663V0.111946C93.8309 0.0373158 95.1067 0 96.3936 0Z" fill="white"/>
      <path d="M101.443 14.8735H92.5663V29.7471H101.443V14.8735Z" fill="white"/>
      <path d="M113.282 2.18746V13.5393H103.576V0.387268C106.852 0.742096 110.097 1.34387 113.282 2.18746Z" fill="white"/>
      <path d="M113.282 14.8735H103.573V29.7471H113.282V14.8735Z" fill="white"/>
      <path d="M115.412 2.78954C118.576 3.74259 121.662 4.93403 124.646 6.35362V13.5393H115.412V2.78954Z" fill="white"/>
      <path d="M124.646 14.8735H115.412V29.7471H124.646V14.8735Z" fill="white"/>
      <path d="M135.898 14.8735H126.776V29.7471H135.898V14.8735Z" fill="white"/>
      <path d="M151.455 29.7471H138.028V14.8493C138.04 14.8545 138.05 14.8629 138.058 14.8735C143.255 19.1204 147.773 24.1361 151.455 29.7471Z" fill="white"/>
      <path d="M41.943 102.36H55.6275V117.255L55.3249 116.997C50.1535 112.819 45.6421 107.884 41.943 102.36Z" fill="white"/>
      <path d="M67.4664 102.36H57.7605V116.997H67.4664V102.36Z" fill="white"/>
      <path d="M78.8334 102.36H69.5994V116.997H78.8334V102.36Z" fill="white"/>
      <path d="M90.4363 102.36H80.9633V116.997H90.4363V102.36Z" fill="white"/>
      <path d="M101.443 102.36H92.5663V116.997H101.443V102.36Z" fill="white"/>
      <path d="M113.282 102.36H103.573V116.997H113.282V102.36Z" fill="white"/>
      <path d="M124.646 102.36H115.412V116.997H124.646V102.36Z" fill="white"/>
      <path d="M135.898 102.36H126.776V116.997H135.898V102.36Z" fill="white"/>
      <path d="M69.5994 125.817C72.5884 127.17 75.6751 128.296 78.8334 129.184V118.335H69.5994V125.817Z" fill="white"/>
      <path d="M80.9633 129.744C84.0776 130.509 87.2437 131.044 90.4363 131.345V118.335H80.9633V129.744Z" fill="white"/>
      <path d="M92.5663 131.508C93.9298 131.597 95.3064 131.64 96.6961 131.638C98.2936 131.638 99.876 131.582 101.443 131.469V118.335H92.5663V131.508Z" fill="white"/>
      <path d="M103.576 131.281C106.852 130.944 110.097 130.359 113.285 129.532V118.338H103.576V131.281Z" fill="white"/>
      <path d="M115.412 128.939C118.575 128.004 121.662 126.83 124.646 125.427V118.335H115.412V128.939Z" fill="white"/>
      <path d="M126.776 118.335V124.386C129.967 122.744 133.018 120.844 135.898 118.704V118.344L126.776 118.335Z" fill="white"/>
      <path d="M151.449 102.36C147.755 107.887 143.25 112.827 138.085 117.013L138.028 117.058V102.36H151.449Z" fill="white"/>
      <path d="M55.3098 117.013H55.6124V117.27L55.3098 117.013Z" fill="white"/>
      <path d="M138.085 117.013L138.028 117.058V117.013L138.085 117.013Z" fill="white"/>
      <path d="M138.067 14.8735H138.037V14.8493C138.049 14.8545 138.06 14.8629 138.067 14.8735Z" fill="white"/>
    </svg></a>
  <div class="min-w-80 flex rounded gap-1 items-center search-container bg-white px-4 py-1.5">
  <input type="text" class="" id="searchInput" oninput="searchIconByName(this.value)" placeholder="Tìm Icon...">
  
  <i class="mm-1 icon1-search cursor-pointer"></i>
  
  </div>

  <div class="flex flex-col-reverse w-full xl:w-fit gap-2 sm:flex-row sm:gap-2  items-center">
      <a class="logo hidden sm:block xl:hidden" href="#!">
        <svg xmlns="http://www.w3.org/2000/svg" width="60"  viewBox="0 0 200 132" fill="none">
          <path d="M10.7164 44.1758L9.50623 51.9333H16.4801L15.875 55.6699H8.91625L6.62592 70.2348C6.1025 73.5841 6.74392 75.4811 9.4548 75.4811C10.4243 75.493 11.3914 75.3801 12.3321 75.1452L11.9751 78.8303C10.5494 79.3115 9.04984 79.5369 7.54568 79.4959C5.27653 79.4959 3.56408 78.7698 2.61104 77.4325C1.45528 75.9803 1.33426 73.581 1.83347 70.4012L4.15103 55.6668H0L0.586952 51.9333H4.73799L5.75457 45.4587L10.7164 44.1758Z" fill="white"/>
          <path d="M24.9879 39.3199H29.856L27.2086 56.1721H27.3327C28.3849 54.718 29.7657 53.5331 31.3627 52.7139C32.957 51.8327 34.7423 51.354 36.5636 51.3191C40.161 51.3191 45.5676 53.552 44.1032 62.8706L41.5527 78.9423H36.6816L39.1323 63.4273C39.816 59.0766 38.7904 55.3915 34.1946 55.3915C31.039 55.3915 28.198 57.6243 26.891 60.3019C26.5144 61.0334 26.2774 61.8285 26.1921 62.6467L23.6294 78.9423H18.7583L24.9879 39.3199Z" fill="white"/>
          <path d="M53.0104 66.3288C52.0785 72.9699 55.8544 75.708 60.7255 75.708C64.214 75.708 66.4135 75.1029 68.362 74.3132L68.6403 77.8289C66.8008 78.6095 63.7269 79.502 59.4639 79.502C51.2163 79.502 47.1499 74.0349 48.4328 65.8871C49.7156 57.7393 55.4823 51.3222 63.2851 51.3222C72.0319 51.3222 73.1363 59.0796 72.3617 64.0445C72.2316 64.8164 72.0569 65.5802 71.8383 66.3318L53.0104 66.3288ZM67.8355 62.8131C68.3832 59.6878 67.8174 54.8348 62.3381 54.8348C57.4095 54.8348 54.5323 59.4094 53.6095 62.8131H67.8355Z" fill="white"/>
          <path d="M102.212 51.9333C101.794 53.8848 101.343 56.0632 100.823 59.355L98.3602 75.0363C97.3859 81.2296 95.5706 85.0206 92.6116 87.3684C89.6224 89.8221 85.7376 90.6027 82.3611 90.6027C79.148 90.6027 75.7292 89.8221 73.7989 88.3729L75.6142 84.6333C77.2086 85.7497 79.8197 86.7512 83.1387 86.7512C88.1218 86.7512 92.1881 84.128 93.2591 77.3206L93.7311 74.2951H93.5919C92.5132 75.7186 91.1155 76.8691 89.5113 77.6542C87.907 78.4392 86.1409 78.8369 84.355 78.8152C77.7139 78.8152 73.8473 73.1211 75.0242 65.6451C76.4613 56.4928 83.1931 51.304 89.3441 51.304C93.9943 51.304 96.1545 53.7577 96.9654 55.9906H97.0773L97.9396 51.9182L102.212 51.9333ZM95.501 62.5893C95.6467 61.8549 95.6712 61.1017 95.5736 60.3594C95.1349 57.5124 93.123 55.1676 89.5801 55.1676C84.9328 55.1676 80.9875 59.1311 80.0042 65.3818C79.1722 70.6826 81.1358 75.0908 86.3942 75.0908C89.3834 75.0908 92.3938 73.1938 93.9368 70.0684C94.3291 69.2374 94.5982 68.3538 94.7356 67.4452L95.501 62.5893Z" fill="white"/>
          <path d="M104.333 78.9423L108.568 51.9333H113.439L109.204 78.9423H104.333ZM115.194 44.3423C115.081 45.2004 114.653 45.9858 113.992 46.5451C113.331 47.1045 112.486 47.3978 111.621 47.3678C109.906 47.3678 108.898 46.0305 109.161 44.3423C109.29 43.4955 109.715 42.722 110.361 42.16C111.008 41.598 111.833 41.2841 112.689 41.2744C114.517 41.2744 115.467 42.6116 115.194 44.3423Z" fill="white"/>
          <path d="M144.739 65.2124C143.168 75.1967 135.62 79.5534 129.145 79.5534C121.884 79.5534 117.143 74.1982 118.486 65.6602C119.908 56.6199 126.607 51.3191 134.025 51.3191C141.719 51.3191 146.037 56.9557 144.739 65.2124ZM123.439 65.4938C122.51 71.4087 125.185 75.8714 129.944 75.8714C134.594 75.8714 138.775 71.4632 139.731 65.3818C140.448 60.8042 139.093 55.0012 133.335 55.0012C127.578 55.0012 124.247 60.3594 123.439 65.4938Z" fill="white"/>
          <path d="M148.657 78.9423L152.892 51.9333H157.764L153.528 78.9423H148.657ZM159.518 44.3423C159.405 45.2004 158.977 45.9858 158.316 46.5451C157.656 47.1045 156.81 47.3978 155.945 47.3678C154.23 47.3678 153.222 46.0305 153.485 44.3423C153.614 43.4955 154.039 42.722 154.685 42.16C155.332 41.598 156.157 41.2841 157.013 41.2744C158.853 41.2744 159.803 42.6116 159.53 44.3423H159.518Z" fill="white"/>
          <path d="M162.671 78.9423L166.907 51.9333H171.778L167.542 78.9423H162.671ZM173.536 44.3423C173.422 45.2002 172.993 45.9851 172.333 46.5443C171.672 47.1035 170.827 47.3971 169.962 47.3678C168.247 47.3678 167.24 46.0305 167.503 44.3423C167.631 43.496 168.056 42.7229 168.702 42.1609C169.347 41.599 170.172 41.2848 171.027 41.2744C172.861 41.2744 173.808 42.6116 173.536 44.3423Z" fill="white"/>
          <path d="M195.931 77.9378C194.551 78.6064 191.589 79.4959 187.989 79.4959C179.907 79.4959 175.517 73.9713 176.815 65.7116C178.122 57.3974 184.715 51.3706 193.456 51.3706C196.333 51.3706 198.766 52.0967 199.988 52.7653L198.285 56.5624C197.229 55.8907 195.498 55.2765 192.839 55.2765C186.694 55.2765 182.652 59.8542 181.768 65.4907C180.785 71.7385 184.164 75.59 189.477 75.59C191.612 75.5825 193.721 75.1258 195.667 74.2497L195.931 77.9378Z" fill="white"/>
          <path d="M54.7168 14.8735H55.6245V29.7471H41.3318C45.0133 24.139 49.5266 19.1238 54.7168 14.8735Z" fill="white"/>
          <path d="M57.7605 12.5257C60.8212 10.3018 64.0686 8.34711 67.4664 6.68341V13.5393H57.7605V12.5257Z" fill="white"/>
          <path d="M67.4664 14.8735H57.7605V29.7471H67.4664V14.8735Z" fill="white"/>
          <path d="M69.5994 5.67288C72.5887 4.3312 75.6755 3.21863 78.8334 2.34479V13.5393H69.5994V5.67288Z" fill="white"/>
          <path d="M78.8334 14.8735H69.5994V29.7471H78.8334V14.8735Z" fill="white"/>
          <path d="M80.9633 1.82137C84.0787 1.07187 87.2448 0.552098 90.4363 0.266246V13.5393H80.9633V1.82137Z" fill="white"/>
          <path d="M90.4363 14.8735H80.9633V29.7471H90.4363V14.8735Z" fill="white"/>
          <path d="M96.3936 0C98.0919 0 99.7751 0.0635354 101.443 0.190608V13.5393H92.5663V0.111946C93.8309 0.0373158 95.1067 0 96.3936 0Z" fill="white"/>
          <path d="M101.443 14.8735H92.5663V29.7471H101.443V14.8735Z" fill="white"/>
          <path d="M113.282 2.18746V13.5393H103.576V0.387268C106.852 0.742096 110.097 1.34387 113.282 2.18746Z" fill="white"/>
          <path d="M113.282 14.8735H103.573V29.7471H113.282V14.8735Z" fill="white"/>
          <path d="M115.412 2.78954C118.576 3.74259 121.662 4.93403 124.646 6.35362V13.5393H115.412V2.78954Z" fill="white"/>
          <path d="M124.646 14.8735H115.412V29.7471H124.646V14.8735Z" fill="white"/>
          <path d="M135.898 14.8735H126.776V29.7471H135.898V14.8735Z" fill="white"/>
          <path d="M151.455 29.7471H138.028V14.8493C138.04 14.8545 138.05 14.8629 138.058 14.8735C143.255 19.1204 147.773 24.1361 151.455 29.7471Z" fill="white"/>
          <path d="M41.943 102.36H55.6275V117.255L55.3249 116.997C50.1535 112.819 45.6421 107.884 41.943 102.36Z" fill="white"/>
          <path d="M67.4664 102.36H57.7605V116.997H67.4664V102.36Z" fill="white"/>
          <path d="M78.8334 102.36H69.5994V116.997H78.8334V102.36Z" fill="white"/>
          <path d="M90.4363 102.36H80.9633V116.997H90.4363V102.36Z" fill="white"/>
          <path d="M101.443 102.36H92.5663V116.997H101.443V102.36Z" fill="white"/>
          <path d="M113.282 102.36H103.573V116.997H113.282V102.36Z" fill="white"/>
          <path d="M124.646 102.36H115.412V116.997H124.646V102.36Z" fill="white"/>
          <path d="M135.898 102.36H126.776V116.997H135.898V102.36Z" fill="white"/>
          <path d="M69.5994 125.817C72.5884 127.17 75.6751 128.296 78.8334 129.184V118.335H69.5994V125.817Z" fill="white"/>
          <path d="M80.9633 129.744C84.0776 130.509 87.2437 131.044 90.4363 131.345V118.335H80.9633V129.744Z" fill="white"/>
          <path d="M92.5663 131.508C93.9298 131.597 95.3064 131.64 96.6961 131.638C98.2936 131.638 99.876 131.582 101.443 131.469V118.335H92.5663V131.508Z" fill="white"/>
          <path d="M103.576 131.281C106.852 130.944 110.097 130.359 113.285 129.532V118.338H103.576V131.281Z" fill="white"/>
          <path d="M115.412 128.939C118.575 128.004 121.662 126.83 124.646 125.427V118.335H115.412V128.939Z" fill="white"/>
          <path d="M126.776 118.335V124.386C129.967 122.744 133.018 120.844 135.898 118.704V118.344L126.776 118.335Z" fill="white"/>
          <path d="M151.449 102.36C147.755 107.887 143.25 112.827 138.085 117.013L138.028 117.058V102.36H151.449Z" fill="white"/>
          <path d="M55.3098 117.013H55.6124V117.27L55.3098 117.013Z" fill="white"/>
          <path d="M138.085 117.013L138.028 117.058V117.013L138.085 117.013Z" fill="white"/>
          <path d="M138.067 14.8735H138.037V14.8493C138.049 14.8545 138.06 14.8629 138.067 14.8735Z" fill="white"/>
        </svg></a>
      <div class="flex w-full text-nowrap">
  <a href="../font-icon-admin-tgic/demo.html" class="w-full text-sm rounded-r-none hover:scale-105 focus:outline-none flex justify-center px-2 py-1 rounded cursor-pointer hover:bg-sky-700 hover:text-sky-100 bg-sky-100 text-sky-700 border border-r-0 duration-200 ease-in-out border-sky-600 transition">
  <div class="flex leading-5">Admin</div>
  </a>
  <a href="../font-icon-tgic/demo.html" class="w-full text-sm hover:scale-105 focus:outline-none flex justify-center px-2 py-1 cursor-pointer hover:bg-sky-700 hover:text-sky-100 bg-sky-100 text-sky-700 border border-r-0 duration-200 ease-in-out border-sky-600 transition">
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
