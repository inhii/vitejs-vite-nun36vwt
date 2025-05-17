export function Header() {
  return (
    <header className="flex flex-col justify-center self-stretch px-6 py-2 w-full border-b border-slate-200 max-md:pl-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full">
        <div className="self-stretch my-auto w-96 min-w-60">
          <div className="w-full">
            <div className="flex gap-3 px-3 py-3.5 w-full rounded-lg border border-solid border-slate-200">
              <div className="flex overflow-hidden justify-center items-center min-h-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc4a3b7bdb90c652ba173692070e9b8073231b57?placeholderIfAbsent=true&apiKey=823bf4beb2774bc99c68daa06d856dec"
                  alt="Search"
                  className="object-contain self-stretch my-auto w-4 aspect-square"
                />
              </div>
              <input
                type="text"
                placeholder="Tìm kiếm"
                className="flex-auto text-base text-gray-400 w-[329px] bg-transparent border-none outline-none"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-3.5 items-center self-stretch my-auto">
          <button>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4308a9543181854386bcef9853af2856a4b2178?placeholderIfAbsent=true&apiKey=823bf4beb2774bc99c68daa06d856dec"
              alt="Menu item 1"
              className="object-contain shrink-0 self-stretch my-auto w-12 aspect-square"
            />
          </button>
          <button>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d1f4e353546c9f947947d160ff6a591418dbf88?placeholderIfAbsent=true&apiKey=823bf4beb2774bc99c68daa06d856dec"
              alt="Menu item 2"
              className="object-contain shrink-0 self-stretch my-auto w-12 aspect-square"
            />
          </button>
          <button>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/617d1422640842d062111c7ddc765409385efd05?placeholderIfAbsent=true&apiKey=823bf4beb2774bc99c68daa06d856dec"
              alt="Menu item 3"
              className="object-contain shrink-0 self-stretch my-auto w-12 aspect-square"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
