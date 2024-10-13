import { ThemeType } from "@/@types/profile";
import Playground from "../common/playground";

type ThemeCardsProps = {
    title: string;
    themes: Record<string, ThemeType>; // themes is an object where key is a string and value is ThemeType
    setTheme: (theme: ThemeType) => void; // Function to set the theme
};

const ThemeCards: React.FC<ThemeCardsProps> = ({ title, themes, setTheme }) => {
    return (
        <>
            <h3 className="text-4xl font-bold mb-8 text-black/80 mt-16">{title}</h3>
            <div className="grid grid-cols-2 gap-8 pb-6 md:grid-cols-2 lg:grid-cols-4">
                {Object.entries(themes).map(([themeName, themeColors]) => (
                    <Playground
                        key={themeName}
                        setTheme={setTheme}
                        theme={themeColors}
                        themeName={themeName}
                    />
                ))}
            </div>
        </>
    );
};

export default ThemeCards;