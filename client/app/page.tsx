'use client'

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  router.push("/jobs");
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
