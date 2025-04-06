import React, { useState } from 'react'
import { BiHide, BiShow } from "react-icons/bi"
const Input = ({ type = "", extraClass, placeholder, name }) => {
    const [pass, setPass] = useState(false)
    return (
        <>
            {type === "password" ?
                <label className='relative'>
                    <input className={`${extraClass} placeholder:text-[#8A8A8A] font-medium  text-[14px] border-[1px] border-gray-100 outline-none rounded-[4px] !w-[248px] p-[13px]`} type={pass ? "text" : type} required placeholder={placeholder} name={name} />
                    <div onClick={() => setPass(!pass)} className="absolute top-[15px] right-[10px] cursor-pointer">
                        {pass ? <BiShow size={20} /> : <BiHide size={20} />}
                    </div>
                </label>
                :
                <input className={`${extraClass} placeholder:text-[#8A8A8A] font-medium  text-[14px] border-[1px] border-gray-100 outline-none rounded-[4px] !w-[248px] p-[13px]`} type={type} required placeholder={placeholder} name={name} />
            }
        </>
    )
}

export default Input