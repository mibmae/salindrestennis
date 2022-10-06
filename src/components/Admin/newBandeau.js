import React, { useState, useEffect, useRef } from 'react';
import TextField from '@material-ui/core/TextField';
import { Editor } from '@tinymce/tinymce-react';
import { useForm } from 'react-hook-form';
import moment from 'moment';
import { generateUniqueKey } from 'src/functions';
import axios from 'axios';
import Swal from 'sweetalert2';
import {
  useNavigate,
} from 'react-router-dom';
import './styles.scss';
import store from 'src/store';

function NewBandeau() {
  if (store.getState().Tennis.logged === true) {
    const navigate = useNavigate();
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const form = useRef(null);
    const editorRef = useRef(null);
    const [bandeau, setBandeau] = useState([]);
    const [file, setFile] = useState(undefined);
    const [img, setImg] = useState(undefined);
    const [pics, setPics] = useState([]);

    const fileList = () => {
      fetch('https://backtennis.herokuapp.com/picture/list')
        .then((response) => response.json())
        .then((res) => {
          console.log(res);
          setPics(res.array);
          //  setLoading(false);
        });
    };

    const picChange = (e) => {
      setImg(e.target.value);
    // document.getElementById('input_img').value = e.target.value
    };

    useEffect(() => {
      fileList();
    }, []);

    const addBandeau = (data, event) => {
      event.preventDefault();
      const forma = document.getElementById('add_form');
      const datas = Object.fromEntries(new FormData(forma).entries());
      datas.date = moment().format('DD/MM/YYYY');
      console.log(datas);
      fetch('https://backtennis.herokuapp.com/bandeau/secure/add', {
        method: 'POST',
        body: JSON.stringify(datas),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'x-access-token': `${localStorage.getItem('token_Tennis')}`,

        },
      }).then((res) => {
        Swal.fire({
          title: 'Article ajouté',
          text: 'L\'article a bien été ajouté',
          icon: 'success',
          confirmButtonText: 'Ok',
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/admin');
          }
        });
      });
    };

    useEffect(() => {
      console.log('image change');
    }, [img]);

    function handleChange(event) {
      setFile(event.target.files[0]);
    }

    function handleSubmitPic(event) {
      // event.preventDefault()
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
            setImg(response.data.address);
            console.log(response.data.address);
            fileList();
          }
        });
      }
      else {
        Swal.fire({
          title: 'Erreur',
          text: 'L\'image est trop volumineuse ! Le poid doit être inférieur à 2 MO',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      }
    }
    const closeBandeau = () => {
      navigate('/admin');
    };

    return (
      <div className="newBandeau" id="newBandeau">
        <div><h3 className="admin_subtitle">Ajouter un item au Bandeau</h3></div>
        <form ref={form} id="add_form" className="form" onSubmit={handleSubmit(addBandeau)}>
          <span><button type="button" className="closeButton" title="Vous aller perdre vos modifications !" onClick={closeBandeau}>X</button></span>
          {/* <form ref={form} id="formadd" className="form"> */}

          {/* <input type="hidden" name="id" id="id" value={id} /> */}
          {/* <label htmlFor="title"> */}
          <input type="text" className="input_date" name="title" id="title" placeholder="Entrez le titre" />
          {/* <TextField
            id="mui-theme-provider-outlined-input"
            label="title"
            defaultValue={bandeau.image}
            type="text"
            name="title"
            color="primary"
            className="texte"
            component="span"
            margin="normal"
            variant="outlined"
            {...register('title', { required: 'Veuillez entrer un titre' })}
          /> */}
          {/* </label> */}
          {/* <div className="container"> */}
          {/* {image.preview && <img src={image.preview} width='100' height='100' />} */}
          {(img === undefined) ? (

            <><div className="form_upload">
              <label htmlFor="formFileLg" className="form-label" />
              <input className="form-control input_file" id="formFile" type="file" accept="image/png, image/gif, image/jpeg" onChange={handleChange} />
              {(file !== undefined) && (<span className="button_span"><button className="szh-menu-button myButton up" onClick={handleSubmit(handleSubmitPic)}>Upload</button></span>)}
              </div>
              <div>
                <select name="imagebandeau" className="selectImg" id="bandeau-select" onChange={(e) => picChange(e)}>
                  <option>Choisir une image</option>
                  {pics.map((option, index) => (
                    <option key={index} value={option.link}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
            </>

          ) : (
            <><div style={{
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              width: '100%',
              height: '17rem',
            }}
            /> <input type="hidden" name="addressImg" className="input_date" value={img} readOnly />
              <div>
                <div className="form_upload">
                  <div className="upload_container">
                    <label htmlFor="formFileLg" className="form-label" />

                    <input className="form-control input_file" id="formFile" type="file" accept="image/png, image/gif, image/jpeg" onChange={handleChange} />
                    <span className="button_span">{(file !== undefined) && (<button type="button" onClick={handleSubmit(handleSubmitPic)}>Upload</button>)}</span>
                  </div>
                </div>
                <select name="imagebandeau" className="selectImg" id="bandeau-select" onChange={(e) => picChange(e)}>
                  <option>Choisir une image</option>
                  {pics.map((option, index) => (
                    <option key={index} value={option.link}>
                    {option.name}
                  </option>
                  ))}
                </select>
              </div>
            </>
          )}
          <label htmlFor="date">
            <span className="date">Article ajouté le : {moment().format('DD/MM/YYYY')} </span>
            {/* <input type="text" className="date" name="date" defaultValue={moment().format('DD/MM/YYYY')} /> */}

            {/* <TextField
            id="mui-theme-provider-outlined-input"
            type="date"
            name="date"
            color="primary"
            // initialvalue={bandeau.date}
            className="texte"
            component="span"
            margin="normal"
            variant="outlined"
            {...register('date', { required: 'Veuillez entrer une date' })}
          /> */}
          </label>
          {/* </div> */}
          <Editor
            onInit={(evt, editor) => editorRef.current = editor}
            apiKey="smjum8kze60gypxv6t759k3qhkm16lgg80q9f5mchghzvgd0"
            init={{
              height: 500,
              menubar: true,
              plugins: 'lists link image help wordcount emoticons code',
              toolbar: 'undo redo | formatselect | '
            + 'bold italic underline backcolor forecolor fontsize fontfamily | alignleft aligncenter '
            + 'alignright alignjustify | bullist numlist outdent indent | '
            + 'removeformat | help | language | emoticons | image | code',
              // toolbar: 'language',
              selector: 'textarea', // change this value according to your HTML
              language: 'fr_FR',
              content_style: "@import url('https://fonts.googleapis.com/css2?family=ABeeZee&family=Montserrat:wght@300;400&display=swap')",
              font_family_formats: 'ABeeZee=abeezee,sans-serif; Arial=arial,helvetica,sans-serif; Courier New=courier new,courier,monospace; AkrutiKndPadmini=Akpdmi-n; ',
            }}
            textareaName="content"
            name="contenu"
          />
          <button className="myButton" type="submit"> Envoyer </button>
        </form>
      </div>
    );
  } window.location.replace('/');
}

export default NewBandeau;
