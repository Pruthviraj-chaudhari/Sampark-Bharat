import { createContext, ReactNode, useEffect, useState } from 'react';
import { IProfile, ProfileContextType } from '../@types/profile';

export const ProfileContext = createContext<ProfileContextType>({
  profile: null,
  setProfile: () => { },
});

const ProfileProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<IProfile | null>(null);

  useEffect(() => {
    const storedProfile = localStorage.getItem('profile');
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    }
  }, []);

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;