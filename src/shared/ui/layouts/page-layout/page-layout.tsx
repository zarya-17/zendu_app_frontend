import { ReactNode } from 'react';

import './page-layout.styles.scss';

type PageLayoutProps = {
  children: ReactNode;
};

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="pageLayout">
      <div className="container">{children}</div>
    </div>
  );
}
