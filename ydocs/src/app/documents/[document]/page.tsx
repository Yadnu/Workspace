import React from 'react'
import Editor from './editor';
interface DocumentIdPageProps {
  params: Promise<{document: string}> 
  
}

const DocumentPage = async ({params}: DocumentIdPageProps) => {
  const document = await params;
  const docId = document.document
  return (
    <div className='flex min-h-screen items-center justify-center flex-col'> 
        <h1 className="text-2xl font-bold">Document Page</h1>
        <Editor/>
        <p>This is the document page.</p>
        <p>Document ID: {docId}</p>
        <p>Here you can view and edit your documents.</p>
    </div>
  )
}

export default DocumentPage;