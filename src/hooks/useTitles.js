import { useEffect } from 'react'

const useTitles = title => {
    useEffect(() =>{
        window.document.title = `${title} - React App`;
    }, [title])
}

export default useTitles