import React, { useState, useEffect } from 'react';
import './styles.scss';
import { bsTrash } from 'react-icons/bs';
import { IoTrashBin } from 'react-icons/io';
import { FaTrash } from 'react-icons/fa';
import { MdModeEdit } from 'react-icons/md';
import Table from 'react-bootstrap/Table';
import store from 'src/store';
import { generateUniqueKey } from 'src/functions';
import { useNavigate, Link } from 'react-router-dom';
import ModifyBandeau from 'src/containers/ModifyBandeau/index.js';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import NewBandeau from './newBandeau';

const Alert = withReactContent(Swal);

function Admin() {
  const navigate = useNavigate();

  const [bandeauList, setBandeauList] = useState([]);
  const [articlesList, setArticlesList] = useState([]);
  const [bandeauId, setBandeauId] = useState(null);

  useEffect(() => {
    window.scrollTo({
      // eslint-disable-next-line no-undef
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const getArticles = () => {
    fetch('https://backtennis.herokuapp.com/articles/alladmin')
      .then((response) => response.json())
      // .then((res) => console.log(res.data))
      .then((res) => setArticlesList(res.data));
  };

  const getBandeau = () => {
    fetch('https://backtennis.herokuapp.com/bandeau/alladmin')
      .then((response) => response.json())
      // .then((res) => console.log(res.data))
      .then((res) => {
        setBandeauList(res.data);
      });
  };

  // const getPaging = () => {
  //   fetch('https://backtennis.herokuapp.com/paging/all')
  //     .then((response) => response.json())
  //     .then((res) => {
  //       console.log(res.paging);
  //     });
  // };

  useEffect(() => {
    getBandeau();
    getArticles();
    // getPaging();
  }, []);

  const delArticle = (id) => {
    fetch(`https://backtennis.herokuapp.com/articles/secure/delete/${id}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': `${localStorage.getItem('token_Tennis')}`,

      },
    }).then((res) => {
      if (res.status === 200) {
        Swal.fire({
          title: 'Item supprimé',
          text: 'L\'item a bien été supprimé',
          icon: 'success',
          confirmButtonText: 'Ok',
        }).then((result) => {
          if (result.isConfirmed) {
            getBandeau();
          }
        });
      }
      // Swal.fire({
      //   title: 'Article ajouté',
      //   text: `L'article a bien été ajouté`,
      //   icon: 'success',
      //   confirmButtonText: 'Ok'
      // }).then((result) => {
      //   if (result.isConfirmed) {
      //     navigate('/admin')
      //   }
      // })
    });
  };
  // const addBandeau = () => {
  //     document.getElementById('newBandeau').style.display = 'flex';
  //     document.getElementById('list_articles').style.display = 'none';
  //     document.getElementById('list_articless').style.display = 'none';
  //   }
  // const addArticle = () => {
  //     document.getElementById('newArticle').style.display = 'flex';
  //     document.getElementById('list_articles').style.display = 'none';
  //     document.getElementById('list_articless').style.display = 'none';
  //   }

  // const modifyBandeau = (id) => {
  //   setBandeauId(id)
  //   setTimeout(() => {
  //     document.getElementById('list_articles').style.display = 'none';
  //     document.getElementById('list_articless').style.display = 'none';
  //     document.getElementById('modfiYB').style.display = 'flex';
  //     document.getElementById('modifyBandeau').style.display = 'flex';
  //     window.scrollTo({
  //       // eslint-disable-next-line no-undef
  //       top: 0,
  //       behavior: 'smooth',
  //     })
  //   }, 50);

  //     // document.getElementById('list_articles').style.display = 'none';
  //     // document.getElementById('list_articless').style.display = 'none';

  // }
  const modifyArticle = () => {
    console.log('modify');
  };

  useEffect(() => {
    if (store.getState().Tennis.logged !== true) {
      navigate('/login');
    }
  }, []);

  useEffect(() => {

  }, [bandeauId]);

  const toggleBandeau = (e, id) => {
    const checkbox = document.getElementById(`bandeau${id}`);
    console.log(localStorage.getItem('token_Tennis'));
    checkbox.addEventListener('change', () => {
      fetch(`https://backtennis.herokuapp.com/bandeau/secure/toggle/${id}/${checkbox.checked}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'x-access-token': `${localStorage.getItem('token_Tennis')}`,
        },
      });
    });
  };
  const toggleArticle = (e, id) => {
    const checkbox = document.getElementById(`article${id}`);
    console.log(localStorage.getItem('token_Tennis'));
    checkbox.addEventListener('change', () => {
      fetch(`https://backtennis.herokuapp.com/articles/secure/toggle/${id}/${checkbox.checked}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'x-access-token': `${localStorage.getItem('token_Tennis')}`,
        },
      });
    });
  };

  return (
  //    <div className="admin_container">
    <div className="admin">
      {store.getState().Tennis.logged === true ? (
        <>
          <h2 className="col-2-small admin_title title_section">Partie Admin</h2>
          <div className="admin_menu">
            <ul className="admin_menu_items">
              {/* <li ><button type="button" className="szh-menu-button myButton"onClick={addBandeau}>Ajouter un item au bandeau</button> </li> */}
              {/* <li><button type="button" className="szh-menu-button myButton mtbutton">Voir la liste des items</button> </li> */}
            </ul>
          </div>
          <div className="admin">
            <div className="list_articles" id="list_articles">
              <h2 className="admin_subtitle">Bandeau</h2>
              <span className="but">
                <Link to="/admin/newbandeau"><button type="button" className="szh-menu-button myButton">Ajouter un item</button></Link>
              </span>
              <div className="list_data">
                <div className="table-wrapper">
                  <Table striped hover>
                    {/* <table> */}
                    <tbody>
                      {bandeauList.map((article) => (
                        <tr key={generateUniqueKey(article)}>
                          <td width="90%">{article.titre}</td>
                          <td width="10%">
                            <label className="switch">
                              {article.enligne === 'true' ? (
                                <input type="checkbox" id={`bandeau${article.id}`} defaultChecked={Boolean(article.enligne)} onClick={(e) => toggleBandeau(e, article.id)} />
                              ) : (<input type="checkbox" id={`bandeau${article.id}`} defaultChecked={false} onClick={(e) => toggleBandeau(e, article.id)} />
                              )}
                              <span />
                            </label>
                          </td>
                          {/* <td width="10%"> <MdModeEdit onClick={() => modifyBandeau(article.id)} /></td> */}
                          <td width="10%"> <Link to={`/admin/modifybandeau/${article.id}`}><MdModeEdit /></Link></td>
                          <td width="10%"> <FaTrash onClick={() => delArticle(article.id)} /></td>
                        </tr>
                      ))}

                    </tbody>
                    <tfoot />
                    {/* </table> */}
                  </Table>
                </div>
              </div>
            </div>
          </div>

          <div className="admin">
            <div className="list_articles" id="list_articless">
              <h2 className="admin_subtitle">Articles</h2>
              <span className="but">
                <Link to="/admin/newarticle"><button type="button" className="szh-menu-button myButton">Ajouter un item</button></Link>
              </span>
              <div className="list_data">
                <div className="table-wrapper">
                  <Table striped hover>
                    {/* <table> */}
                    <tbody>
                      {articlesList.map((article) => (
                        <tr key={generateUniqueKey(article)}>
                          <td width="90%"><span>{article.titre}</span></td>
                          <td width="10%">
                            <label className="switch">
                              {article.enligne === 'true' ? (
                                <input type="checkbox" id={`article${article.id}`} defaultChecked={Boolean(article.enligne)} onClick={(e) => toggleArticle(e, article.id)} />
                              ) : (<input type="checkbox" id={`article${article.id}`} defaultChecked={false} onClick={(e) => toggleArticle(e, article.id)} />
                              )}
                              <span />
                            </label>
                          </td>
                          <td width="10%"> <Link to={`/admin/modifyarticle/${article.id}`}><MdModeEdit onClick={() => modifyArticle(article.id)} /></Link></td>
                          <td width="10%"> <FaTrash onClick={() => delArticle(article.id)} /></td>
                        </tr>
                      ))}

                    </tbody>
                    <tfoot />
                    {/* </table> */}
                  </Table>
                </div>
              </div>
            </div>
          </div>
          {/* <div id="modfiYB" className="modfiYB">
          {bandeauId !== null && (
          <ModifyBandeau id="modifyBandeau" idArt={bandeauId} />
          )}
          </div> */}

          {/* <div id="newBandeau"> */}
          {/* <NewBandeau /> */}
          {/* <Modal openStatus={store.getState().Tennis.modal} /> */}
          {/* </div> */}
        </>
      )
        : (navigate('/login'))}
    </div>
  );
}
export default Admin;
