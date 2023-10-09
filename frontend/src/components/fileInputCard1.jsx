import React, { useState } from 'react';
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import { BsUpload } from 'react-icons/bs';
import { TbEdit } from 'react-icons/tb';
import { toast } from 'react-toastify';
import pptIcon from '../assets/pptx_icon.png';

const FileInputCard1 = ({ deliverableFile, setDeliverableFile }) => {

  const [isPDF, setIsPDF] = useState(false);
  const [imageIcon, setImageIcon] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files?.[0];
    if (!selectedFile) {
      return;
    }

    switch (selectedFile.type) {
      case 'application/pdf':
        setDeliverableFile(selectedFile);
        setIsPDF(true);
        break;
      case 'application/vnd.openxmlformats-officedocument.presentationml.presentation':
        // Convert the PPTX file to PDF using pptx2pdf
        setImageIcon(pptIcon);
        setDeliverableFile(selectedFile);
        break;
      default:
        toast.warn("Invalid file type. Please select a .pdf/.pptx file.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        break;
    }
  };

  return (
    <div className="flex flex-col mx-auto my-8 items-center">
      <div className="bg-white rounded-lg overflow-hidden shadow-md" style={{ width: '166px', height: '200px' }}>
        <div className="px-4">
          {!deliverableFile && <label className=" text-blue-700 align-middle text-sm cursor-pointer">
            <input
              type="file"
              accept=".pdf, .pptx"
              className="hidden"
              onChange={handleFileChange}
            />
            <div className="items-center text-xl font-semibold align-middle">
              <div className='flex items-center justify-center self-center' style={{ paddingTop: '3.5rem' }}><BsUpload className='font-bold' /></div>
              <div className='flex items-center justify-center self-center p-2 font-normal'>Upload Document</div>
            </div>
          </label>}
          {deliverableFile &&
            <span>
              {isPDF ? <span>
                <DocViewer
                  documents={[{
                    uri: window.URL.createObjectURL(deliverableFile),
                    fileName: deliverableFile.name,
                  }]}
                  pluginRenderers={DocViewerRenderers}
                  config={{
                    header: {
                      disableHeader: true,
                      disableFileName: true,
                      retainURLParams: false,
                    },
                    pdfZoom: {
                      defaultZoom: 4.0, // 1 as default,
                      zoomJump: 0.1, // 0.1 as default,
                    },
                    pdfVerticalScrollByDefault: false, // false as default
                  }}
                />
              </span> : <span>
                <img style={{ height: '170px' }} src={imageIcon}></img>
              </span>}
            </span>}
        </div>
      </div>
      {deliverableFile && <span className='pt-4'>Document - {deliverableFile.name}</span>}
      {deliverableFile && <div className='flex' style={{ marginTop: '16px' }}>
        <label className="align-middle cursor-pointer">
          <input
            type="file"
            accept=".pdf, .pptx" // You can specify the allowed file types here
            className="hidden"
            onChange={handleFileChange}
          />
          <div className="items-center text-md text-gray-900 align-middle hover:bg-[#e2e2e4] p-1 hover:text-black rounded-lg focus:ring-4 focus:outline-none focus:ring-gray-100">
            <span className='flex items-center justify-center self-center'><TbEdit className='mr-1' />Change</span>
          </div>
        </label>
      </div>}
    </div>
  )
}

export default FileInputCard1

