import { ReactNode } from 'react';

export function For<T, U extends ReactNode>({
  each,
  fallback,
  children,
}: {
  each: T[];
  fallback?: ReactNode;
  children: (item: T, index: number) => U;
}) {
  if (!each.length) {
    return fallback;
  }

  return <>{each.map(children)}</>;
}
