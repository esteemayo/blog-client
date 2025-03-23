import { SkeletonTheme } from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SkeletonTheme
      baseColor='#152233'
      highlightColor='#273547'
      duration={1}
      borderRadius={'0.5rem'}
    >
      {children}
    </SkeletonTheme>
  );
};

export default SkeletonProvider;
