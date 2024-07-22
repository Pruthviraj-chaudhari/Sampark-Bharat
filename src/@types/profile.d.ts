export interface INewsArticle {
    heading: string;
    image: string;
    description: string;
    link: string;
}

export interface IProfile {
    id: number;
    profilePhoto: string;
    backgroundPhoto: string;
    name: string;
    position: string;
    description: string;
    location: string;
    contact: string;
    email: string;
    whatsapp: string;
    facebook: string;
    instagram: string;
    twitter: string;
    linkedin: string;
    website: string;
    gallery: string[];
    news: INewsArticle[];
}

export type ProfileContextType = {
    profile: IProfile | null;
    setProfile: (profile: IProfile | null) => void; 
};