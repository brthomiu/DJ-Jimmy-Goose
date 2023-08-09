"use client";

type Props = {};

export default function Nav() {
  return (
    <div
      className="
        fixed 
        top-0 z-30 
        flex flex-row 
        justify-between
        w-full h-12 p-1
        bg-slate-900 bg-opacity-80
        border-b
        border-slate-700
        text-slate-100 text-opacity-60
        items-center
        "
    >
      <h3 className="text-3xl ml-2">Jimmy Goose • Wedding & Event DJ</h3>
      <button>
        <h2 className="text-4xl mr-2 rotate-90">III</h2>
      </button>
    </div>
  );
}
