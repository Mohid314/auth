import React,{useState} from 'react'

export default function Imageupload() {

    const [image, setImage] = useState('')

    const handleChange =(e) => {
        console.log(e.target.files)
        setImage(e.target.files[0])
    }
  return (
    <div>
        Image Upload 
        <input type="file" value={image} onChange={handleChange} />
    </div>
  )
}
