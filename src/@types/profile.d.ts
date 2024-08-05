export interface INewsArticle {
    heading: string;
    image: string;
    description: string;
    link: string;
}

export interface IFooterLinks {
    title: string;
    link: string;
}

export interface Testimonial  {
    quote: string;
    name: string;
    role: string;
    imgSrc: string;
}

export interface IProfile {
    id: number;
    logo: string;
    profilePhoto: string;
    backgroundPhoto: string;
    name: string;
    position: string;
    description: string;
    location: string;
    address: string;
    contact: string;
    email: string;
    whatsapp: string;
    facebook: string;
    facebookPage: string;
    instagram: string;
    twitter: string;
    linkedin: string;
    website: string;
    gallery: string[];
    news: INewsArticle[];
    youtube: string[] | null;
    youtubeEmbedPlaylist: string;
    googleMap: string;
    footerLinks: IFooterLinks[];
    testimonials: Testimonial[];
}

export type ProfileContextType = {
    profile: IProfile | null;
    loading: boolean;
    setProfile: (profile: IProfile | null) => void; 
    setLoading: (loading: boolean) => void; 
};