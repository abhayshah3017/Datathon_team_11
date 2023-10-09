import React, { useState } from 'react';
import FileInputCard1 from '../components/fileInputCard1';
import FileInputCard2 from '../components/fileInputCard2';
import { useNavigate } from 'react-router-dom';
import LoadingScreen from './loadingScreen';


const UploadPage = (props) => {
  const [deliverableFile, setDeliverableFile] = useState(null);
  const [binderFile, setBinderFile] = useState(null);
  const [loader, setLoader] = useState(false);

  // Get the navigate function directly
  const navigate = useNavigate();

  const GoToResult = () => {
    // Use the navigate function to route to '/result'
    navigate('/result');
  }

  const handleAnnotate = () => {
    setLoader(true);
    // Create a 15-second pause before doing anything else
    setTimeout(() => {
      // Your code to execute after the pause (if needed)
      setLoader(false);
      GoToResult();
    }, 15000); // 15000 milliseconds = 15 seconds
  }

  return (
    <div>
      {!loader && <div id='#body' className='text-center items-center'>
        <div className='font-bold text-4xl' style={{
          marginTop: '40px'
        }}>
          Get your MLR Review in seconds
        </div>
        <div className='text-lg text-gray-800' style={{ marginTop: '12px' }}>
          Annotate your Document and Binder in 2 simple steps
        </div>
        <div className='inline-flex' style={{ marginTop: '32px' }}>
          <FileInputCard1 deliverableFile={deliverableFile} setDeliverableFile={setDeliverableFile} />
          <FileInputCard2 binderFile={binderFile} setBinderFile={setBinderFile} />
        </div>
        {deliverableFile && binderFile && <div className='align-center justify-center'>
          <button
            className='text-white text-lg'
            style={{
              backgroundColor: '#404ED1',
              width: '280px',
              height: '60px',
              top: '465px',
              left: '580px',
              borderRadius: '8px'
            }}
            onClick={() => handleAnnotate()}
          >
            Annotate now
          </button>
        </div>}
      </div>}
      {loader && <LoadingScreen />}
    </div>
  )
}

export default UploadPage