import React, { useState, useEffect } from 'react';
import ResultCard from '../components/resultCard';
import fileDownload from 'js-file-download';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';
import { AiOutlineUpload } from 'react-icons/ai';

const ResultScreen = () => {

    const [resultFile, setResultFile] = useState(null);

    // Get the navigate function directly
    const navigate = useNavigate();

    const GoToHome = () => {
        // Use the navigate function to route to '/result'
        navigate('/');
    }

    useEffect(() => {
        // Load the file data when the component mounts
        fetch('./ANNOTATED.pdf')
            .then(response => response.blob())
            .then(blob => {
                setResultFile(URL.createObjectURL(blob));
            });
    }, []);

    const handleDownloadClick = () => {
        // Specify the file name and MIME type for your PDF file
        const fileURL = process.env.PUBLIC_URL + './ANNOTATED.pdf';
        const mimeType = 'application/pdf';
        const a = document.createElement('a');
        a.href = fileURL;
        a.download = 'ANNOTATED.pdf'; // You can set the desired filename here
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        // Trigger the file download
        //fileDownload(null, fileName, mimeType);
    };

    return (
        <div>
            <div id='#body' className='items-center' style={{ marginTop: '40px' }}>
                <div id="textbox">
                    <div className='alignleft'><button className='text-2xl ml-5 inline-flex' onClick={() => GoToHome()}>
                        <span className='pt-1'><IoMdArrowRoundBack /></span>
                        <span className='ml-2'>Back</span>
                    </button></div>
                    <p className="aligncenter font-bold text-4xl">Done! You're all set.</p>
                </div>
                <div style={{
                    marginTop: '40px'
                }}>
                    <ResultCard resultFile={resultFile} setResultFile={setResultFile} />
                </div>
                <div className='align-center justify-center'>
                    <button
                        className='text-white text-lg font-[600]'
                        style={{
                            backgroundColor: '#404ED1',
                            width: '280px',
                            height: '60px',
                            top: '465px',
                            left: '580px',
                            borderRadius: '8px'
                        }}
                        onClick={() => handleDownloadClick()}
                    >
                        <span className='inline-flex mr-2'><FaDownload /></span>Download annotated version
                    </button>
                </div>
                <div className='align-center justify-center'>
                    <button
                        className='text-white text-lg font-[600]'
                        style={{
                            color: '#404ED1',
                            width: '280px',
                            height: '60px',
                            borderRadius: '8px'
                        }}
                        onClick={() => GoToHome()}
                    ><span className='inline-flex'>
                            <span>Upload new</span>
                            <span className='ml-1'><AiOutlineUpload size={22} /></span></span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ResultScreen