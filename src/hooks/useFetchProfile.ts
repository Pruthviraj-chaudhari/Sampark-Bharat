import { useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ProfileContext } from '@/context/MyContext';
import { toast } from 'sonner';
import { IProfile } from '@/@types/profile';


// Utility function to fetch data from an API
const fetchFromAPI = async (endpoint: string, slug: string) => {
    try {
        const environment = String(import.meta.env.VITE_API_ENVIRONMENT);
        const backendAPI = String(import.meta.env.VITE_API_BACKEND);
        const API = environment === 'local' ? 'http://localhost:3000' : backendAPI;
        const response = await axios.get(`${API}/${endpoint}/${slug}`);
        return response.data;
    } catch (error) {
        console.log(`Error fetching ${endpoint}: `, error);
        return null;
    }
};

// Custom hook to fetch profile data
const useFetchProfile = () => {
    const { slug } = useParams<{ slug: string }>();
    const { setProfile, setLoading } = useContext(ProfileContext);

    useEffect(() => {
        const fetchProfileData = async () => {
            if (slug) {
                setLoading(true);
                try {
                    // Fetch all sections concurrently
                    const [profileText, profilePhoto, backgroundPhoto, news, gallery, youtube, testimonials] = await Promise.all([
                        fetchFromAPI('getprofile', slug),
                        fetchFromAPI('getprofilephoto', slug),
                        fetchFromAPI('getbackgroundphoto', slug),
                        fetchFromAPI('getnews', slug),
                        fetchFromAPI('getgallery', slug),
                        fetchFromAPI('getyoutube', slug),
                        fetchFromAPI('gettestimonials', slug),
                    ]);

                    const updatedProfileData: IProfile = {
                        id: 0, 
                        logo: profileText.logo || '/logo.png',
                        profilePhoto: profilePhoto || '',
                        backgroundPhoto: backgroundPhoto || '',
                        name: profileText?.name || '',
                        position: profileText?.position || '',
                        description: profileText?.description || '',
                        location: profileText?.location || '',
                        address: profileText?.address || '',
                        contact: profileText?.contact || '',
                        email: profileText?.email || '',
                        whatsapp: profileText?.whatsapp || '',
                        facebook: profileText?.facebook || '',
                        facebookPage: profileText?.facebookPage || '',
                        instagram: profileText?.instagram || '',
                        twitter: profileText?.twitter || '',
                        linkedin: profileText?.linkedin || '',
                        website: profileText?.website || '',
                        youtubeEmbedPlaylist: profileText.youtubeEmbedPlaylist || '',
                        gallery: gallery || [],
                        news: news || [],
                        youtube: youtube || [],
                        googleMap: profileText?.googleMap,
                        footerLinks: profileText?.footerLinks || [],
                        testimonials: testimonials || [],
                    };

                    localStorage.setItem('profile', JSON.stringify(updatedProfileData));
                    setProfile(updatedProfileData);
                } catch (error) {
                    console.log('Error fetching profile sections: ', error);
                    toast.error('Internal Server Error');
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchProfileData();
    }, [slug, setProfile, setLoading]);

    return null;
};

export default useFetchProfile;
