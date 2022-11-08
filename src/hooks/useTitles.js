import { useEffect } from 'react'

const useTitles = title => {
    useEffect(() =>{
        window.document.title = `${title} - Lens Poetry`;
    }, [title])
}

export default useTitles