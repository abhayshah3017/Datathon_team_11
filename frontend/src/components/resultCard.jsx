import React, { useState } from 'react';
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

const ResultCard = ({ resultFile, setResultFile }) => {

    return (
        <div className="flex mx-auto my-8 items-center justify-center">
            <div className="bg-white rounded-lg overflow-hidden shadow-md" style={{ width: '166px', height: '200px' }}>
                <div className="px-4">
                    {resultFile && <span>
                        <span>
                            <DocViewer
                                documents={[{
                                    uri: require('./ANNOTATED.pdf'),
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
                                        zoomJump: 0.2, // 0.1 as default,
                                    },
                                    pdfVerticalScrollByDefault: false, // false as default
                                }}
                            /></span>
                    </span>}
                </div>
            </div>
        </div>
    )
}

export default ResultCard

