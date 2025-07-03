import {useState, useEffect} from 'react';

import { SOURCE_PATH } from '../constants/constants';

const useGetEvent = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isAvailable, setIsAvailable] = useState<boolean>(false)
    const [event, setEvent] = useState<unknown>({})

    useEffect(()=> {
        fetch(`${SOURCE_PATH}/wp-json/wp/v2/pages/25`)
            .then(response => {
                if(response.status === 401){
                    setIsAvailable(false)
                }
                return response.json();
            })
            .then(_event_ => {
                setEvent(_event_)
                setIsAvailable(true)
            })
            .finally(()=>{
                setIsLoading(false);
            })
    }, [])

    return {event, isLoading, isAvailable}
}

export {
    useGetEvent
}