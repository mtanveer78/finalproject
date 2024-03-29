import React from 'react'
import ImageUploading from 'react-images-uploading'
// import './fileupload.css'

const FileUpload = ({ product, setProduct, update_page = false }) => {
  const maxNumber = 5

  const onChange = (imageList) => {
    setProduct({
      ...product,
      images: imageList,
    })
  }

  return (
    <div className="file_uploads">
      <ImageUploading
        multiple
        value={product.images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
              className="file_upload_button"
              type="button"
            >
              <img
                src="https://www.olx.com.pk/assets/iconAddPhoto_noinline.8924e2486f689a28af51da37a7bda6ec.svg"
                alt="img"
              />
            </button>
            &nbsp;
            <div className='image-container'>
            {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  {update_page
                    ?
                    (<img src={`http://localhost:5000/images/${image}`} alt="" width="100" />)
                    :
                    (<img src={image.data_url} alt="" width="100" />)
                  }
                  <div className="image-item__btn-wrapper">
                    <button onClick={() => onImageUpdate(index)}>Update</button>
                    <button onClick={() => onImageRemove(index)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </ImageUploading>
    </div>
  )
}

export default FileUpload