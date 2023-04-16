import React from 'react'

export default function Page() {
  return (
    <div className='container'>Здравейте, Томи Костадинов! </div>

    <Subscription/>
  )
}


const Subscription = ()=>{

    return (

        <div>
                <div className='flex justify-between'>
                    <div className='invisible'></div>
                    <div>130 лв / месец</div>
                </div>

            <div>Месечен абонамент за цалостна поддръжка на сайта.</div>
            <button>Виж повече</button>

        </div>  
    )
}