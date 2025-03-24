import CardOne from "./card-one";
import CardTwo from "./card-two";
import CardThree from "./card-three";
import CardFour from "./card-four";

const cards = [
  {
    name: "lagoon",
    code: `
        <div className="w-72 h-44 rounded-2xl relative overflow-hidden">
      <div className="z-10 relative w-full h-full py-3 px-3 flex flex-col justify-between">
        <svg
          width="45"
          height="28"
          viewBox="0 0 45 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="30" cy="14" r="12" fill="#FFAE00" />
          <circle cx="16" cy="14" r="12" fill="#EB001B" />
        </svg>
        <div className="text-black">
          <span className="uppercase text-tiny text-black/80">Card Number</span>
          <div className="text-md font-semibold flex gap-3">
            <span>3829</span>
            <span>4820</span>
            <span>4629</span>
            <span>5025</span>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="text-black">
            <span className="uppercase text-tiny text-black/80">
              Card Holder Name
            </span>
            <div className="text-xs font-semibold">Jane Doe</div>
          </div>
          <div className="text-black">
            <span className="uppercase text-tiny text-black/80">
              Valid thru
            </span>
            <div className="text-xs font-semibold">12/25</div>
          </div>
        </div>
      </div>
      <div className="absolute w-full h-full bottom-0 bg-gray-100 z-0 pointer-events-none">
        <svg
          width="320"
          height="176"
          viewBox="0 0 320 176"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_17_12)">
            <path
              d="M106 86C74.4 46.8 22.5 83.3333 0.5 106.5V188H322V92C315.5 100.167 295.5 111.6 267.5 92C232.5 67.5 206.5 95.5 188.5 113C170.5 130.5 145.5 135 106 86Z"
              fill="#ECD8CA"
            />
            <path
              d="M148.5 103.5C96.9 73.9 27.3333 99.5 -1 116V172.5H329V109.5C329 95 339 112.6 303 95C258 73 213 140.5 148.5 103.5Z"
              fill="#0161F4"
            />
            <path
              d="M80.5 89.5C46.5 23.5 12.3333 58.6667 -0.5 84.5V180H320V109C317.333 96.3333 306.3 76.2 283.5 97C255 123 245 112 194 89.5C143 67 123 172 80.5 89.5Z"
              fill="#2B7FFF"
            />
          </g>
          <defs>
            <clipPath id="clip0_17_12">
              <rect width="320" height="176" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
        `,
    component: CardOne,
  },
  {
    name: "coral",
    code: `
        <div className="w-72 h-44 rounded-2xl relative overflow-hidden">
      <div className="z-10 relative w-full h-full py-3 px-3 flex flex-col justify-between">
        <svg
          width="45"
          height="28"
          viewBox="0 0 45 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="30" cy="14" r="12" fill="white" fillOpacity="0.5" />
          <circle cx="16" cy="14" r="12" fill="white" />
        </svg>

        <div className="text-white">
          <span className="uppercase text-tiny text-white">Card Number</span>
          <div className="text-md font-semibold flex gap-3">
            <span>3829</span>
            <span>4820</span>
            <span>4629</span>
            <span>5025</span>
          </div>
        </div>
        <div className="flex justify-between text-white">
          <div className="">
            <span className="uppercase text-tiny">
              Card Holder Name
            </span>
            <div className="text-xs font-semibold">Jane Doe</div>
          </div>
          <div className="">
            <span className="uppercase text-tiny">
              Valid thru
            </span>
            <div className="text-xs font-semibold">12/25</div>
          </div>
        </div>
      </div>
      <div className="absolute w-full h-full bottom-0 bg-gray-100 z-0 pointer-events-none">
        <svg
          width="292"
          height="176"
          viewBox="0 0 292 176"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_18_17)">
            <rect
              width="167"
              height="176"
              transform="translate(125)"
              fill="#EAE0BB"
            />
            <path
              d="M204 196.5C204 158.707 188.987 122.461 162.263 95.7373C135.539 69.0134 99.2934 54 61.5 54C23.7067 54 -12.5388 69.0133 -39.2627 95.7373C-65.9866 122.461 -81 158.707 -81 196.5L61.5 196.5H204Z"
              fill="#76D2B6"
            />
            <path
              d="M308 -48C308 -25.9379 303.344 -4.09188 294.298 16.2908C285.252 36.6735 271.994 55.1937 255.279 70.7939C238.565 86.3942 218.722 98.769 196.883 107.212C175.044 115.655 151.638 120 128 120C104.362 120 80.9556 115.655 59.117 107.212C37.2784 98.769 17.4353 86.3942 0.720771 70.7939C-15.9938 55.1937 -29.2525 36.6735 -38.2983 16.2908C-47.3442 -4.0919 -52 -25.9379 -52 -48L128 -48H308Z"
              fill="#F89D9D"
            />
          </g>
          <defs>
            <clipPath id="clip0_18_17">
              <rect width="292" height="176" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
        `,
    component: CardTwo,
  },
  {
    name: "dune",
    code: `
    <div className="w-72 h-44 rounded-2xl relative overflow-hidden">
      <div className="z-10 relative w-full h-full py-3 px-3 flex flex-col justify-between">
        <svg
          width="45"
          height="28"
          viewBox="0 0 45 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="30" cy="14" r="12" fill="white" fillOpacity="0.5" />
          <circle cx="16" cy="14" r="12" fill="white" />
        </svg>

        <div className="text-white">
          <span className="uppercase text-tiny text-white">Card Number</span>
          <div className="text-md font-semibold flex gap-3">
            <span>3829</span>
            <span>4820</span>
            <span>4629</span>
            <span>5025</span>
          </div>
        </div>
        <div className="flex justify-between text-white">
          <div className="">
            <span className="uppercase text-tiny">Card Holder Name</span>
            <div className="text-xs font-semibold">Jane Doe</div>
          </div>
          <div className="">
            <span className="uppercase text-tiny">Valid thru</span>
            <div className="text-xs font-semibold">12/25</div>
          </div>
        </div>
      </div>
      <div className="absolute w-full h-full bottom-0 bg-gray-100 z-0 pointer-events-none">
        <svg
          width="292"
          height="176"
          viewBox="0 0 292 176"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_19_28)">
            <rect width="292" height="176" fill="#FFA16A" />
            <rect
              x="42"
              y="66.2393"
              width="51"
              height="51"
              rx="7"
              transform="rotate(-34.982 42 66.2393)"
              fill="#9558FF"
            />
            <rect
              x="182.202"
              y="37"
              width="156.082"
              height="156.082"
              rx="11"
              transform="rotate(9.90865 182.202 37)"
              fill="#FFDEAF"
            />
          </g>
          <defs>
            <clipPath id="clip0_19_28">
              <rect width="292" height="176" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
    `,
    component: CardThree,
  },
  {
    name: "ocean",
    code: `
    <div className="w-72 h-44 rounded-2xl relative overflow-hidden">
      <div className="z-10 relative w-full h-full py-3 px-3 flex flex-col justify-between">
        <svg
          width="45"
          height="28"
          viewBox="0 0 45 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="30" cy="14" r="12" fill="#FFAE00" />
          <circle cx="16" cy="14" r="12" fill="#EB001B" />
        </svg>

        <div className="text-white">
          <span className="uppercase text-tiny text-white">Card Number</span>
          <div className="text-md font-semibold flex gap-3">
            <span>3829</span>
            <span>4820</span>
            <span>4629</span>
            <span>5025</span>
          </div>
        </div>
        <div className="flex justify-between text-white">
          <div className="">
            <span className="uppercase text-tiny">Card Holder Name</span>
            <div className="text-xs font-semibold">Jane Doe</div>
          </div>
          <div className="">
            <span className="uppercase text-tiny">Valid thru</span>
            <div className="text-xs font-semibold">12/25</div>
          </div>
        </div>
      </div>
      <div className="absolute w-full h-full bottom-0 bg-gray-100 z-0 pointer-events-none">
        <svg
          width="292"
          height="176"
          viewBox="0 0 292 176"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_20_34)">
            <rect width="292" height="176" fill="#35398B" />
            <path
              d="M-0.5 114C37 93.8333 87.6915 63.2741 185.5 148C261.914 214.193 436.4 190.354 555.844 144.78L565.5 141C562.324 142.275 559.105 143.536 555.844 144.78L227 273.5L-0.5 208V114Z"
              fill="#56CBD5"
            />
          </g>
          <defs>
            <clipPath id="clip0_20_34">
              <rect width="292" height="176" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
    `,
    component: CardFour,
  },
];

export default cards;
