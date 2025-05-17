"use client";
import * as React from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { ConfigurationPanel } from "./ConfigurationPanel";

function DashboardQuanTriVien() {
  return (
    <div className="overflow-hidden bg-white rounded-lg">
      <div className="w-full bg-black bg-opacity-0 max-md:max-w-full">
        <div className="py-0.5 w-full bg-slate-50 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-[18%] max-md:ml-0 max-md:w-full">
              <Sidebar />
            </div>
            <main className="ml-5 w-[82%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-center mx-auto w-full bg-black bg-opacity-0 pb-[621px] max-md:pb-24 max-md:max-w-full">
                <Header />
                <ConfigurationPanel />
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardQuanTriVien;
