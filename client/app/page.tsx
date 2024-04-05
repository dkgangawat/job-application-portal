"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/jobs");
  }, [router]);
  return (
    <div>
      <h1>Redirecting to job..</h1>
    </div>
  );
}
