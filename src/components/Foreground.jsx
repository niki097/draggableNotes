import React, { useRef, useState } from 'react'
import Card from './Card'


function Foreground() {
    const ref=useRef(null)
    const data=[
        { desc:"this is Nikita",
         fileSize:".9mb",
        close:true, 
        tag:{isOpen:true, tagTitle:"Download Now", tagColor:"green"},
        },
        { desc:"this is Anuj",
         fileSize:".9mb",
        close:true, 
        tag:{isOpen:true, tagTitle:"Upload", tagColor:"blue"},
        },
        { desc:"this is Nikita",
         fileSize:".9mb",
        close:true, 
        tag:{isOpen:false, tagTitle:"Download Now", tagColor:"green"},
        }
    ]
  return (
        <div ref={ref} className='fixed flex gap-10 flex-wrap p-5 top-[0] left-[0] z-[3] w-full 
        h-full'>
           {data.map((item ,index)=>(
            <Card data={item} reference={ref} />
           ))}
        </div>
  )
}

export default Foreground