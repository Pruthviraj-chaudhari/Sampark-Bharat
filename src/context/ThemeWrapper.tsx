import useTheme from '@/hooks/useTheme';
import { ReactNode, useContext } from 'react';
import { ProfileContext } from './MyContext';

const ThemeWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { profile } = useContext(ProfileContext);

  // Always call the useTheme hook, and let the hook handle the profile logic internally
  useTheme(profile);

  return <div>{children}</div>;
};

export default ThemeWrapper;
