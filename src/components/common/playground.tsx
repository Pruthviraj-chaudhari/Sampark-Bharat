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

    const handlePreview = () => {
        setTheme(theme);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className={`relative min-h-[300px] w-full overflow-hidden rounded-lg ring-1 ring-slate-900/10 ${theme.background}`}>
            <div className="absolute left-4 top-4 z-10 cursor-pointer">
                <div className="flex flex-row gap-4">
                    <div
                        className="rounded-md bg-slate-900 px-2 py-1 text-xs font-medium text-white"
                        onClick={handlePreview}
                    >
                        preview
                    </div>
                </div>
            </div>
            <h2 className={`absolute left-4 bottom-4 z-10 text-lg font-semibold ${theme.textPrimary}`}>
                {themeName}
            </h2>
        </div>
    );
};

export default Playground;
