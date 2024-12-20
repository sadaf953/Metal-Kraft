import { BackgroundProps } from '~/shared/types';

const Background = ({ children, hasBackground, className }: BackgroundProps) => {
  const getBackgroundClass = () => {
    if (!hasBackground) return 'bg-transparent';
    if (className) return className;
    return 'bg-blue-50 dark:bg-blue-900/20';
  };

  return (
    <div className={`absolute inset-0 ${getBackgroundClass()}`}>
      {children}
    </div>
  );
};

export default Background;
