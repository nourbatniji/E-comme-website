import React from 'react'
import errorImage from "../../assets/images/error.svg"

export default function Error() {
  return (
    <>
    <div className="container py-12 flex items-center justify-center">
      <img src={errorImage} alt="" />
    </div>
    </>
  )
}
