import React from 'react'
import { Link } from 'react-router-dom';
import './suggest.css'

function SuggestionsCard({ profile ,suggestions}) {
    return (


            <Link to={`/watch/video/${suggestions?._id}`}>
        <div className='suggest-outer-card   my-2  d-flex justify-content-between'>
            {!profile ? (<><div className="suggest-img">
               
                <img className='' src={suggestions?.thumbnail?.url} alt="" />
            </div>
            
                <div className="suggest-contents   d-flex justify-content-end ">
                    <div className="suggest-contents-inner p-2  ">
                        <div className="suggest-content-title text-white text-center my-auto">
                            <p className='my-0 h5'>{suggestions?.title}</p>
                        </div>
                        <div className="likes-and-comments my-1 text-white d-flex  justify-content-between">
                      <p className='text-success text-uppercase fw-bold m-0'><span className='fw-bold'>likes :</span> <i className='text-white'>{suggestions?.likes.length}</i></p>
                      <p className='text-success text-uppercase fw-bold m-0'><span className='fw-bold'>views :</span> <i className='text-white'>{suggestions?.likes.length}</i></p>
                        </div>
                        <pre className='text-truncate text-white'>
                            {suggestions?.description}
                        </pre>
                    </div>
                </div> </>) : (
                <>
                <div className="suggest-img-profile">
                    <img className='rounded' src="https://wallpapersmug.com/download/2560x1440/6e645c/captain-marvel-movie-poster.jpg" alt="" />
                </div>
                <div className="profile-suggest-options  ">
                    <div className="close-button text-end">
                    <p className=''><ion-icon name="close-outline"></ion-icon></p>
                    </div>
                    <div className="play-button  text-center my-4">
                   <p className='shadow w-0'> <img width="30" src="https://cdn-icons-png.flaticon.com/512/0/375.png" alt="" /></p>
                    </div>
                </div>
                </>
            )}
        </div>
</Link>
    )
}

export default SuggestionsCard