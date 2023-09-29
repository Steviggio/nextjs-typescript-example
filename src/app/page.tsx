import Link from "next/link"

export default function HomePage() {
  return <>
    <header className="flex flex-col gap-2 ml-4 bg-slate-200">
      <h1 className="text-xl font-bold">Homepage for NextJS app</h1>
      <ul className="flex flex-col gap-2">
        <Link href="/first-page" className="border border-slate-300 text-slate-300 px-2 py-1 rounded-md bg-slate-900 hover:bg-slate-700 focus-within:bg-slate-700 outline-none w-fit">First Page</Link>
        <Link href="/second-page" className="border border-slate-300 text-slate-300 px-2 py-1 rounded-md bg-slate-900 hover:bg-slate-700 focus-within:bg-slate-700 outline-none w-fit">Second Page</Link>
        <Link href="/third-page" className="border border-slate-300 text-slate-300 px-2 py-1 rounded-md bg-slate-900 hover:bg-slate-700 focus-within:bg-slate-700 outline-none w-fit">Third Page</Link>
      </ul>
    </header>
  </>
}