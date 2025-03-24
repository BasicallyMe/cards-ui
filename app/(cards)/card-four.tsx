export default function CardFour() {
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
  );
}
