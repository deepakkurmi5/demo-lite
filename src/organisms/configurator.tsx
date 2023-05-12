import React from "react";

import ChevronDownIcon from "src/icons/chevron-down-icon";
import Toggle from "src/molecules/toggle";

export default function Configurator() {
  return (
    <div
      className="w-full max-w-full border border-white/10 md:border-none md:mx-0 md:max-w-[300px] max-h-[700px] 
    overflow-y-scroll overflow-x-hidden webkit-scrollbar bg-white/5 rounded-xl p-4"
    >
      <div className="w-full">
        <div className="relative inline-block text-left text-white w-full">
          <p className="text-white text-sm font-semibold">Configurations</p>
        </div>
      </div>
      <p className="text-white mt-8 text-sm font-semibold">Things you can configure</p>

      <div className="flex justify-between mt-5">
        <div>
          <p className="text-sm text-white/75">Fixed input mint</p>
          <p className="text-xs text-white/30">Input mint cannot be changed</p>
        </div>
        <Toggle className="min-w-[40px]" />
      </div>
      <div className="w-full border-b border-white/10 py-3" />

      {/* Fixed output */}
      <div className="flex justify-between mt-5">
        <div>
          <p className="text-sm text-white/75">Fixed output mint</p>
          <p className="text-xs text-white/30">Output mint cannot be changed</p>
        </div>
        <Toggle className="min-w-[40px]" />
      </div>
      <div className="w-full border-b border-white/10 py-3" />

      {/* Exact out */}
      <div className="flex justify-between mt-5">
        <div>
          <p className="text-sm text-white/75">Exact output mode</p>
          <p className="text-xs text-white/30">Specify output instead of input</p>
        </div>
        <Toggle className="min-w-[40px]" />
      </div>
      <div className="w-full border-b border-white/10 py-3" />

      {/* Fixed amount */}
      <div className="flex justify-between mt-5">
        <div>
          <p className="text-sm text-white/75">Fixed amount</p>
          <p className="text-xs text-white/30">Depending on Exact In / Exact Out, the amount cannot be changed</p>
        </div>
        <Toggle className="min-w-[40px]" />
      </div>
      <div className="w-full border-b border-white/10 py-3" />

      <div className="flex justify-between mt-5">
        <div>
          <p className="text-sm text-white/75">Initial amount</p>
          <p className="text-xs text-white/30">Amount to be prefilled on first load</p>
        </div>
      </div>
      <input
        className="mt-2 text-white w-full flex justify-between items-center space-x-2 
        text-left rounded-md bg-white/10 px-4 py-2 text-sm font-medium shadow-sm border border-white/10"
        inputMode="numeric"
      />
      <div className="w-full border-b border-white/10 py-3" />

      {/* Wallet passthrough */}
      <div className="flex justify-between mt-5">
        <div>
          <p className="text-sm text-white/75">Simulate wallet passthrough</p>
          <p className="text-xs text-white/30">Simulate Terminal with a fake wallet passthrough</p>
        </div>
        <Toggle className="min-w-[40px]" />
      </div>
      <div className="w-full border-b border-white/10 py-3" />

      {/* Strict Token List  */}
      <div className="flex justify-between mt-5">
        <div>
          <p className="text-sm text-white/75">Strict Token List</p>
          <p className="text-xs text-white/30">{`The strict list contains a smaller set of validated tokens. To see all tokens, toggle "off".`}</p>
        </div>
        <Toggle className="min-w-[40px]" />
      </div>
      <div className="w-full border-b border-white/10 py-3" />

      {/* Preferred Explorer  */}
      <div className="relative inline-block text-left text-white w-full mt-5">
        <p className="text-white text-sm font-semibold">Preferred Explorer</p>

        <div className="mt-4">
          <button
            type="button"
            className="w-full flex justify-between items-center space-x-2 text-left rounded-md
             bg-white/10 px-4 py-2 text-sm font-medium shadow-sm border border-white/10"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            <ChevronDownIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
