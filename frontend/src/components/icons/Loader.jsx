import React from 'react'

function Loader({color}) {
  return (
    <div className={`${color ? " m-0 p-0 col-lg-0 my-auto" : "col-lg-12  my-2   mx-auto text-center"}`}>
                         <div className={`spinner-border  ${color ? "text-primary py-auto" : "text-white mx-auto"} " role="status`}/>
                    </div>
  )
}

export default Loader