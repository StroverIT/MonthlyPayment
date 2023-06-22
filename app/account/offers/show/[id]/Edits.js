import React from 'react';

const Edits = ({data}) => {

    return (
        <div className='grid grid-cols-2 gap-10'>
        {data.map((log, index)=>{
            return <div key={index} className='relative text-center'> 
                <h2 className='text-xl font-medium text-orange-700 '>Променен продукт</h2>
                <div className=''>
                {log.newArticle.section } {log.newArticle.subsection && `> ${log.newArticle.subsection}`} {log.newArticle.katNomer && `> ${log.newArticle.katNomer}`} 

                </div>  
                <div className='text-sm'>27/5/2023 </div>

            <div className='mt-2'>
                Стари данни - <strong>{log.oldArticle.text}: {log.oldArticle.oldInput}</strong>
            </div>
            <div>
                Нови данни - <strong>{log.oldArticle.text}: {log.newArticle.value}</strong>
            </div>
            </div>
        })}        
        </div>
    );
}

export default Edits;
