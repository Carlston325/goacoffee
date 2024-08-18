import { useParams } from "react-router-dom";

export default function Menu() {
  return (
    <>
      <main
        className="layout__Main-sc-78ulcb-0 epUgWD"
        style={{ minHeight: "400px" }}
      >
        <section>
          <div className="categoryView__NutritionWrapper-sc-1lvmz3e-1 jzxyBS">
            <div className="categoryView__NutritionView-sc-1lvmz3e-2 hKPiiD">
              <div className="pageSelect__StyledPageSelect-sc-10h0q6q-0 iPXGFB">
                <button type="button" data-cy="" className="active">
                  <div className="iconWrapper activeIconWrapper">
                    <svg
                      width="60px"
                      height="60px"
                      viewBox="0 0 1024 1024"
                      style={{
                        display: "inline-block",
                        verticalAlign: "middle",
                      }}
                    >
                      <path d="M 420.791 261.688 C 420.791 278.441 416.708 286.109 410.051 297.235 C 402.971 309.06 404.038 326.751 412.424 336.718 C 416.157 341.168 420.699 343.338 425.241 343.338 C 430.887 343.338 436.496 339.954 440.431 333.389 C 450.178 317.133 460.55 296.849 460.55 261.669 C 460.55 223.345 448.045 202.601 438.923 187.448 C 431.328 174.869 426.749 167.274 426.749 149.528 C 426.749 132.702 430.703 125.291 437.71 113.613 C 444.79 101.807 443.741 84.116 435.374 74.112 C 426.97 64.126 414.446 65.597 407.348 77.422 C 397.05 94.598 386.991 114.312 386.991 149.51 C 386.991 187.871 399.496 208.615 408.617 223.749 C 416.212 236.346 420.791 243.941 420.791 261.688 M 520.12 372.402 C 520.12 387.408 533.122 399.6 549.176 399.6 C 565.193 399.6 578.195 387.408 578.195 372.383 C 578.195 355.189 584.889 347.815 595.978 335.604 C 609.311 320.892 627.59 300.774 627.59 263.553 C 627.59 226.35 609.311 206.232 595.978 191.52 C 584.889 179.309 578.195 171.935 578.195 154.722 C 578.195 137.509 584.889 130.135 595.978 117.924 C 609.311 103.212 627.59 83.094 627.59 45.891 C 627.59 30.885 614.57 18.693 598.534 18.693 C 582.517 18.693 569.515 30.885 569.515 45.91 C 569.515 63.104 562.821 70.479 551.732 82.689 C 538.4 97.401 520.12 117.52 520.12 154.722 C 520.12 191.925 538.4 212.061 551.732 226.755 C 562.821 238.966 569.515 246.358 569.515 263.553 C 569.515 280.784 562.821 288.158 551.732 300.369 C 538.4 315.081 520.12 335.199 520.12 372.402 M 915.707 706.821 C 915.707 745.899 882.127 777.658 840.861 777.658 L 810.83 777.658 C 813.379 761.848 814.658 745.859 814.655 729.845 L 814.655 633.262 L 840.842 633.262 C 882.127 633.262 915.707 665.039 915.707 704.081 L 915.707 706.839 Z M 520.566 956.535 L 397.998 956.535 C 267.504 956.535 161.322 856.091 161.322 732.622 L 161.322 545.763 C 161.322 536.826 169.303 529.286 178.737 529.286 L 739.827 529.286 C 749.261 529.286 757.242 536.826 757.242 545.763 L 757.242 732.603 C 757.242 856.072 651.06 956.517 520.566 956.517 Z M 840.842 582.469 L 810.922 582.469 L 810.922 545.763 C 810.922 508.671 779.034 478.493 739.827 478.493 L 178.737 478.493 C 139.53 478.493 107.642 508.671 107.642 545.763 L 107.642 732.603 C 107.642 884.08 237.897 1007.31 398.016 1007.31 L 520.566 1007.31 C 645.046 1007.31 751.449 932.794 792.643 828.451 L 840.842 828.451 C 911.735 828.451 969.387 773.888 969.387 706.839 L 969.387 704.081 C 969.387 637.013 911.735 582.469 840.842 582.469 Z"></path>
                    </svg>
                  </div>
                  <span>Drinks</span>
                  <div className="underline"></div>
                </button>
                <button type="button" data-cy="page-select__food">
                  <div className="iconWrapper ">
                    <svg
                      width="60px"
                      height="60px"
                      viewBox="0 0 1024 1024"
                      style={{
                        display: "inline-block",
                        verticalAlign: "middle",
                      }}
                    >
                      <path d="M 880.06 961.279 L 144.19 961.279 C 134.179 961.279 126.029 953.148 126.029 943.137 L 126.152 943.137 L 126.152 831.117 L 898.099 831.117 L 898.099 943.137 L 898.239 943.137 C 898.239 953.148 890.09 961.279 880.06 961.279 Z M 121.34 539.002 L 903.455 539.002 C 913.466 539.002 921.633 547.135 921.633 557.145 L 921.633 601.406 C 901.208 606.972 887.788 617.915 877.198 626.627 C 865.008 636.638 857.631 642.68 840.368 642.68 C 823.103 642.68 815.725 636.638 803.537 626.627 C 788.714 614.455 768.41 597.77 731.017 597.77 C 693.608 597.77 673.322 614.455 658.499 626.627 C 646.31 636.638 638.95 642.68 621.686 642.68 C 604.421 642.68 597.062 636.638 584.856 626.627 C 570.049 614.455 549.747 597.77 512.354 597.77 C 474.944 597.77 454.658 614.455 439.834 626.627 C 427.645 636.638 420.286 642.68 403.021 642.68 C 385.758 642.68 378.398 636.638 366.192 626.627 C 351.385 614.455 331.081 597.77 293.689 597.77 C 256.279 597.77 235.993 614.455 221.188 626.627 C 208.981 636.638 201.622 642.68 184.375 642.68 C 167.11 642.68 159.751 636.638 147.561 626.627 C 136.988 617.932 123.571 606.972 103.18 601.406 L 103.18 557.145 C 103.18 547.135 111.329 539.002 121.34 539.002 Z M 450.074 408.857 C 450.074 388.66 463.616 374.047 477.034 368.479 C 480.476 367.075 484.604 365.897 488.925 365.897 C 494.07 365.897 499.461 367.55 504.275 372.362 C 515.253 383.329 533.042 383.329 544.021 372.362 C 547.761 368.602 558.88 367.706 570.979 372.712 C 584.153 378.157 598.203 390.522 598.203 408.857 C 598.135 449.724 565.004 482.823 524.138 482.852 C 483.273 482.823 450.141 449.724 450.074 408.857 Z M 126.17 680.985 C 139.676 690.294 157.643 698.829 184.392 698.829 C 221.804 698.829 242.071 682.144 256.893 669.989 C 269.082 659.979 276.442 653.921 293.707 653.921 C 310.971 653.921 318.331 659.961 330.52 669.989 C 345.343 682.162 365.647 698.829 403.038 698.829 C 440.45 698.829 460.736 682.144 475.54 669.989 C 487.748 659.979 495.106 653.921 512.372 653.921 C 529.635 653.921 536.995 659.961 549.184 669.989 C 564.007 682.162 584.311 698.829 621.703 698.829 C 659.113 698.829 679.399 682.144 694.205 669.989 C 706.413 659.979 713.77 653.921 731.035 653.921 C 748.3 653.921 755.676 659.961 767.867 669.989 C 782.69 682.162 802.992 698.829 840.402 698.829 C 866.817 698.829 884.662 690.505 898.116 681.319 L 898.116 774.984 L 126.17 774.984 L 126.17 680.985 Z M 977.818 557.163 C 977.818 516.188 944.448 482.87 903.455 482.87 L 631.222 482.87 C 646.342 461.154 654.433 435.32 654.406 408.857 C 654.406 370.956 630.098 336.409 592.495 320.849 C 582.943 316.886 572.837 314.428 562.532 313.559 C 567.977 289.059 583.643 274.393 613.711 264.17 C 634.175 257.209 639.426 230.704 623.165 216.464 C 615.617 209.856 605.119 207.775 595.622 211.007 C 542.405 229.097 512.863 262.222 505.785 311.803 C 488.939 308.215 471.395 309.895 455.535 316.616 C 418.394 332.274 394.15 368.553 393.888 408.857 C 393.888 436.328 402.477 461.828 417.072 482.852 L 121.34 482.852 C 80.316 482.892 47.061 516.123 46.994 557.145 L 46.994 618.81 C 46.994 619.97 47.187 621.059 47.344 622.182 C 47.17 623.396 46.959 624.59 46.959 625.854 C 46.959 639.606 56.882 651.006 69.966 653.41 L 69.966 943.137 L 69.827 943.137 C 69.895 984.125 103.095 1017.342 144.085 1017.43 L 880.077 1017.43 C 921.108 1017.4 954.374 984.167 954.442 943.137 L 954.318 943.137 L 954.318 653.464 C 967.851 651.247 977.793 639.565 977.818 625.854 C 977.818 624.642 977.608 623.5 977.468 622.341 C 977.608 621.164 977.818 620.022 977.818 618.828 L 977.818 557.145 Z"></path>
                    </svg>
                  </div>
                  <span>Food</span>
                  <div className=""></div>
                </button>
              </div>
              <div className="selectDropdown__StyledSelectDropdown-sc-1x3y2ro-0 gaXMVp">
                <h5>
                  <label htmlFor="category">Name</label>
                </h5>
                <select
                  name="category"
                  id="category"
                  data-cy="category-dropdown"
                >
                  <option>All drinks</option>
                  <option value="94e46476-22d8-ec11-a7b5-000d3abd1b31">
                    Frappé
                  </option>
                  <option value="9856037e-22d8-ec11-a7b5-000d3abd1b31">
                    Coffee Over Ice
                  </option>
                  <option value="09772d69-22d8-ec11-a7b5-000d3abd1b31">
                    Coffee
                  </option>
                  <option value="2163399c-22d8-ec11-a7b5-000d3abd1b31">
                    Other Cold Drinks
                  </option>
                  <option value="9a056da8-22d8-ec11-a7b5-000d3abd1b31">
                    Other Hot Drinks
                  </option>
                  <option value="0a6ef53b-f207-ef11-9f89-000d3a2d5937">
                    Iced Tea
                  </option>
                  <option value="ef8dc3b5-22d8-ec11-a7b5-000d3abd1b31">
                    Tea
                  </option>
                  <option value="52b48203-92a0-ed11-aad1-6045bd8956ae">
                    Fruit Coolers
                  </option>
                </select>
              </div>
              <div className="dietFilters__DrinkFilters-sc-1qb0fxf-0 dcXACD">
                <h5>Dietary Preferences</h5>
                <div className="filterGroup" data-cy="filters__diet">
                  <button
                    type="button"
                    value="vegetarian"
                    data-cy="filter"
                    data-cy-id="filter__vegetarian"
                    className="filterButton"
                  >
                    <div className="iconWrapper available null">
                      <svg
                        width="60px"
                        height="60px"
                        viewBox="0 0 1024 1024"
                        style={{
                          display: "inline-block",
                          verticalAlign: "middle",
                        }}
                      >
                        <path d="M991.411 8.55521C988.906 19.2253 986.308 29.9418 982.898 40.3799C974.107 67.519 971.625 95.6788 968.749 123.885C965.896 152.184 962.579 180.552 957.568 208.503C951.445 242.694 931.334 269.3 907.465 293.261C866.919 333.946 817.396 357.212 761.796 368.647C746.347 371.848 730.945 375.142 715.52 378.459C708.747 379.897 703.481 383.701 699.051 388.99C687.453 403 679.288 419.052 671.587 435.382C646.791 487.944 628.28 542.918 611.44 598.425C594.02 655.835 577.876 713.616 566.672 772.626C560.409 805.541 555.445 838.711 549.786 871.742C542.664 913.471 535.497 955.201 528.214 996.907C527.518 1000.78 525.94 1004.49 524.827 1008.27C521.626 1019.17 514.203 1024 503.162 1023.93C486.299 1023.86 469.435 1024.21 452.595 1023.79C440.533 1023.49 435.546 1020.78 432.716 1007.74C425.363 973.966 418.033 940.146 410.425 906.42C399.94 860.028 389.711 813.59 378.531 767.361C351.044 653.701 319.219 541.201 279.554 431.183C236.131 310.727 173.155 201.22 92.2477 102.197C75.3611 81.5757 57.6859 61.6041 40.4746 41.2845C37.6513 38.0208 35.1355 34.5033 32.9591 30.7768C30.8715 27.0655 32.2632 25.0242 36.4385 25.6969C40.9849 26.4624 45.5545 27.6454 49.9385 29.1763C74.99 37.9675 96.7245 52.6041 117.902 68.1917C153.021 94.0087 183.547 124.743 212.17 157.519C244.412 194.47 275.286 232.418 300.5 274.727C321.794 310.449 337.265 348.861 352.528 387.366C380.595 458.183 400.938 531.389 420.399 604.897C435.198 660.799 450.461 716.539 465.654 772.324C467.394 778.703 469.876 784.943 472.265 791.16C473.193 793.572 474.793 795.729 476.092 798.002L477.925 797.933C479.734 794.059 481.915 790.324 483.26 786.335C495.531 750.149 508.404 714.196 519.631 677.755C543.337 600.559 569.966 524.407 599.587 449.369C622.853 390.498 650.154 333.459 683.695 279.668C705.731 244.318 729.855 210.429 758.78 180.251C766.11 172.596 772.327 163.898 778.868 155.547C779.981 154.132 780.143 151.998 780.747 150.189C778.798 149.679 776.641 148.31 774.948 148.751C766.18 151.186 757.319 153.506 748.899 156.939C730.597 164.431 714.592 175.588 700.187 189.181C663.12 224.137 631.249 263.153 607.427 308.477C603.322 316.248 600.283 324.575 596.618 332.601C595.69 334.666 594.322 336.544 592.257 340.001C590.633 336.359 588.963 334.132 588.731 331.766C587.247 315.111 584.301 298.341 585.09 281.733C587.641 228.637 605.734 180.552 636.724 137.733C671.912 89.1375 718.721 58.0319 777.917 46.1093C823.612 36.8773 869.123 26.7639 914.656 16.6506C932.679 12.6841 950.447 7.60418 968.354 3.15057C973.411 1.898 978.561 0.993362 983.664 0.274291C991.133 -0.792718 993.128 1.13254 991.411 8.55521Z"></path>
                      </svg>
                    </div>
                    <span>Vegetarian</span>
                  </button>
                  <button
                    type="button"
                    value="vegan"
                    data-cy="filter"
                    data-cy-id="filter__vegan"
                    className="filterButton"
                  >
                    <div className="iconWrapper available null">
                      <svg
                        width="60px"
                        height="60px"
                        viewBox="0 0 1024 1024"
                        style={{
                          display: "inline-block",
                          verticalAlign: "middle",
                        }}
                      >
                        <path d="M 13.085938 244.945312 C 8.453125 234.472656 14.632812 224 26.199219 224 L 104.882812 224 C 111.824219 224 116.449219 228.832031 117.992188 232.871094 L 266.097656 579.230469 L 271.496094 579.230469 L 419.597656 232.871094 C 421.136719 228.832031 425.773438 224 432.710938 224 L 511.386719 224 C 522.960938 224 529.128906 234.472656 524.503906 244.945312 L 285.378906 787.039062 C 283.0625 791.878906 279.214844 795.898438 272.269531 795.898438 L 264.550781 795.898438 C 257.613281 795.898438 253.757812 791.878906 251.441406 787.039062 Z M 13.085938 244.945312 M 629.851562 239.664062 C 629.851562 231.417969 636.398438 224 645.40625 224 L 978.59375 224 C 987.601562 224 994.152344 231.417969 994.152344 239.664062 L 994.152344 307.242188 C 994.152344 315.488281 987.601562 322.910156 978.59375 322.910156 L 736.269531 322.910156 L 736.269531 477.863281 L 938.484375 477.863281 C 946.667969 477.863281 954.035156 485.277344 954.035156 493.519531 L 954.035156 561.101562 C 954.035156 569.34375 946.667969 576.761719 938.484375 576.761719 L 736.269531 576.761719 C 736.269531 642.042969 736.269531 683.984375 736.269531 702.597656 C 736.269531 703.636719 925.757812 702.039062 979.875 702.292969 C 988.890625 702.335938 994.148438 710.847656 994.148438 717.4375 C 994.148438 721.832031 994.148438 744.449219 994.148438 785.289062 C 994.148438 793.53125 986.785156 800.949219 978.59375 800.949219 L 645.40625 800.949219 C 636.398438 800.949219 629.851562 793.53125 629.851562 785.289062 Z M 629.851562 239.664062"></path>
                      </svg>
                    </div>
                    <span>Vegan</span>
                  </button>
                  <button
                    className="clearButton"
                    tabIndex="0"
                    data-cy="filter__clear-btn"
                  >
                    Clear
                  </button>
                </div>
                <h5>
                  Allergens – Show options that do{" "}
                  <span className="underline">not</span> contain…
                </h5>
                <div className="filterGroup" data-cy="filters__diet">
                  <button
                    type="button"
                    value="milk"
                    data-cy="filter"
                    data-cy-id="filter__milk"
                    className="filterButton"
                  >
                    <div className="iconWrapper available null">
                      <svg
                        width="60px"
                        height="60px"
                        viewBox="0 0 1024 1024"
                        style={{
                          display: "inline-block",
                          verticalAlign: "middle",
                        }}
                      >
                        <path d="M683.111 947.36C683.111 957.997 674.618 966.52 666.103 966.52H338.545C325.783 966.52 319.403 962.247 319.403 947.36V430.042L270.491 372.562C264.11 383.199 261.975 395.972 261.975 408.745V949.474C261.975 989.93 296.014 1024 338.545 1024H663.968C706.523 1024 740.538 989.93 740.538 949.474V932.45L683.111 862.197V947.36ZM425.765 200.123V151.143H576.771V204.373C576.771 223.533 583.152 242.693 591.667 257.602L676.73 395.972C683.111 400.222 683.111 404.495 683.111 408.745V564.162L740.538 632.278V408.745C740.538 393.835 736.292 378.949 727.777 366.175L642.714 227.783C638.445 221.396 636.333 212.896 636.333 202.236V144.756C657.587 134.12 670.349 112.823 670.349 87.2764V63.8665C670.349 29.7966 644.826 0 610.81 0H391.727C359.822 0 332.164 27.6832 332.164 63.8665V87.2764C332.164 112.823 347.061 136.256 368.338 144.756V187.349L415.115 242.693C423.631 232.056 425.765 215.009 425.765 200.123ZM389.592 63.8665C389.592 59.6164 391.727 57.4798 391.727 57.4798H610.81C610.81 57.4798 612.921 59.6164 612.921 63.8665V87.2764C612.921 91.5497 610.81 93.6631 610.81 93.6631H391.727C391.727 93.6631 389.592 91.5497 389.592 87.2764V63.8665ZM938.344 964.384L742.673 730.214L683.111 662.075L381.1 302.309L342.814 257.602L136.493 10.6367C129.556 4.10901 120.485 0.32858 110.969 0C104.589 0 96.0731 2.13662 89.6922 8.52327C76.9305 19.1599 74.819 38.3199 87.5807 53.2298L308.776 315.082L347.061 361.902L683.111 762.148L740.538 830.264L887.298 1004.84C893.678 1013.34 902.194 1015.48 910.709 1015.48C917.09 1015.48 925.583 1013.34 931.964 1006.95C946.86 998.454 948.995 979.294 938.344 964.384Z"></path>
                      </svg>
                    </div>
                    <span>Milk</span>
                  </button>
                  <button
                    type="button"
                    value="treeNuts"
                    data-cy="filter"
                    data-cy-id="filter__treeNuts"
                    className="filterButton"
                  >
                    <div className="iconWrapper available null">
                      <svg
                        width="60px"
                        height="60px"
                        viewBox="0 0 1024 1024"
                        style={{
                          display: "inline-block",
                          verticalAlign: "middle",
                        }}
                      >
                        <path d="M573.859 211.084C573.859 183.901 546.141 163.002 514.141 163.002C482.141 163.002 454.4 183.901 454.4 211.06C454.4 238.243 482.141 259.142 514.141 259.142C548.259 259.142 573.859 238.266 573.859 211.084ZM610.141 309.295C578.141 309.295 550.4 330.193 550.4 357.353C550.4 384.512 578.141 405.411 610.141 405.411C642.141 405.411 669.859 384.512 669.859 357.353C669.859 330.193 642.141 309.295 610.141 309.295Z M503.459 60.6022C605.859 60.6022 708.259 117.039 789.341 219.439C866.141 315.555 913.059 438.854 913.059 549.609C913.059 626.944 889.6 700.09 849.059 762.787L891.741 812.94C945.059 737.699 977.059 647.843 977.059 549.609C977.059 426.31 925.859 290.49 842.659 183.901C746.659 64.7913 627.2 0 505.6 0C424.541 0 343.459 29.2538 273.059 81.5011L313.6 127.488C371.2 83.5956 437.341 60.6022 503.459 60.6022ZM503.459 946.688C277.341 946.688 96 769.047 96 549.609C96 457.681 128 359.447 181.341 271.686L138.659 221.51C72.5411 319.721 32 438.877 32 547.514C32 800.396 243.2 1007.29 503.459 1007.29C593.059 1007.29 678.4 982.202 748.8 940.404L708.259 892.346C648.541 925.789 578.141 946.665 503.459 946.665V946.688ZM936.541 961.303L849.059 858.903L808.541 810.845L413.859 346.903L345.6 267.497L262.4 169.286L221.859 123.299L136.541 20.8989C130.141 14.6153 123.741 10.4495 115.2 10.4495H113.059C104.541 10.4495 98.1411 12.544 91.7411 16.7331C85.3411 22.9935 81.0589 31.3484 78.9411 39.7033C78.9411 48.0815 81.0589 56.4131 85.3411 62.6967L217.6 219.439L761.6 858.903L802.141 904.89L887.459 1005.2C893.859 1011.48 900.259 1015.65 908.8 1015.65C917.341 1015.65 925.859 1013.55 932.259 1009.36C947.2 994.746 949.341 975.942 936.541 961.303Z"></path>
                      </svg>
                    </div>
                    <span>Tree Nut</span>
                  </button>
                  <button
                    type="button"
                    value="peanut"
                    data-cy="filter"
                    data-cy-id="filter__peanut"
                    className="filterButton"
                  >
                    <div className="iconWrapper available null">
                      <svg
                        width="60px"
                        height="60px"
                        viewBox="0 0 1024 1024"
                        style={{
                          display: "inline-block",
                          verticalAlign: "middle",
                        }}
                      >
                        <path d="M472.595 311.636C476.841 305.257 478.975 296.744 483.221 290.365C506.63 243.579 530.016 207.44 566.163 190.438C644.859 150.031 734.181 150.031 808.608 205.306C844.778 232.956 870.298 281.852 874.544 335.017C880.924 388.181 866.029 439.212 838.398 473.217C810.743 505.111 776.707 522.137 740.561 539.139L727.801 545.518C710.795 554.031 691.654 562.521 674.625 573.167L717.175 626.309C727.801 619.93 740.561 613.551 755.456 607.172L768.216 600.793C806.497 583.791 851.158 560.41 889.439 517.869C934.1 466.838 948.971 394.56 942.591 328.638C936.211 262.716 904.31 194.683 851.158 152.165C753.321 75.6192 636.344 81.998 538.531 128.761C481.109 158.544 449.209 213.819 425.799 258.471C423.688 260.605 423.688 264.85 421.554 266.984L468.349 322.259C466.215 320.125 468.349 315.88 472.595 311.636ZM461.969 836.81C385.407 892.108 285.436 872.972 179.108 832.565C166.348 794.292 153.588 749.64 149.342 704.989C142.962 653.958 149.342 607.172 174.863 573.167C213.143 524.248 251.424 498.732 287.571 477.485C300.331 471.106 310.957 466.838 321.606 460.459C323.717 460.459 323.717 458.349 325.852 458.349L281.191 405.184L255.67 417.942C213.143 441.323 166.348 471.106 121.687 530.626C81.2716 583.791 77.0259 649.713 83.4061 709.233C89.7862 766.643 106.792 821.941 119.553 862.325V864.459L123.821 879.351L138.693 885.73C247.155 930.381 387.519 968.654 500.25 887.84C538.531 860.214 570.431 817.673 593.818 777.29L549.157 721.991C523.636 770.911 495.981 813.429 461.969 836.81Z M721.449 322.155C744.83 330.67 755.477 341.296 761.856 349.811C766.101 358.303 768.235 364.683 770.346 371.064C772.48 375.333 772.48 377.444 774.614 381.713C778.859 390.205 787.371 394.474 795.861 392.34C804.374 388.094 808.619 379.579 806.508 371.064C806.508 368.952 804.374 366.818 804.374 364.683C801.373 352.583 796.338 341.082 789.482 330.67C778.859 313.64 761.856 298.768 732.073 288.118C723.583 286.007 712.936 290.253 710.825 298.768C706.557 309.394 712.936 317.909 721.449 322.155ZM321.716 724.121C313.203 721.986 302.579 726.255 300.445 734.747C298.311 743.262 302.579 753.888 311.069 756.023C334.474 764.538 345.097 775.164 351.476 783.679C355.721 792.171 357.855 798.551 359.989 804.932C362.1 809.201 362.1 811.312 364.234 815.581C368.479 824.073 376.991 828.342 385.504 826.207C393.994 821.962 398.262 813.447 396.128 804.932C396.128 802.82 393.994 800.686 393.994 798.551C391 786.453 385.973 774.951 379.125 764.538C370.613 749.642 351.476 732.636 321.716 724.121ZM919.193 970.822L664.039 664.563L621.521 611.408L506.702 473.15L472.674 432.756L430.156 383.825L385.504 330.67L121.838 11.6495C114.907 5.11973 105.838 1.33459 96.3223 1C89.9434 1 81.4306 3.13454 75.0517 7.38041C62.2941 20.1412 60.1832 39.2825 70.8069 54.1778L340.852 377.444L583.248 668.832L627.9 724.121L868.162 1013.37C874.541 1021.87 883.054 1024 893.678 1024C900.057 1024 908.569 1021.87 914.948 1017.62C927.706 1004.86 929.817 983.583 919.193 970.822Z"></path>
                      </svg>
                    </div>
                    <span>Peanut</span>
                  </button>
                  <button
                    type="button"
                    value="soya"
                    data-cy="filter"
                    data-cy-id="filter__soya"
                    className="filterButton"
                  >
                    <div className="iconWrapper available null">
                      <svg
                        width="60px"
                        height="60px"
                        viewBox="0 0 1024 1024"
                        style={{
                          display: "inline-block",
                          verticalAlign: "middle",
                        }}
                      >
                        <path d="M405.411 132.259C495.29 132.259 591.407 157.859 683.357 211.2C904.89 339.2 1005.2 582.4 906.962 750.941C896.331 768.135 884.461 784.531 871.447 800L915.34 855.459C934.144 836.259 950.854 812.8 965.492 787.2C1021.91 686.941 1024 565.341 975.942 443.741C927.86 326.4 833.839 221.859 714.705 151.459C614.4 93.8589 505.716 61.8589 401.222 61.8589C359.447 61.8589 319.744 66.1411 282.135 76.8L332.288 136.541C356.578 133.929 380.982 132.499 405.411 132.259ZM610.211 904.541C520.378 904.541 424.239 878.941 332.288 825.6C112.849 695.459 12.5207 454.4 108.66 283.741C121.591 262.092 137.027 242.04 154.647 224L110.755 170.659C85.6902 192 64.7913 217.6 50.1527 247.459C-6.26038 347.741 -10.4495 469.341 39.7033 590.941C87.7614 708.259 181.807 810.659 300.94 883.2C401.245 940.8 509.929 972.8 614.4 972.8C662.458 972.8 706.351 966.4 748.148 953.6L700.09 893.859C670.632 900.812 640.479 904.396 610.211 904.541Z M326.004 467.2C271.686 424.541 240.337 371.2 244.503 332.8L211.084 292.259C196.468 322.141 196.468 360.541 215.273 398.941C234.474 439.927 264.004 475.215 300.963 501.341C342.761 533.341 388.724 554.659 430.522 558.941L382.464 499.2C363.636 492.8 342.737 482.141 326.004 467.2ZM927.884 970.659L867.235 896L823.366 840.541L543.325 501.341L505.716 456.541L388.678 313.6L334.336 245.341L261.19 157.859L215.273 100.259L144.198 10.6589C137.914 4.25891 131.654 0 123.299 0H121.204C112.873 0 104.495 2.14109 100.305 6.4C94.0218 12.8 89.856 21.3411 87.7614 29.8589C87.7614 38.4 89.856 46.9411 94.0451 53.3411L158.836 132.259L202.705 187.741L254.953 251.741L284.207 288L317.649 328.541L432.593 469.341L470.202 516.259L499.456 552.541L812.94 930.141L879.802 1013.34C886.086 1019.74 892.346 1024 900.701 1024C909.079 1024 917.411 1021.86 923.695 1017.6C938.31 1004.8 940.404 985.6 927.884 970.659Z"></path>
                      </svg>
                    </div>
                    <span>Soybeans</span>
                  </button>
                  <button
                    className="clearButton"
                    tabIndex="0"
                    data-cy="filter__clear-btn"
                  >
                    Clear
                  </button>
                </div>
                <div className="CompactAccordion__AccordionContainer-sc-f26vom-0 ceBYQd closed">
                  <button
                    aria-expanded="false"
                    aria-controls="content-show-full-allergens-list"
                    className="CompactAccordion__AccordionHeader-sc-f26vom-1 jMHQDw"
                  >
                    Show Full Allergens List
                    <img
                      className="CompactAccordion__AccordionTitleIcon-sc-f26vom-2 gCkLSd"
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzIwNF80MjY0KSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNy4zNDMxNCAwLjUwMzQxOEM2LjU3NzA4IDAuNTAzNDE4IDUuOTU2MDUgMS4xMjQ0NCA1Ljk1NjA1IDEuODkwNTFWNS42MTI3OUgyLjIzMzc4SDIuMjA4NTNMMi4xODMzMSA1LjYxNDA3TDIuMTQzNzMgNS42MTYwN0wyLjExODM4IDUuNjE3MzVMMi4wOTMxMyA1LjYxOTkxQzEuMzkyNjYgNS42OTEwNyAwLjg0NjY4IDYuMjgxMDUgMC44NDY2OCA2Ljk5OTg5QzAuODQ2NjggNy43NjU5NyAxLjQ2NzcgOC4zODY5OSAyLjIzMzc4IDguMzg2OTlINS45NTYwNVYxMi4xMDkzVjEyLjEzNDZMNS45NTczMyAxMi4xNTk4TDUuOTU5MzMgMTIuMTk5NEw1Ljk2MDYxIDEyLjIyNDdMNS45NjMxNyAxMi4yNDk5QzYuMDM0MzEgMTIuOTUwNiA2LjYyNDQxIDEzLjQ5NjQgNy4zNDMxNCAxMy40OTY0QzguMTA5MiAxMy40OTY0IDguNzMwMjQgMTIuODc1NCA4LjczMDI0IDEyLjEwOTNWOC4zODY5OUgxMi40NTI3SDEyLjQ3OEwxMi41MDMyIDguMzg1NzFMMTIuNTQyNyA4LjM4MzcxTDEyLjU2OCA4LjM4MjQzTDEyLjU5MzIgOC4zNzk4N0MxMy4yOTM4IDguMzA4NzEgMTMuODM5NyA3LjcxODY2IDEzLjgzOTcgNi45OTk4OUMxMy44Mzk3IDYuMjM0IDEzLjIxODggNS42MTI3OSAxMi40NTI3IDUuNjEyNzlIOC43MzAyNFYxLjg5MDUxVjEuODY1MjZMOC43Mjg5NyAxLjg0MDA1TDguNzI2OTcgMS44MDA0N0w4LjcyNTY5IDEuNzc1MTRMOC43MjMxMyAxLjc0OTkxQzguNjUxOTkgMS4wNDkzNSA4LjA2MTkzIDAuNTAzNDE4IDcuMzQzMTQgMC41MDM0MThaIiBmaWxsPSIjNkQxRjM3Ii8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMjA0XzQyNjQiPgo8cmVjdCB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="
                      alt="Accordion toggle icon"
                    />
                  </button>
                </div>
              </div>
              <div className="categoryView__CalorieMessage-sc-1lvmz3e-0 caKoHX">
                <div className="calorieMessageWrapper">
                  <h5>Allergens Advice</h5>
                  <p className="calorieMessageText">
                    We cannot guarantee that any of our products are free from
                    allergens, due to the use of shared equipment in a busy
                    environment.
                  </p>
                  <p className="calorieMessageText">
                    Vegan products may not be suitable for persons with
                    allergies.
                  </p>
                  <p className="calorieMessageText">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik04IDBDMy41ODQgMCAwIDMuNTg0IDAgOHMzLjU4NCA4IDggOCA4LTMuNTg0IDgtOC0zLjU4NC04LTgtOHptLjggMTJINy4yVjcuMmgxLjZWMTJ6bTAtNi40SDcuMlY0aDEuNnYxLjZ6IiBmaWxsPSIjMjIyMzIyIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz4KPC9zdmc+Cg=="
                      alt="information icon"
                      className="calorieMessageIcon"
                    />
                    Adults need around 2000 kcal a day
                  </p>
                </div>
              </div>
              <div
                data-cy="category-list"
                className="productList__StyledProduct-sc-1vehefd-0 jhTJPl"
              >
                <h2 className="categoryHeader" data-cy="category-header">
                  Frappé
                </h2>
                <div className="container">
                  <div
                    data-cy="product-item"
                    data-cy-id="undefined"
                    tabIndex="0"
                    role="button"
                    className="productItem__Product-sc-1auekf6-0 jxXUwO"
                  >
                    <div className="image">
                      <img
                        src="https://mdm-assets.integration.costacoffee.com/vended-product/fc116e2b-547b-4cc4-b4b6-4c82fdb0898e/cookie-dough-thumb-new.jpg"
                        alt="Cookie Dough Frappé"
                      />
                    </div>
                    <div className="header">Cookie Dough Frappé</div>
                  </div>
                  <div
                    data-cy="product-item"
                    data-cy-id="undefined"
                    tabIndex="0"
                    role="button"
                    className="productItem__Product-sc-1auekf6-0 jxXUwO"
                  >
                    <div className="image">
                      <img
                        src="https://mdm-assets.integration.costacoffee.com/vended-product/c279af91-d4ae-4aab-9a9a-10e62a68ce18/Blueberry_Bubble_Frappe_Thumb.jpg"
                        alt="Blueberry Bubble Frappe"
                      />
                    </div>
                    <div className="header">Blueberry Bubble Frappe</div>
                  </div>
                  <div
                    data-cy="product-item"
                    data-cy-id="undefined"
                    tabIndex="0"
                    role="button"
                    className="productItem__Product-sc-1auekf6-0 jxXUwO"
                  >
                    <div className="image">
                      <img
                        src="https://mdm-assets.integration.costacoffee.com/vended-product/df6fce25-cc59-4f30-a645-3ef98fff652b/Raspberry_Bubble_Frappe_Thumb.jpg"
                        alt="Raspberry Mini-Bubble Frappe"
                      />
                    </div>
                    <div className="header">Raspberry Mini-Bubble Frappe</div>
                  </div>
                  <div
                    data-cy="product-item"
                    data-cy-id="undefined"
                    tabIndex="0"
                    role="button"
                    className="productItem__Product-sc-1auekf6-0 jxXUwO"
                  >
                    <div className="image">
                      <img
                        src="https://mdm-assets.integration.costacoffee.com/vended-product/ebe22988-1a40-45a9-b59a-792437ffa868/drinks/Tropical_mango_bubble_cream_Thumb.png"
                        alt="Tropical Mango Bubble Frappe"
                      />
                    </div>
                    <div className="header">Tropical Mango Bubble Frappe</div>
                  </div>
                  <div
                    data-cy="product-item"
                    data-cy-id="undefined"
                    tabIndex="0"
                    role="button"
                    className="productItem__Product-sc-1auekf6-0 jxXUwO"
                  >
                    <div className="image">
                      <img
                        src="https://mdm-assets.integration.costacoffee.com/vended-product/b9ba47fd-c40e-4ff9-abbf-773ae80ab264/strawberry_frsotino_thumb.jpg"
                        alt="Strawberries &amp; Cream Frappé"
                      />
                    </div>
                    <div className="header">
                      Strawberries &amp; Cream Frappé
                    </div>
                  </div>
                  <div
                    data-cy="product-item"
                    data-cy-id="undefined"
                    tabIndex="0"
                    role="button"
                    className="productItem__Product-sc-1auekf6-0 jxXUwO"
                  >
                    <div className="image">
                      <img
                        src="https://mdm-assets.integration.costacoffee.com/vended-product/497d9091-b8c7-4e6f-b897-5a4245890af9/Caramel_Frappe_Thumb.jpg"
                        alt="Salted Caramel Frappé"
                      />
                    </div>
                    <div className="header">Salted Caramel Frappé</div>
                  </div>
                  <div
                    data-cy="product-item"
                    data-cy-id="undefined"
                    tabIndex="0"
                    role="button"
                    className="productItem__Product-sc-1auekf6-0 jxXUwO"
                  >
                    <div className="image">
                      <img
                        src="https://mdm-assets.integration.costacoffee.com/vended-product/166e8186-1f45-4aa8-9260-fc2c6502295e/image_2024-05-14_102637042.png"
                        alt="Salted Caramel Frappé with Coffee"
                      />
                    </div>
                    <div className="header">
                      Salted Caramel Frappé with Coffee
                    </div>
                  </div>
                  <div
                    data-cy="product-item"
                    data-cy-id="undefined"
                    tabIndex="0"
                    role="button"
                    className="productItem__Product-sc-1auekf6-0 jxXUwO"
                  >
                    <div className="image">
                      <img
                        src="https://mdm-assets.integration.costacoffee.com/vended-product/503964e9-4cf6-41f8-8897-fdb1bac4c657/image_2024-05-14_102805506.png"
                        alt="Chocolate Fudge Brownie Frappé"
                      />
                    </div>
                    <div className="header">Chocolate Fudge Brownie Frappé</div>
                  </div>
                  <div
                    data-cy="product-item"
                    data-cy-id="undefined"
                    tabIndex="0"
                    role="button"
                    className="productItem__Product-sc-1auekf6-0 jxXUwO"
                  >
                    <div className="image">
                      <img
                        src="https://mdm-assets.integration.costacoffee.com/vended-product/62726998-8f90-40d8-9c1d-d432f211243a/Brownie_Frappe_Thumb.jpg"
                        alt="Chocolate Fudge Brownie Frappé Mocha"
                      />
                    </div>
                    <div className="header">
                      Chocolate Fudge Brownie Frappé Mocha
                    </div>
                  </div>
                  <div
                    data-cy="product-item"
                    data-cy-id="undefined"
                    tabIndex="0"
                    role="button"
                    className="productItem__Product-sc-1auekf6-0 jxXUwO"
                  >
                    <div className="image">
                      <img
                        src="https://mdm-assets.integration.costacoffee.com/vended-product/ebe22988-1a40-45a9-b59a-792437ffa868/drinks/Coffee_Frappe_cream_Thumb.png"
                        alt="Coffee Frappe"
                      />
                    </div>
                    <div className="header">Coffee Frappe</div>
                  </div>
                </div>
              </div>
              <div
                data-cy="category-list"
                className="productList__StyledProduct-sc-1vehefd-0 jhTJPl"
              >
                <h2
                  className="categoryHeader"
                  id="coffee-over-ice"
                  data-cy="category-header"
                >
                  Coffee Over Ice
                </h2>
                <div className="container">
                  <div
                    data-cy="product-item"
                    data-cy-id="undefined"
                    tabIndex="0"
                    role="button"
                    className="productItem__Product-sc-1auekf6-0 jxXUwO"
                  >
                    <div className="image">
                      <img
                        src="https://mdm-assets.integration.costacoffee.com/vended-product/7deefe87-f357-407d-96c5-81d8cc5a8b4a/Iced_Whipped_White_Chocolate_Latte_Thumb.jpg"
                        alt="Iced Whipped White Chocolate Latte"
                      />
                    </div>
                    <div className="header">
                      Iced Whipped White Chocolate Latte
                    </div>
                  </div>
                  <div
                    data-cy="product-item"
                    data-cy-id="undefined"
                    tabIndex="0"
                    role="button"
                    className="productItem__Product-sc-1auekf6-0 jxXUwO"
                  >
                    <div className="image">
                      <img
                        src="https://mdm-assets.integration.costacoffee.com/vended-product/717c55f6-3cc1-438c-8cd4-711f14c6df02/Iced_Whipped_Caramel_Latte_Thumb.jpg"
                        alt="Iced Whipped Caramel Latte"
                      />
                    </div>
                    <div className="header">Iced Whipped Caramel Latte</div>
                  </div>
                  <div
                    data-cy="product-item"
                    data-cy-id="undefined"
                    tabIndex="0"
                    role="button"
                    className="productItem__Product-sc-1auekf6-0 jxXUwO"
                  >
                    <div className="image">
                      <img
                        src="https://mdm-assets.integration.costacoffee.com/vended-product/13849fa8-0864-480c-8d13-8edd77e3bc94/Iced_Whipped_Choco_Latte_Thumb.jpg"
                        alt="Iced Whipped Choco Latte"
                      />
                    </div>
                    <div className="header">Iced Whipped Choco Latte</div>
                  </div>
                  <div
                    data-cy="product-item"
                    data-cy-id="undefined"
                    tabIndex="0"
                    role="button"
                    className="productItem__Product-sc-1auekf6-0 jxXUwO"
                  >
                    <div className="image">
                      <img
                        src="https://mdm-assets.integration.costacoffee.com/vended-product/ebe22988-1a40-45a9-b59a-792437ffa868/drinks/Iced_Latte_Thumb.png"
                        alt="Iced Latte"
                      />
                    </div>
                    <div className="header">Iced Latte</div>
                  </div>
                  <div
                    data-cy="product-item"
                    data-cy-id="undefined"
                    tabIndex="0"
                    role="button"
                    className="productItem__Product-sc-1auekf6-0 jxXUwO"
                  >
                    <div className="image">
                      <img
                        src="https://mdm-assets.integration.costacoffee.com/vended-product/fb1b9c4c-8b0e-42db-a14f-6fec7659a8b0/Iced_Americano_Black_Thumb.jpg"
                        alt="Iced Black Americano"
                      />
                    </div>
                    <div className="header">Iced Black Americano</div>
                  </div>
                  <div
                    data-cy="product-item"
                    data-cy-id="undefined"
                    tabIndex="0"
                    role="button"
                    className="productItem__Product-sc-1auekf6-0 jxXUwO"
                  >
                    <div className="image">
                      <img
                        src="https://mdm-assets.integration.costacoffee.com/vended-product/ebe22988-1a40-45a9-b59a-792437ffa868/drinks/Iced_Cappuccino_Thumb.png"
                        alt="Iced Cappuccino"
                      />
                    </div>
                    <div className="header">Iced Cappuccino</div>
                  </div>
                  <div
                    data-cy="product-item"
                    data-cy-id="undefined"
                    tabIndex="0"
                    role="button"
                    className="productItem__Product-sc-1auekf6-0 jxXUwO"
                  >
                    <div className="image">
                      <img
                        src="https://mdm-assets.integration.costacoffee.com/vended-product/ce5a43d8-e9c2-4936-8a09-cc4b14f3c750/Iced_Flat_White_Thumb.jpg"
                        alt="Iced Flat White"
                      />
                    </div>
                    <div className="header">Iced Flat White</div>
                  </div>
                  <div
                    data-cy="product-item"
                    data-cy-id="undefined"
                    tabIndex="0"
                    role="button"
                    className="productItem__Product-sc-1auekf6-0 jxXUwO"
                  >
                    <div className="image">
                      <img
                        src="https://mdm-assets.integration.costacoffee.com/vended-product/ebe22988-1a40-45a9-b59a-792437ffa868/drinks/Iced_Flat_Mocha_Thumb.png"
                        alt="Iced Mocha"
                      />
                    </div>
                    <div className="header">Iced Mocha</div>
                  </div>
                  <div
                    data-cy="product-item"
                    data-cy-id="undefined"
                    tabIndex="0"
                    role="button"
                    className="productItem__Product-sc-1auekf6-0 jxXUwO"
                  >
                    <div className="image">
                      <img
                        src="https://mdm-assets.integration.costacoffee.com/vended-product/ebe22988-1a40-45a9-b59a-792437ffa868/drinks/Iced_Cortado_Thumb.png"
                        alt="Iced Cortado"
                      />
                    </div>
                    <div className="header">Iced Cortado</div>
                  </div>
                </div>
              </div>
              <div
                data-cy="category-list"
                className="productList__StyledProduct-sc-1vehefd-0 jhTJPl"
              >
                <h2
                  className="categoryHeader"
                  id="drink"
                  data-cy="category-header"
                >
                  Coffee
                </h2>
                <div className="container">
                  <div
                    data-cy="product-item"
                    data-cy-id="undefined"
                    tabIndex="0"
                    role="button"
                    className="productItem__Product-sc-1auekf6-0 jxXUwO"
                  >
                    <div className="image">
                      <img
                        src="https://mdm-assets.integration.costacoffee.com/vended-product/890dee2c-85a1-4dd1-9422-78b81a43a0c4/Golden_Caramel_Latte_Macchiato-Thumb-NEW.png"
                        alt="Golden Caramel Latte Macchiato"
                      />
                    </div>
                    <div className="header">Golden Caramel Latte Macchiato</div>
                  </div>
                  <div
                    data-cy="product-item"
                    data-cy-id="undefined"
                    tabIndex="0"
                    role="button"
                    className="productItem__Product-sc-1auekf6-0 jxXUwO"
                  >
                    <div className="image">
                      <img
                        src="https://mdm-assets.integration.costacoffee.com/vended-product/d38fdcd7-5757-4ecd-963e-15fb99261ccc/Golden-Caramel-Iced-Latte-Macchiato-Thumb-NEW.png"
                        alt="Golden Caramel Iced Latte Macchiato"
                      />
                    </div>
                    <div className="header">
                      Golden Caramel Iced Latte Macchiato
                    </div>
                  </div>
                  <div
                    data-cy="product-item"
                    data-cy-id="undefined"
                    tabIndex="0"
                    role="button"
                    className="productItem__Product-sc-1auekf6-0 jxXUwO"
                  >
                    <div className="image">
                      <img
                        src="https://mdm-assets.integration.costacoffee.com/vended-product/ebe22988-1a40-45a9-b59a-792437ffa868/drinks/Flat_White_Thumb.png"
                        alt="Flat White"
                      />
                    </div>
                    <div className="header">Flat White</div>
                  </div>
                  <div
                    data-cy="product-item"
                    data-cy-id="undefined"
                    tabIndex="0"
                    role="button"
                    className="productItem__Product-sc-1auekf6-0 jxXUwO"
                  >
                    <div className="image">
                      <img
                        src="https://mdm-assets.integration.costacoffee.com/vended-product/3df03589-0367-4516-907c-58dda30bcb4c/Latte_Thumb.png"
                        alt="Latte"
                      />
                    </div>
                    <div className="header">Latte</div>
                  </div>
                  <div
                    data-cy="product-item"
                    data-cy-id="undefined"
                    tabIndex="0"
                    role="button"
                    className="productItem__Product-sc-1auekf6-0 jxXUwO"
                  >
                    <div className="image">
                      <img
                        src="https://mdm-assets.integration.costacoffee.com/vended-product/ebe22988-1a40-45a9-b59a-792437ffa868/drinks/Cappucino_Thumb.png"
                        alt="Cappuccino"
                      />
                    </div>
                    <div className="header">Cappuccino</div>
                  </div>
                  <div
                    data-cy="product-item"
                    data-cy-id="undefined"
                    tabIndex="0"
                    role="button"
                    className="productItem__Product-sc-1auekf6-0 jxXUwO"
                  >
                    <div className="image">
                      <img
                        src="https://mdm-assets.integration.costacoffee.com/vended-product/ebe22988-1a40-45a9-b59a-792437ffa868/drinks/Flat_Black_Thumb.png"
                        alt="Flat Black"
                      />
                    </div>
                    <div className="header">Flat Black</div>
                  </div>
                  <div
                    data-cy="product-item"
                    data-cy-id="undefined"
                    tabIndex="0"
                    role="button"
                    className="productItem__Product-sc-1auekf6-0 jxXUwO"
                  >
                    <div className="image">
                      <img
                        src="https://mdm-assets.integration.costacoffee.com/vended-product/67e9ce77-7189-426b-b52a-6a8b6673171d/Americano_Thumb.png"
                        alt="Americano"
                      />
                    </div>
                    <div className="header">Americano</div>
                  </div>
                  <div
                    data-cy="product-item"
                    data-cy-id="undefined"
                    tabIndex="0"
                    role="button"
                    className="productItem__Product-sc-1auekf6-0 jxXUwO"
                  >
                    <div className="image">
                      <img
                        src="https://mdm-assets.integration.costacoffee.com/vended-product/ebe22988-1a40-45a9-b59a-792437ffa868/drinks/Mocha_Thumb.png"
                        alt="Mocha"
                      />
                    </div>
                    <div className="header">Mocha</div>
                  </div>
                  <div
                    data-cy="product-item"
                    data-cy-id="undefined"
                    tabIndex="0"
                    role="button"
                    className="productItem__Product-sc-1auekf6-0 jxXUwO"
                  >
                    <div className="image">
                      <img
                        src="https://mdm-assets.integration.costacoffee.com/vended-product/ebe22988-1a40-45a9-b59a-792437ffa868/drinks/Cortado_Thumb.png"
                        alt="Cortado"
                      />
                    </div>
                    <div className="header">Cortado</div>
                  </div>
                  <div
                    data-cy="product-item"
                    data-cy-id="undefined"
                    tabIndex="0"
                    role="button"
                    className="productItem__Product-sc-1auekf6-0 jxXUwO"
                  >
                    <div className="image">
                      <img
                        src="https://mdm-assets.integration.costacoffee.com/vended-product/ebe22988-1a40-45a9-b59a-792437ffa868/drinks/Caramel_Cortado_Thumb.png"
                        alt="Caramel Cortado"
                      />
                    </div>
                    <div className="header">Caramel Cortado</div>
                  </div>
                  <div
                    data-cy="product-item"
                    data-cy-id="undefined"
                    tabIndex="0"
                    role="button"
                    className="productItem__Product-sc-1auekf6-0 jxXUwO"
                  >
                    <div className="image">
                      <img
                        src="https://mdm-assets.integration.costacoffee.com/vended-product/ebe22988-1a40-45a9-b59a-792437ffa868/drinks/Mocha_Cortado_Thumb.png"
                        alt="Mocha Cortado"
                      />
                    </div>
                    <div className="header">Mocha Cortado</div>
                  </div>
                  <div
                    data-cy="product-item"
                    data-cy-id="undefined"
                    tabIndex="0"
                    role="button"
                    className="productItem__Product-sc-1auekf6-0 jxXUwO"
                  >
                    <div className="image">
                      <img
                        src="https://mdm-assets.integration.costacoffee.com/vended-product/ebe22988-1a40-45a9-b59a-792437ffa868/drinks/Espresso_Thumb.png"
                        alt="Espresso"
                      />
                    </div>
                    <div className="header">Espresso</div>
                  </div>
                </div>
              </div>
              <div
                data-cy="category-list"
                className="productList__StyledProduct-sc-1vehefd-0 jhTJPl"
              >
                <h2 className="categoryHeader" data-cy="category-header">
                  Other Cold Drinks
                </h2>
                <div className="container">
                  <div
                    data-cy="product-item"
                    data-cy-id="undefined"
                    tabIndex="0"
                    role="button"
                    className="productItem__Product-sc-1auekf6-0 jxXUwO"
                  >
                    <div className="image">
                      <img
                        src="https://mdm-assets.integration.costacoffee.com/vended-product/89ab4891-a44e-448d-bc97-67dacb1f7f95/Pink_Lemonade_Thumb.jpg"
                        alt="Pink Lemonade"
                      />
                    </div>
                    <div className="header">Pink Lemonade</div>
                  </div>
                  <div
                    data-cy="product-item"
                    data-cy-id="undefined"
                    tabIndex="0"
                    role="button"
                    className="productItem__Product-sc-1auekf6-0 jxXUwO"
                  >
                    <div className="image">
                      <img
                        src="https://mdm-assets.integration.costacoffee.com/vended-product/907b2374-5ab3-402e-ad83-5fc7bc73d438/Still_Lemonade_Thumb.jpg"
                        alt="Still Lemonade"
                      />
                    </div>
                    <div className="header">Still Lemonade</div>
                  </div>
                  <div
                    data-cy="product-item"
                    data-cy-id="undefined"
                    tabIndex="0"
                    role="button"
                    className="productItem__Product-sc-1auekf6-0 jxXUwO"
                  >
                    <div className="image">
                      <img
                        src="https://mdm-assets.integration.costacoffee.com/vended-product/db2d1598-8fef-4323-9515-8d8bba211ee6/Watermelon_Mint_Refresher_Thumb.jpg"
                        alt="Watermelon &amp; Mint Refresher"
                      />
                    </div>
                    <div className="header">
                      Watermelon &amp; Mint Refresher
                    </div>
                  </div>
                  <div
                    data-cy="product-item"
                    data-cy-id="undefined"
                    tabIndex="0"
                    role="button"
                    className="productItem__Product-sc-1auekf6-0 jxXUwO"
                  >
                    <div className="image">
                      <img
                        src="https://mdm-assets.integration.costacoffee.com/vended-product/d70ecee4-51af-4da9-abf3-52b8f0b69c87/Rhubarb_Apple_Refresher_Thumb.jpg"
                        alt="Apple &amp; Rhubarb Refresher"
                      />
                    </div>
                    <div className="header">Apple &amp; Rhubarb Refresher</div>
                  </div>
                </div>
              </div>
              <div
                data-cy="category-list"
                className="productList__StyledProduct-sc-1vehefd-0 jhTJPl"
              >
                <h2 className="categoryHeader" data-cy="category-header">
                  Other Hot Drinks
                </h2>
                <div className="container">
                  <div
                    data-cy="product-item"
                    data-cy-id="undefined"
                    tabIndex="0"
                    role="button"
                    className="productItem__Product-sc-1auekf6-0 jxXUwO"
                  >
                    <div className="image">
                      <img
                        src="https://mdm-assets.integration.costacoffee.com/vended-product/d3780fd8-6249-4db8-9ed6-7d23ca69b7b6/image_2023-12-19_092244334.png"
                        alt="White Chocolate &amp; Strawberry Hot Milkshake"
                      />
                    </div>
                    <div className="header">
                      White Chocolate &amp; Strawberry Hot Milkshake
                    </div>
                  </div>
                  <div
                    data-cy="product-item"
                    data-cy-id="undefined"
                    tabIndex="0"
                    role="button"
                    className="productItem__Product-sc-1auekf6-0 jxXUwO"
                  >
                    <div className="image">
                      <img
                        src="https://mdm-assets.integration.costacoffee.com/vended-product/a4beccd2-116e-4648-bf05-1b35d40bdbc6/image_2023-12-19_092348698.png"
                        alt="Salted Caramel Coffee Hot Milkshake"
                      />
                    </div>
                    <div className="header">
                      Salted Caramel Coffee Hot Milkshake
                    </div>
                  </div>
                  <div
                    data-cy="product-item"
                    data-cy-id="undefined"
                    tabIndex="0"
                    role="button"
                    className="productItem__Product-sc-1auekf6-0 jxXUwO"
                  >
                    <div className="image">
                      <img
                        src="https://mdm-assets.integration.costacoffee.com/vended-product/fadaa46e-b519-4d7d-bab5-d6a4ac4cd55a/image_2023-12-19_092504356.png"
                        alt="Chocolate Hazel Hot Milkshake"
                      />
                    </div>
                    <div className="header">Chocolate Hazel Hot Milkshake</div>
                  </div>
                  <div
                    data-cy="product-item"
                    data-cy-id="undefined"
                    tabIndex="0"
                    role="button"
                    className="productItem__Product-sc-1auekf6-0 jxXUwO"
                  >
                    <div className="image">
                      <img
                        src="https://mdm-assets.integration.costacoffee.com/vended-product/ebe22988-1a40-45a9-b59a-792437ffa868/drinks/Hot_Choc_Thumb.png"
                        alt="Hot Chocolate"
                      />
                    </div>
                    <div className="header">Hot Chocolate</div>
                  </div>
                  <div
                    data-cy="product-item"
                    data-cy-id="undefined"
                    tabIndex="0"
                    role="button"
                    className="productItem__Product-sc-1auekf6-0 jxXUwO"
                  >
                    <div className="image">
                      <img
                        src="https://mdm-assets.integration.costacoffee.com/vended-product/ebe22988-1a40-45a9-b59a-792437ffa868/drinks/White_Hot_Choc_Thumb.png"
                        alt="White Hot Chocolate"
                      />
                    </div>
                    <div className="header">White Hot Chocolate</div>
                  </div>
                  <div
                    data-cy="product-item"
                    data-cy-id="undefined"
                    tabIndex="0"
                    role="button"
                    className="productItem__Product-sc-1auekf6-0 jxXUwO"
                  >
                    <div className="image">
                      <img
                        src="https://mdm-assets.integration.costacoffee.com/vended-product/ebe22988-1a40-45a9-b59a-792437ffa868/drinks/Chai_Latte_Thumb.png"
                        alt="Chai Latte"
                      />
                    </div>
                    <div className="header">Chai Latte</div>
                  </div>
                  <div
                    data-cy="product-item"
                    data-cy-id="undefined"
                    tabIndex="0"
                    role="button"
                    className="productItem__Product-sc-1auekf6-0 jxXUwO"
                  >
                    <div className="image">
                      <img
                        src="https://mdm-assets.integration.costacoffee.com/vended-product/ebe22988-1a40-45a9-b59a-792437ffa868/drinks/Babyccino_Thumb.png"
                        alt="Milk Babyccino"
                      />
                    </div>
                    <div className="header">Milk Babyccino</div>
                  </div>
                </div>
              </div>
              <div
                data-cy="category-list"
                className="productList__StyledProduct-sc-1vehefd-0 jhTJPl"
              >
                <h2 className="categoryHeader" data-cy="category-header">
                  Iced Tea
                </h2>
                <div className="container">
                  <div
                    data-cy="product-item"
                    data-cy-id="undefined"
                    tabIndex="0"
                    role="button"
                    className="productItem__Product-sc-1auekf6-0 jxXUwO"
                  >
                    <div className="image">
                      <img
                        src="https://mdm-assets.integration.costacoffee.com/vended-product/0881ffe2-2727-4e08-b10b-9ba4831f539d/Blueberry_Burst_Bubble_Thumb.jpg"
                        alt="Blueberry Burst Bubble Tea"
                      />
                    </div>
                    <div className="header">Blueberry Burst Bubble Tea</div>
                  </div>
                  <div
                    data-cy="product-item"
                    data-cy-id="undefined"
                    tabIndex="0"
                    role="button"
                    className="productItem__Product-sc-1auekf6-0 jxXUwO"
                  >
                    <div className="image">
                      <img
                        src="https://mdm-assets.integration.costacoffee.com/vended-product/dbc87de7-b16f-4e77-ba3b-b3415209ebd2/Redberry_Mango_Bubble_Tea.jpg"
                        alt="Mango Berry Bubble Tea"
                      />
                    </div>
                    <div className="header">Mango Berry Bubble Tea</div>
                  </div>
                  <div
                    data-cy="product-item"
                    data-cy-id="undefined"
                    tabIndex="0"
                    role="button"
                    className="productItem__Product-sc-1auekf6-0 jxXUwO"
                  >
                    <div className="image">
                      <img
                        src="https://mdm-assets.integration.costacoffee.com/vended-product/9e1fe4be-70a9-4fed-88ad-5157ef133f0c/image_2023-12-19_092430235.png"
                        alt="Peach Ice Tea"
                      />
                    </div>
                    <div className="header">Peach Ice Tea</div>
                  </div>
                </div>
              </div>
              <div
                data-cy="category-list"
                className="productList__StyledProduct-sc-1vehefd-0 jhTJPl"
              >
                <h2 className="categoryHeader" data-cy="category-header">
                  Tea
                </h2>
                <div className="container">
                  <div
                    data-cy="product-item"
                    data-cy-id="undefined"
                    tabIndex="0"
                    role="button"
                    className="productItem__Product-sc-1auekf6-0 jxXUwO"
                  >
                    <div className="image">
                      <img
                        src="https://mdm-assets.integration.costacoffee.com/vended-product/ebe22988-1a40-45a9-b59a-792437ffa868/drinks/English_Breakfast_Tea_Thumb.jpg"
                        alt="English Breakfast Tea"
                      />
                    </div>
                    <div className="header">English Breakfast Tea</div>
                  </div>
                  <div
                    data-cy="product-item"
                    data-cy-id="undefined"
                    tabIndex="0"
                    role="button"
                    className="productItem__Product-sc-1auekf6-0 jxXUwO"
                  >
                    <div className="image">
                      <img
                        src="https://mdm-assets.integration.costacoffee.com/vended-product/a1930ef2-fe0a-4bd1-90d6-fd493ca084f4/image_2024-01-24_093414640.png"
                        alt="Decaf Tea"
                      />
                    </div>
                    <div className="header">Decaf Tea</div>
                  </div>
                  <div
                    data-cy="product-item"
                    data-cy-id="undefined"
                    tabIndex="0"
                    role="button"
                    className="productItem__Product-sc-1auekf6-0 jxXUwO"
                  >
                    <div className="image">
                      <img
                        src="https://mdm-assets.integration.costacoffee.com/vended-product/ebe22988-1a40-45a9-b59a-792437ffa868/drinks/Earl_Grey_Thumb.jpg"
                        alt="Earl Grey Tea"
                      />
                    </div>
                    <div className="header">Earl Grey Tea</div>
                  </div>
                  <div
                    data-cy="product-item"
                    data-cy-id="undefined"
                    tabIndex="0"
                    role="button"
                    className="productItem__Product-sc-1auekf6-0 jxXUwO"
                  >
                    <div className="image">
                      <img
                        src="https://mdm-assets.integration.costacoffee.com/vended-product/ebe22988-1a40-45a9-b59a-792437ffa868/drinks/Green_Tea_Thumb_Fuze_Logo.jpg"
                        alt="Green Tea"
                      />
                    </div>
                    <div className="header">Green Tea</div>
                  </div>
                  <div
                    data-cy="product-item"
                    data-cy-id="undefined"
                    tabIndex="0"
                    role="button"
                    className="productItem__Product-sc-1auekf6-0 jxXUwO"
                  >
                    <div className="image">
                      <img
                        src="https://mdm-assets.integration.costacoffee.com/vended-product/ebe22988-1a40-45a9-b59a-792437ffa868/drinks/Mint_Infusion_Thumb_Fuze_Logo.jpg"
                        alt="Mint Tea"
                      />
                    </div>
                    <div className="header">Mint Tea</div>
                  </div>
                  <div
                    data-cy="product-item"
                    data-cy-id="undefined"
                    tabIndex="0"
                    role="button"
                    className="productItem__Product-sc-1auekf6-0 jxXUwO"
                  >
                    <div className="image">
                      <img
                        src="https://mdm-assets.integration.costacoffee.com/vended-product/ebe22988-1a40-45a9-b59a-792437ffa868/drinks/Berry_Infusion_Thumb_Fuze_Logo.jpg"
                        alt="Superfruity Infusion"
                      />
                    </div>
                    <div className="header">Superfruity Infusion</div>
                  </div>
                  <div
                    data-cy="product-item"
                    data-cy-id="undefined"
                    tabIndex="0"
                    role="button"
                    className="productItem__Product-sc-1auekf6-0 jxXUwO"
                  >
                    <div className="image">
                      <img
                        src="https://mdm-assets.integration.costacoffee.com/vended-product/9108f97f-f080-4b3c-b2a0-4ffa5f94332e/Citrus_Zing_Superfuzions_Thumb.jpg"
                        alt="Citrus Zing with Vitamin C"
                      />
                    </div>
                    <div className="header">Citrus Zing with Vitamin C</div>
                  </div>
                  <div
                    data-cy="product-item"
                    data-cy-id="undefined"
                    tabIndex="0"
                    role="button"
                    className="productItem__Product-sc-1auekf6-0 jxXUwO"
                  >
                    <div className="image">
                      <img
                        src="https://mdm-assets.integration.costacoffee.com/vended-product/7ec3854b-b2ff-4b8c-9053-178470835d1d/Spiced_Apple_Superfuzions_Thumb.jpg"
                        alt="Spiced Apple with Vitamin B6"
                      />
                    </div>
                    <div className="header">Spiced Apple with Vitamin B6</div>
                  </div>
                  <div
                    data-cy="product-item"
                    data-cy-id="undefined"
                    tabIndex="0"
                    role="button"
                    className="productItem__Product-sc-1auekf6-0 jxXUwO"
                  >
                    <div className="image">
                      <img
                        src="https://mdm-assets.integration.costacoffee.com/vended-product/03066bc4-ad81-40cd-ad5b-d7c6875d94c2/Mellow_Mango_Superfuzions_Thumb.jpg"
                        alt="Mellow Mango with Zinc"
                      />
                    </div>
                    <div className="header">Mellow Mango with Zinc</div>
                  </div>
                </div>
              </div>
              <div
                data-cy="category-list"
                className="productList__StyledProduct-sc-1vehefd-0 jhTJPl"
              >
                <h2 className="categoryHeader" data-cy="category-header">
                  Fruit Coolers
                </h2>
                <div className="container">
                  <div
                    data-cy="product-item"
                    data-cy-id="undefined"
                    tabIndex="0"
                    role="button"
                    className="productItem__Product-sc-1auekf6-0 jxXUwO"
                  >
                    <div className="image">
                      <img
                        src="https://mdm-assets.integration.costacoffee.com/vended-product/ebe22988-1a40-45a9-b59a-792437ffa868/drinks/Mango_Passion_Fruit_Cooler_Thumb.png"
                        alt="Mango &amp; Passion Fruit Cooler"
                      />
                    </div>
                    <div className="header">
                      Mango &amp; Passion Fruit Cooler
                    </div>
                  </div>
                  <div
                    data-cy="product-item"
                    data-cy-id="undefined"
                    tabIndex="0"
                    role="button"
                    className="productItem__Product-sc-1auekf6-0 jxXUwO"
                  >
                    <div className="image">
                      <img
                        src="https://mdm-assets.integration.costacoffee.com/vended-product/ebe22988-1a40-45a9-b59a-792437ffa868/drinks/Red_Summer_Berries_Fruit_Cooler_Thumb.png"
                        alt="Red Summer Berries"
                      />
                    </div>
                    <div className="header">Red Summer Berries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

// export default Menu;
