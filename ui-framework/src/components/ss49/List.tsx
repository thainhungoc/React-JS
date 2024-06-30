import React from 'react'
import { useNavigate } from 'react-router-dom'

export const List = () => {
    const navigate = useNavigate();
  return (
    <div>
        <p>danh sach san pham</p>
        <button onClick={()=>{
            navigate("/chotam")
        }}>chuyen sang tran detail

        </button>
    </div>
  )
}
