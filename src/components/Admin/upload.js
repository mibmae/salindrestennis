import React, { useState, useEffect } from 'react';
import './styles.scss';
import 'react-dropzone-uploader/dist/styles.css'
import Swal from 'sweetalert2'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import './styles.scss';


function Upload() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
    const [file, setFile] = useState(undefined);
    const [img, setImg] = useState(undefined);

    function handleChange(event) {
        setFile(event.target.files[0])
      }

      useEffect(() => {
        console.log(img)
      }, [])


    function handleSubmitPic(event) {
        event.preventDefault()
        console.log(file.size);
        if (file.size < 2097152) {
        const url = 'https://backtennis.herokuapp.com/picture/upload';
        const formData = new FormData();
        formData.append('file', file);
        formData.append('fileName', file.name);
        const config = {
            method: 'POST',
          headers: {
            'content-type': 'multipart/form-data',
          },
        };
         axios.post(url, formData, config).then((response) => {
            console.log(response.data);
            if (response.data.address !== '') {
                setImg(response.data.address)
                console.log(response.data.address)
            } 
          });
      } else {
        Swal.fire({
          title: 'Erreur',
          text: `L'image est trop volumineuse ! Le poid doit être inférieur à 2 MO`,
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }
       
    
      }
    
      return (
       <>
       {(img === undefined) ? (
      
       <div className="form_upload">
  <label htmlFor="formFileLg" className="form-label">Large file input example</label>
  <input className="form-control" id="formFile" type="file" accept="image/png, image/gif, image/jpeg" onChange={handleChange} />
  <span className='button_span'>{(file !== undefined) && (<button type="submit" onClick={handleSubmit(handleSubmitPic)}>Upload</button>)}</span>
  

</div>

  ) : <><img className="imgBandeauPrev" src={img} /> <input type="hidden" name="addressImg" className="input_date" value={img} readOnly /> </>}
       
       </>
      )
};



export default Upload;
