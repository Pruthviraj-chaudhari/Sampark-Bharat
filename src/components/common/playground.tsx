import { ThemeType } from '@/@types/profile';
import React from 'react';

type PlaygroundProps = {
  setTheme: (theme: ThemeType) => void;
  theme: ThemeType;
  themeName: string;
};

const Playground: React.FC<PlaygroundProps> = ({
  setTheme,
  theme,
  themeName,
}) => {

  const handleCardClick = () => {
    setTheme(theme);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      onClick={handleCardClick}
      className={`relative min-h-[200px] md:min-h-[300px] w-full overflow-hidden rounded-lg ring-1 ring-slate-900/10 ${theme.background} transition-transform duration-300 hover:scale-105 hover:ring-slate-900/30 active:scale-95 cursor-pointer`}
    >
      <div className="absolute left-4 top-4 z-10">
        <div className="flex flex-row gap-4">
          <div className="rounded-md bg-white px-2 py-1 text-xs font-medium text-slate-900">
            preview
          </div>
        </div>
      </div>
      <h2 className={`absolute italic left-4 bottom-4 z-10 text-lg font-semibold ${theme.textPrimary}`}>
        {themeName}
      </h2>
    </div>
  );
};

export default Playground;
