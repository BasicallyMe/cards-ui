export default function CardOne() {
  return (
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
  );
}
