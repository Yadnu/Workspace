import React from 'react'
import Editor from './editor';
interface DocumentIdPageProps {
  params: Promise<{document: string}> 
  
}

const DocumentPage = async ({params}: DocumentIdPageProps) => {
  const document = await params;
  const docId = document.document
  return (
    <div className='min-h-screen bg-[#F9FBFD] px-4 print:p-0 print:bg-white print:overflow-visible'> 
        <Editor/>
    </div>
  )
}

export default DocumentPage;