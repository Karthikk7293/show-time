import React, { useRef, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Cropper from 'react-cropper'
import 'cropperjs/dist/cropper.css'
import { getCroppedImg } from './getCroppedImage'

const CropImage = ({ src, imageCallback, closeHander }) => {

  const cropperRef = useRef(null)
  const cropDetailsRef = useRef(null)

  const onCrop = (e) => (cropDetailsRef.current = e.detail)

  const clickHndler = async () => {
    const croppedImage = await getCroppedImg(
      cropperRef.current,
      cropDetailsRef.current,
      src.name
    )
    imageCallback(croppedImage)
  }

  return (
    <div className="position-fixed " style={{zIndex:9999 ,top:"2rem" ,left:"23rem" ,minWidth:"30rem",maxWidth:"40rem"}}>
      <Container className=" text-center bg-white shadow rounded-2 mx-auto p-2 m-0">
        
          <Col xs={12} className="text-center  ">
            <Cropper
              src={src ? URL.createObjectURL(src) : ''}
              className="image-fulid"
              style={{ height: 'auto', width: 'fit-content' }}
              // Cropper.js options
              aspectRatio={500 / 500}
              guides={false}
              crop={onCrop}
              ref={cropperRef}
              zoomable={true}
              // autoCrop={false}
              movable={false}
              minCropBoxWidth={200}
              minCropBoxHeight={250}
            />
            <div className="text-center">
            </div>
            <div className="px-auto py-2 text-center">
            <Button
              type="button"
              className="btn-danger us-btn-danger mx-1"
              style={{ width: 'fit-content' }}
              onClick={closeHander}
            >
              Cancel
            </Button>

            <Button
              type="button"
              className="us-btn mx-1"
              style={{ width: 'fit-content' }}
              onClick={clickHndler}
            >
              Crop
            </Button>
            </div>
          </Col>
          
      </Container>
    </div>
  )
}

export default CropImage
