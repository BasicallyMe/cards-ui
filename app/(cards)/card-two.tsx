export default function CardTwo() {
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
  );
}
