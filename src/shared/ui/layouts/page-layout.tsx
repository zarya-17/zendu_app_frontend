import { ReactNode } from 'react';

type PageLayoutProps = {
  children: ReactNode;
};

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-full py-5 px-5">
      <div className="container mx-auto mt-5 mb-5">{children}</div>
    </div>
  );
}
