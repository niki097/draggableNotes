import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { IoDownloadOutline } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion"
function Card({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference}
     whileDrag={{scale:1}} dragElastic={.1} dragTransition={{bounceStiffness: 100, bounceDamping:300}}
      className='relative flex-shrink-0 w-60 h-72 text-white p-5 rounded-[2rem] bg-zinc-700 px-5 overflow-hidden'>
      <FaRegFileAlt />
      <p
        className='text-sm leading-tight mt-5
           font-semibold'
      >{data.desc}
      </p>
      <div className='footer absolute bottom-0 w-full left-0'>
      <div className="flex justify-between items-center px-8 mb-3">
            <h5>.4mb</h5>
            <span className="w-7 h-7 rounded-full bg-sky-300 py-3 flex 
            justify-center items-center">
                {data.close ? <IoIosClose/> : <IoDownloadOutline size=".9em" color="white"/> }
               
            </span>
        </div>
        {
            data.tag.isOpen &&(
                <div className={`tag w-full h-30 py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex justify-center items-center`}>
                <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
            </div>
            )}
      
      </div>
    </motion.div>
  );
}

export default Card;
