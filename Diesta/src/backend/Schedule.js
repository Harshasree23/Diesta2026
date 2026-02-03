import { useEffect, useState } from 'react';
import supabase from '../supabase';

const Schedule = () => {

    const [schedule, setSchedule] = useState([]);

    useEffect(() => {
        async function fetchSchedule() {
            // Placeholder for fetch logic
            
        }

        fetchSchedule();
    }, []);

    return (
    <div>
        
    </div>
)
}

export default Schedule