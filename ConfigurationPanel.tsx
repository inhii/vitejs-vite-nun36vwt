export function ConfigurationPanel() {
  return (
    <section className="flex flex-col gap-4 w-full max-w-[1095px]">
      <header className="flex flex-col justify-center px-5 py-2.5 mt-9 w-full text-base font-semibold leading-none text-black rounded-xl border border-solid border-slate-200 min-h-[46px] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] max-md:max-w-full">
        <h1 className="overflow-hidden py-1.5 w-full max-md:pr-5 max-md:max-w-full">
          Cấu hình hệ thống
        </h1>
      </header>

      <div className="px-5 py-5 max-w-full rounded-none border border-solid border-slate-200 shadow-[0px_1px_2px_rgba(0,0,0,0.05)] w-[1095px] max-md:pr-5">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[59%] max-md:ml-0 max-md:w-full">
            <dl className="flex flex-col grow justify-center text-base font-medium leading-none min-h-[213px] text-slate-500 max-md:mt-5">
              <div className="flex flex-col gap-5">
                <div>
                  <dt className="overflow-hidden py-1.5 w-full max-md:pr-5">
                    Thời hạn hệ thống
                  </dt>
                </div>
                <div>
                  <dt className="overflow-hidden py-1.5 w-full max-md:pr-5">
                    Email hệ thống
                  </dt>
                </div>
                <div>
                  <dt className="overflow-hidden py-1.5 w-full max-md:pr-5">
                    SMTP Server
                  </dt>
                </div>
                <div>
                  <dt className="overflow-hidden py-1.5 w-full max-md:pr-5">
                    Quyền hạn mặc định
                  </dt>
                </div>
                <div>
                  <dt className="overflow-hidden pb-2.5 w-full max-md:pr-5">
                    Giao diện hệ thống
                  </dt>
                </div>
              </div>
            </dl>
          </div>

          <div className="ml-5 w-[41%] max-md:ml-0 max-md:w-full">
            <dl className="flex flex-col items-start mt-2 w-full text-base leading-none text-black max-md:mt-7">
              <div className="flex flex-col gap-8 w-full">
                <dd className="self-stretch">01/01/2025 - 30/06/2025</dd>
                <dd className="self-stretch max-md:mr-2.5">
                  system@domain.edu.vn
                </dd>
                <dd>smtp.domain.edu.vn</dd>
                <dd className="flex gap-1">
                  <span>Sinh viên</span>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5bc55a0eda57ee4494986a2e5da0f0b8533532f6?placeholderIfAbsent=true&apiKey=823bf4beb2774bc99c68daa06d856dec"
                    alt=""
                    className="object-contain shrink-0 self-start w-3.5 aspect-square"
                  />
                </dd>
                <dd className="flex gap-3.5">
                  <span>Sáng / Tối</span>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5bc55a0eda57ee4494986a2e5da0f0b8533532f6?placeholderIfAbsent=true&apiKey=823bf4beb2774bc99c68daa06d856dec"
                    alt=""
                    className="object-contain shrink-0 self-start w-3.5 aspect-square"
                  />
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
