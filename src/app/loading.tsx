import React from 'react'
import { Circles } from 'react-loader-spinner'

export default function loading() {
  return (
    <>
    <div className="flex justify-center items-center h-screen">
        <div className="animate-spin">
            <Circles
height="80"
width="80"
color="#4fa94d"
ariaLabel="circles-loading"
wrapperStyle={{}}
wrapperClass=""
visible={true}
/>
        </div>
    </div>
    </>
  )
}
