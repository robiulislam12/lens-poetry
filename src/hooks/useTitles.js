import { useEffect } from 'react'

const useTitles = ({title}) => {
    useEffect(() =>{
        document.title = title
    }, [title])
}

export default useTitles