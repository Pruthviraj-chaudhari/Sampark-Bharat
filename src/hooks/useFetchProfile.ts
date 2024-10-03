import { useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate();
    const { setProfile, setLoading } = useContext(ProfileContext);

    useEffect(() => {
        const fetchProfileData = async () => {
            if (slug) {
                setLoading(true);
                try {
                    // Fetch profile data
                    const profileText = await fetchFromAPI('getprofile', slug);

                     // Check if profile is not found
                     if (!profileText) {
                        // Redirect to not found page
                        navigate('/not-found');
                        return;
                    }

                    // Check if profile is expired
                    if (profileText?.isExpired) {
                        // Redirect to expired page
                        navigate('/subscribe');
                        return;
                    }

                    // Fetch additional data concurrently
                    const [profilePhoto, backgroundPhoto, news, gallery, youtube, testimonials] = await Promise.all([
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
                        language: profileText?.language || 'English',
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
                        isExpired: profileText.isExpired,
                        visitorsCount: profileText.visitorsCount || '12488',
                        theme: profileText.theme,
                    };

                    localStorage.setItem('profile', JSON.stringify(updatedProfileData));
                    setProfile(updatedProfileData);
                } catch (error) {
                    console.log('Error fetching user profile: ', error);
                    toast.error('Internal Server Error');
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchProfileData();
    }, [slug, setProfile, setLoading, navigate]);

    return null;
};

export default useFetchProfile;
