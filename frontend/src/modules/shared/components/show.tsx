import { ReactNode } from "react";

export function Show({ fallback, when, children }: { fallback?: ReactNode; when: boolean; children: ReactNode }) {
  return <>{when ? children : fallback}</>;
}
