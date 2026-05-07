"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const AdminGuard = ({ children }: { children: React.ReactNode }) => {
  const [checked, setChecked] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isAdmin = localStorage.getItem("jobPortalAdmin") === "true";
    if (!isAdmin) {
      router.replace("/admin/login");
      return;
    }

    setChecked(true);
  }, [router]);

  if (!checked) {
    return null;
  }

  return <>{children}</>;
};

export default AdminGuard;
