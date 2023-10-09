import React from 'react';
import { ClipLoader } from 'react-spinners';

const LoadingScreen = () => {
    return (
        <div>
            <div className='' style={{ paddingTop: '222px' }}>
                <ClipLoader size='65' color="#404ED1" />
            </div>
            <div className='pt-6 font-bold text-3xl'>
                Annotation in progress...
            </div>
        </div>
    )
}

export default LoadingScreen