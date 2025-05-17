"use client";
import * as React from "react";

export function Sidebar() {
  return (
    <aside className="grow pb-[560px] max-md:pb-24">
      <div className="flex flex-col justify-center px-9 py-4 border-b bg-black bg-opacity-0 border-slate-200 max-md:px-5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f97f13d9cd69d09e5640a65bf4466139ca5ca8ae?placeholderIfAbsent=true&apiKey=823bf4beb2774bc99c68daa06d856dec"
          alt="Logo"
          className="object-contain aspect-[5.68] w-[182px]"
        />
      </div>
      <nav className="flex flex-col px-4 py-4 bg-black bg-opacity-0">
        <ul className="w-full bg-black bg-opacity-0">
          <li className="w-full text-base font-semibold bg-black bg-opacity-0 text-slate-600">
            <a
              href="#"
              className="flex gap-3 py-3 pr-11 pl-4 rounded-lg bg-blue-50 bg-opacity-0 max-md:pr-5"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/eab83ce3769a682628746e736e2c44dbf0bdad9e?placeholderIfAbsent=true&apiKey=823bf4beb2774bc99c68daa06d856dec"
                alt=""
                className="object-contain shrink-0 my-auto w-4 aspect-square"
              />
              <span className="py-1">Trang chủ</span>
            </a>
          </li>
          <li className="flex flex-col justify-center p-px mt-1.5 w-full">
            <a
              href="#"
              className="flex overflow-hidden gap-3 p-4 w-full bg-blue-50 rounded-lg"
            >
              <div className="flex overflow-hidden justify-center items-center self-start min-h-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a7cb54bb69cb21dd255bf8a272f3a5c47796146?placeholderIfAbsent=true&apiKey=823bf4beb2774bc99c68daa06d856dec"
                  alt=""
                  className="object-contain self-stretch my-auto w-3.5 aspect-[0.87]"
                />
              </div>
              <span className="grow shrink text-base font-semibold leading-none text-blue-600 w-[163px]">
                Cấu hình hệ thống
              </span>
            </a>
          </li>
          <li className="flex p-1 mt-1.5 w-full">
            <a href="#" className="flex gap-2 items-center w-full">
              <div className="flex overflow-hidden flex-col justify-center p-2.5">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/01eca16cd6095529810d73d5b9b4a146af866c8c?placeholderIfAbsent=true&apiKey=823bf4beb2774bc99c68daa06d856dec"
                  alt=""
                  className="object-contain aspect-[0.86] w-[18px]"
                />
              </div>
              <span className="text-base font-semibold leading-4 text-slate-600">
                Quản lý vai trò người dùng
              </span>
            </a>
          </li>
          <li className="flex gap-2.5 px-3 py-3.5 mt-1.5 w-full">
            <a href="#" className="flex gap-2.5 items-center w-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/226e99902e50dfa42a022fc320de71a0ac4b3ee4?placeholderIfAbsent=true&apiKey=823bf4beb2774bc99c68daa06d856dec"
                alt=""
                className="object-contain shrink-0 aspect-square w-[22px]"
              />
              <span className="grow shrink my-auto text-base font-semibold leading-none text-slate-600">
                Báo cáo & Thống kê
              </span>
            </a>
          </li>
          <li className="mt-1.5">
            <a href="#" className="flex gap-3 p-4 w-full">
              <div className="flex overflow-hidden justify-center items-center min-h-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/73f5b67dd498359993dededd0d2ca39a12ff951c?placeholderIfAbsent=true&apiKey=823bf4beb2774bc99c68daa06d856dec"
                  alt=""
                  className="object-contain self-stretch my-auto w-4 aspect-square"
                />
              </div>
              <span className="grow shrink w-40 text-base font-semibold leading-none text-slate-600">
                Cài Đặt
              </span>
            </a>
          </li>
          <li className="mt-1.5">
            <button className="flex gap-3 p-4 w-full">
              <div className="flex overflow-hidden justify-center items-center min-h-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/49b12752ee97a88e934d53df6c7e27983b2c060d?placeholderIfAbsent=true&apiKey=823bf4beb2774bc99c68daa06d856dec"
                  alt=""
                  className="object-contain self-stretch my-auto w-4 aspect-square"
                />
              </div>
              <span className="grow shrink w-40 text-base font-semibold leading-none text-slate-600">
                Đăng Xuất
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
