import React from 'react'
import './suggest.css'

function SuggestionsCard({ profile }) {
    return (


        <div className='suggest-outer-card  my-2  d-flex justify-content-between'>
            {!profile ? (<><div className="suggest-img">
                <img className='rounded' src="https://wallpapersmug.com/download/2560x1440/6e645c/captain-marvel-movie-poster.jpg" alt="" />
            </div>
                <div className="suggest-contents  d-flex justify-content-end rounded">
                    <div className="suggest-contents-inner ps-2  rounded">
                        <div className="suggest-content-title text-white my-auto">
                            <p className='my-0 h5'>title</p>
                            <p className='my-0 text-truncate'>descripction Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, dolores a nulla laboriosam quisquam molestiae incidunt! Optio enim, tenetur repudiandae culpa labore itaque adipisci, cumque porro vero minus voluptas laudantium!</p>
                        </div>
                        <div className="likes-and-comments my-1 text-white d-flex">
                            <p className='mx-2 my-0'><span className='mx-1'><ion-icon name="eye-sharp"></ion-icon></span>1234</p>
                            <p className='mx-2 my-0'><span className='mx-1'><ion-icon name="heart-outline"></ion-icon></span>1234</p>
                        </div>
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
    )
}

export default SuggestionsCard