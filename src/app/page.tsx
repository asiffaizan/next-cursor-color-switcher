import CursorColorSwitcher from "@/components/CursorColorSwitcher";
export default function Home() {
  return (
    <>
      <div id="rectangular" className="border border-slate-700 h-[200px] w-[500px] absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%]"></div>
      <CursorColorSwitcher/>
    </>
  );
}
