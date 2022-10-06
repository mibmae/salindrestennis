/* eslint-disable no-inner-declarations */
import React, { useState, useEffect, useRef } from 'react';
import TextField from '@material-ui/core/TextField';
import { Editor } from '@tinymce/tinymce-react';
import { useForm } from 'react-hook-form';
import Moment from 'react-moment';
import { TailSpin } from 'react-loader-spinner';
import moment from 'moment';
import PropTypes from 'prop-types';
import axios from 'axios';
// import { reload } from 'src/actions';
import store from 'src/store';
import {
  useNavigate,
  useParams,
} from 'react-router-dom';
import './styles.scss';

function ModifyArticle() {
  if (store.getState().Tennis.logged === true) {
    const { idArt, visu } = useParams();
    console.log(idArt, visu);
    const navigate = useNavigate();

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const form = useRef(null);
    const editorRef = useRef(null);
    const [bandeau, setBandeau] = useState([]);
    const [img, setImg] = useState(null);
    const [loading, setLoading] = useState(false);
    const [pics, setPics] = useState([]);
    const [file, setFile] = useState(undefined);

    const fileList = () => {
      fetch('https://backtennis.herokuapp.com/picture/list')
        .then((response) => response.json())
        .then((res) => {
          // console.log(res);
          setPics(res.array);
        });
    };

    useEffect(() => {
      setLoading(true);
      fetch(`https://backtennis.herokuapp.com/articles/${idArt}`)
        .then((response) => response.json())
        .then((res) => {
          setBandeau(res.data[0]);
          // console.log(res.data[0]);
          setImg(res.data[0].image);
          setLoading(false);
        });
      fileList();
    }, [idArt]);

    const modifyArticle = (data, event) => {
      event.preventDefault();
      const forma = document.getElementById('formmodify');
      const datas = Object.fromEntries(new FormData(forma).entries());
      datas.date = bandeau.date;
      // console.log(datas);
      fetch(`https://backtennis.herokuapp.com/articles/secure/modify/${idArt}`, {
        method: 'POST',
        body: JSON.stringify(datas),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'x-access-token': `${localStorage.getItem('token_Tennis')}`,

        },
      }).then((res) => {
        // reload(true);
        // reload(true);
        if (visu === undefined) {
          navigate('/admin');
        }
        else {
          navigate(`/article/${idArt}`);
        }
        // setTimeout(() => {
        //   document.getElementById('list_articles').style.display = 'flex';
        //   document.getElementById('list_articless').style.display = 'flex';
        //   document.getElementById('modfiYB').style.display = 'none';
        //   document.getElementById('modifyBandeau').style.display = 'none';
        // }, 50);
      });
    };

    function handleSubmitPic() {
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
            document.getElementById('input_img').value = img;
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

    const changeImage = (e) => {
      console.log(e.target.value);
      if (e.target.value !== '') {
        setImg(e.target.value);
      }
    };

    useEffect(() => {
      if (store.getState().Tennis.logged === true) {
        document.getElementById('input_img').value = img;
      }
    }, [img]);

    const log = () => {
      if (editorRef.current) {
        return (editorRef.current.getContent());
      }
    };
    const closeArticle = () => {
      navigate('/admin');
    };

    const picChange = (e) => {
      setImg(e.target.value);
      document.getElementById('input_img').value = e.target.value;
    };

    // eslint-disable-next-line no-inner-declarations
    function handleChangeUpload(event) {
      console.log('imf', img);
      setFile(event.target.files[0]);
      // setImg(img)
      // setImg(img)
      document.getElementById('input_img').value = img;
    }

    // useEffect(() => {
    //   console.log('store', store.getState().Tennis.reload)
    //   if (store.getState().Tennis.reload === true) {
    //   getBandeau();
    //  getArticles();
    //  console.log('reload change')
    //   } else { console.log('ca change po')}
    // }, [store.getState().Tennis.reload])

    return (
      <>
        {(loading && idArt !== null) ? (<div className="loader" key="loader"> <TailSpin color="#2980BC" height={100} width={100} /></div>) : ('')}
        {store.getState().Tennis.logged === true ? (
          <div className="modBandeau" id="modifyBandeau" key={idArt}>
            <div><h3>Modifier un article</h3></div>
            <form ref={form} id="formmodify" className="form" onSubmit={handleSubmit(modifyArticle)}>
              <span><button type="button" className="closeButton" onClick={closeArticle}>X</button></span>
              <input type="hidden" name="id" id="id" value={idArt} />
              {/* <label htmlFor="title"> */}
              <input type="text" className="input_date" name="title" id="title" defaultValue={bandeau.titre} />
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

              {img === null ? (
                <div style={{
                  backgroundImage: `url(${bandeau.image})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  width: '100%',
                  height: '17rem',
                  backgroundPositionX: 'center',
                  backgroundPositionY: 'center',
                }}
                />
              ) : (
                <div style={{
                  backgroundImage: `url(${img})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  width: '100%',
                  height: '17rem',
                  backgroundPositionX: 'center',
                  backgroundPositionY: 'center',
                }}
                />
              // <img src="https://cdn.futura-sciences.com/buildsv6/images/mediumoriginal/6/5/2/652a7adb1b_98148_01-intro-773.jpg" className="small_img" alt="image_article" />
              )}

              <input type="text" name="image" id="input_img" className="input_date" defaultValue={img} onChange={changeImage} />
              <span>
                <select name="imagebandeau" className="selectImg" id="bandeau-select" onChange={(e) => picChange(e)}>
                  <option>Choisir une image</option>
                  {pics.map((option, index) => (
                    <option key={index} value={option.link}>
                      {option.name}
                    </option>
                  ))}
                </select>
                <div className="form_upload">
                  <label htmlFor="formFileLg" className="form-label" />
                  <input className="form-control input_file" id="formFile" type="file" accept="image/png, image/gif, image/jpeg" onChange={handleChangeUpload} />
                  {(file !== undefined) && (<span className="button_span"><button className="szh-menu-button myButton up" onClick={handleSubmit(handleSubmitPic)}>Upload</button></span>)}
                </div>

              </span>

              <label htmlFor="date">
                {/* <input type="text" className="input_date" name="date" readOnly value={bandeau.date} {...register('date', { required: 'Veuillez entrer une date' })} /> */}
                {/* <input type="hidden" className="input_date" name="date" readOnly value={bandeau.date} /> */}
                <span className="input_date">Publié le : {bandeau.date}</span>

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
                initialValue={bandeau.contenu}
                init={{
                  height: 500,
                  menubar: true,
                  plugins: 'lists link image help wordcount emoticons code',
                  toolbar: 'undo redo | formatselect | '
            + 'bold italic underline backcolor forecolor fontsize fontfamily | alignleft aligncenter '
            + 'alignright alignjustify | bullist numlist outdent indent | '
            + 'removeformat | help | language | emoticons | code',
                  // toolbar: 'language',
                  selector: 'textarea', // change this value according to your HTML
                  language: 'fr_FR',
                  content_style: "@import url('https://fonts.googleapis.com/css2?family=ABeeZee&family=Montserrat:wght@300;400&display=swap')",
                  font_family_formats: 'ABeeZee=abeezee,sans-serif; Arial=arial,helvetica,sans-serif; Courier New=courier new,courier,monospace; AkrutiKndPadmini=Akpdmi-n; ',
                }}
                textareaName="content"
                name="contenu"
              />
              <button className="myButton_modify" type="submit"> Envoyer </button>
            </form>
          </div>
        ) : ('TINTIN')}
      </>
    );
  } window.location.replace('/');
}

export default ModifyArticle;
