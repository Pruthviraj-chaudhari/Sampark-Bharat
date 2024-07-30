import { useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ProfileContext } from '@/context/MyContext';
import { toast } from 'sonner';

const useFetchProfile = () => {
    const { slug } = useParams<{ slug: string }>();
    const { setProfile, setLoading } = useContext(ProfileContext);

    useEffect(() => {
        const fetchData = async (slug: string) => {
            setLoading(true);
            try {
                const environment = String(import.meta.env.VITE_API_ENVIRONMENT);
                const backendAPI = String(import.meta.env.VITE_API_BACKEND);
                const API = environment === 'local' ? 'http://localhost:3000/' : backendAPI;
                const response = await axios.post(API, { slug });
                const profileData = response.data;
                localStorage.setItem('profile', JSON.stringify(profileData)); // Ensure the data is stored as a string
                setProfile(profileData);
                setLoading(false);
            } catch (error) {
                console.log('Error fetching profile: ', error);
                toast.error('Internal Server Error');
                setLoading(false);
            }
        };

        if (slug) {
            fetchData(slug);
        }
    }, [slug, setProfile, setLoading]);

    return null; // Return value is optional, depending on your use case
};

export default useFetchProfile;
