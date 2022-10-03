import React, { useState, useEffect, useRef } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import NewBandeau from 'src/components/Admin/newBandeau';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useDispatch, useSelector } from 'react-redux';
// import React, { useState, useEffect, useRef } from 'react';
import TextField from '@material-ui/core/TextField';
import { Editor } from '@tinymce/tinymce-react';
import { useForm } from 'react-hook-form';
import { setModalStatus } from 'src/actions';
import moment from 'moment';
import { generateUniqueKey } from 'src/functions'
import axios from 'axios';
import Upload from 'src/components/Admin/upload';
import store from 'src/store';

AOS.init();

function Modal({ openStatus }) {
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state);
  const [open, setOpen] = useState(openStatus);
  const test = openStatus;

  function fadeOut(elementToFade) {
    const element = document.getElementById(elementToFade);
    element.style.opacity -= 0.1;
    if (element.style.opacity < 0.0) {
      element.style.opacity = 0.0;
    }
    else {
      setTimeout('fadeOut(elementToFade)', 3000);
    }
  }

  useEffect(() => {
    if (openStatus === true) {
    document.getElementById('newBandeau').style.display = 'flex'
    }
  }, [openStatus])
  useEffect(() => {

  }, [img])
  

  const handleClose = () => {
    const tops = document.getElementById('topbar');
    tops.setAttribute('data-aos', 'fade-down');
    // tops.classList.add('fade-out');
    store.dispatch(setModalStatus(false));
    setTimeout((e) => {
      tops.style.display = 'none';
      openStatus = false;
    }, 1000);
   
  };

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
 
      const addBandeau = (data, event) => {
        event.preventDefault();
        const forma = document.getElementById('add_form');
        const datas = Object.fromEntries(new FormData(forma).entries());
        datas.date = moment().format('DD/MM/YYYY');
        console.log(datas)
        fetch(`https://backtennis.herokuapp.com/bandeau/add`, {
      method: 'POST',
      body: JSON.stringify(datas),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        // 'x-access-token': `${localStorage.getItem('Token_Jobsilog')}`,

      },}).then((res) => {
        Swal.fire({
          title: 'Article ajouté',
          text: `L'article a bien été ajouté`,
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      })

      };

      function handleChange(event) {
        setFile(event.target.files[0])
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

      {store.getState().Tennis.modal === true && (
        <section className="topbar" id="topbar" data-aos="fade-up" data-aos-duration="1000">
          <div className="topbar_container2">
            <div className="topbar_title">Ajouter un item au bandeau</div>
            <button type="button" className="topbar_button" onClick={handleClose} />
          </div>

          <div className="topbar_form">
          <div className="newBandeau" id="newBandeau">
              <form ref={form} id="add_form" className="form" onSubmit={handleSubmit(addBandeau)}>
              {/* <form ref={form} id="formadd" className="form"> */}
        
        {/* <input type="hidden" name="id" id="id" value={id} /> */}
        {/* <label htmlFor="title"> */}
          <input type="text" className="input_date" name='title' id='title' placeholder='Entrez le titre' />
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
      
      <div className="form_upload">
 <span className="fileSend">
 <div className="box"> 
					<input type="file" name="file" id="formFile" accept="image/png, image/gif, image/jpeg" onChange={handleChange} className="inputfile inputfile-1" data-multiple-caption="{count} files selected" multiple="" />
					<label for="formFile">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17">
              <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path></svg>
               <span>{img !== undefined ? img : 'Choisir un fichier'}</span></label>
				</div>
  {/* <input className="form-control" id="formFile" type="file" accept="image/png, image/gif, image/jpeg" onChange={handleChange} /> */}
 {(file !== undefined) && (<button type="button" className='szh-menu-button myButtonUpload' onClick={handleSubmit(handleSubmitPic)}>Upload</button>)}</span>
 

</div>

 ) : <><img className="imgBandeauPrev" src={img} /> <input type="hidden" name="addressImg" className="input_date" value={img} readOnly /> </>}
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
            toolbar: 'undo redo | formatselect | ' +
            'bold italic underline backcolor forecolor fontsize fontfamily | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help | language | emoticons | code',
            // toolbar: 'language',
            selector: 'textarea',  // change this value according to your HTML
            language: 'fr_FR',
            content_style: "@import url('https://fonts.googleapis.com/css2?family=ABeeZee&family=Montserrat:wght@300;400&display=swap')",
            font_family_formats: 'ABeeZee=abeezee,sans-serif; Arial=arial,helvetica,sans-serif; Courier New=courier new,courier,monospace; AkrutiKndPadmini=Akpdmi-n; '
          }}
          textareaName="content"
          name="contenu"
        />
        <button className="szh-menu-button myButtonSend" type='submit'> Envoyer </button>
        </form>
      </div>
          </div>
          {/* </div> */}

        </section>
        
      )}

    </>
  );
}

export default Modal;

Modal.propTypes = {
  openStatus: PropTypes.bool,
};

Modal.defaultProps = {
  openStatus: false,
};
