export default function CardThree() {
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
  );
}
