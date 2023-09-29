"use client"

import Link from "next/link"

export default function FirstPage() {
  return <><h1>First Page</h1>
  <Link href="/second-page" className="">Go to the second page</Link>
  </>
}
