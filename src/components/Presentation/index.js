import React , { useEffect } from 'react';
import './styles.scss';
import Carte from 'src/assets/images/carte.png';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Table from 'react-bootstrap/Table';


function Presentation() {

  useEffect(() => {
    window.scrollTo({
        // eslint-disable-next-line no-undef
        top: 0,
        behavior: 'smooth',
      })
}, [])

  return (
    <>        
     <h2 className="col-2-small title_section">Présentation du club</h2>
      <div className="d-flex flex-row flex-wrap mb-5 justify-content-around" id="container_pres">
       
        <div className="p-2 "><img src={Carte} width="100%" align="left" className="carte" /></div>
        <div className="p-2 flex-shrink-1">
        
        <div className="col-12-small">
                      <div className="infos_club">
                      <AiOutlineArrowRight /> Fédération : Fédération Française de Tennis<br />
                      <AiOutlineArrowRight /> Ligue: Occitanie Pyrénées-Méditérannée<br />
                      <AiOutlineArrowRight /> Comité : Gard (30)<br />
                      <AiOutlineArrowRight /> Territoire d'intervention : Alès Agglomération - Salindres<br />
                      <AiOutlineArrowRight /> Statut juridique : Association loi
                          1901<br />
                      <AiOutlineArrowRight /> Date de création: 1975 
                      </div>
                      <div className="infos_club">
                      <p>Pour la saison 2022, l'AS Salindres Tennis est toujours <b>le 2 &egrave;me club</b> d'Al&egrave;s Agglom&eacute;ration en terme de licenci&eacute;s.</p>
                      <br /><br />
		               <strong>224 licenci&eacute;s</strong> r&eacute;partis comme suit : <br />
                       <Table striped bordered hover>
                         <thead>
                            <tr>
                              <th width="59">Hommes</th>
                              <th width="56">Femmes</th>
                              <th colSpan="2">Jeunes</th>
                            </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                   <td>&nbsp;</td>
                                   <td>&nbsp;</td>
                                   <td>Filles</td>
                                   <td>Gar&ccedil;ons</td>
                                   </tr>
                                        <tr>
                                            <td>82</td>
                                            <td>36</td>
                                            <td width="74">72</td>
                                            <td width="86">34</td>
                                            </tr>
                                            </tbody>
                                            <tfoot>

                                            </tfoot>
                            </Table>
                            <p>Le taux de fid&eacute;lisation en 2021 est de 70 % chez les adultes, 45 % chez les enfants et 60 % tout confondu. </p>
						                  <hr></hr>
                                          Pour la saison 2021, l'AS Salindres Tennis est toujours <b>le 2 &egrave;me club</b> d'Al&egrave;s Agglom&eacute;ration en terme de licenci&eacute;s.<br />
						                    <br />
						                        <strong>163 licenci&eacute;s</strong> r&eacute;partis comme suit : <br></br>
                                                <Table striped bordered hover>
                         <thead>
                            <tr>
                              <th width="59">Hommes</th>
                              <th width="56">Femmes</th>
                              <th colSpan="2">Jeunes</th>
                            </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                   <td>&nbsp;</td>
                                   <td>&nbsp;</td>
                                   <td>Filles</td>
                                   <td>Gar&ccedil;ons</td>
                                   </tr>
                                        <tr>
                                            <td>61</td>
                                            <td>30</td>
                                            <td width="74">23</td>
                                            <td width="86">49</td>
                                            </tr>
                                            </tbody>
                                            <tfoot>

                                            </tfoot>
                            </Table>
<p>Le taux de fidélisation en 2022 est de 65 % chez les adultes, 45 % chez les enfants et 55 % tout confondu.</p>
                      </div>
                  </div>
        </div>
      </div>
      {/* <div className="d-flex flex-row-reverse justify-content-center">
        <div className="p-2">Flex item 1</div>
        <div className="p-2">Flex item 2</div>
        <div className="p-2">Flex item 3</div>
      </div> */}
  
      {/* </div>
      <div className="container">

              <div className="row">

                  <div className="col-6 col-12-small">
                      <img src={Carte} width="80%" align="left" className="carte" />
                  </div>
                  <div className="col-6 col-12-small">
                      <div className="infos_club">
                      <AiOutlineArrowRight /> Fédération : Fédération Française de Tennis<br />
                      <AiOutlineArrowRight /> Ligue: Occitanie Pyrénées-Méditérannée<br />
                      <AiOutlineArrowRight /> Comité : Gard (30)<br />
                      <AiOutlineArrowRight /> Territoire d'intervention : Alès Agglomération - Salindres<br />
                      <AiOutlineArrowRight /> Statut juridique : Association loi
                          1901<br />
                      <AiOutlineArrowRight /> Date de création: 1975 
                      </div>
                      <div className="infos_club">
                      <p>Pour la saison 2022, l'AS Salindres Tennis est toujours <b>le 2 &egrave;me club</b> d'Al&egrave;s Agglom&eacute;ration en terme de licenci&eacute;s.</p>
                      <br /><br />
		               <strong>224 licenci&eacute;s</strong> r&eacute;partis comme suit : <br />
                       <Table striped bordered hover>
                         <thead>
                            <tr>
                              <th width="59">Hommes</th>
                              <th width="56">Femmes</th>
                              <th colSpan="2">Jeunes</th>
                            </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                   <td>&nbsp;</td>
                                   <td>&nbsp;</td>
                                   <td>Filles</td>
                                   <td>Gar&ccedil;ons</td>
                                   </tr>
                                        <tr>
                                            <td>82</td>
                                            <td>36</td>
                                            <td width="74">72</td>
                                            <td width="86">34</td>
                                            </tr>
                                            </tbody>
                                            <tfoot>

                                            </tfoot>
                            </Table>
                            <p>Le taux de fid&eacute;lisation en 2021 est de 70 % chez les adultes, 45 % chez les enfants et 60 % tout confondu. </p>
						                  <hr></hr>
                                          Pour la saison 2021, l'AS Salindres Tennis est toujours <b>le 2 &egrave;me club</b> d'Al&egrave;s Agglom&eacute;ration en terme de licenci&eacute;s.<br />
						                    <br />
						                        <strong>163 licenci&eacute;s</strong> r&eacute;partis comme suit : <br></br>
                                                <Table striped bordered hover>
                         <thead>
                            <tr>
                              <th width="59">Hommes</th>
                              <th width="56">Femmes</th>
                              <th colSpan="2">Jeunes</th>
                            </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                   <td>&nbsp;</td>
                                   <td>&nbsp;</td>
                                   <td>Filles</td>
                                   <td>Gar&ccedil;ons</td>
                                   </tr>
                                        <tr>
                                            <td>61</td>
                                            <td>30</td>
                                            <td width="74">23</td>
                                            <td width="86">49</td>
                                            </tr>
                                            </tbody>
                                            <tfoot>

                                            </tfoot>
                            </Table>
<p>Le taux de fidélisation en 2022 est de 65 % chez les adultes, 45 % chez les enfants et 55 % tout confondu.</p>
                      </div>
                  </div>
              </div> */}

          </>
 );
}

export default Presentation;
