import React, { useEffect } from 'react';
import './styles.scss';
import Table from 'react-bootstrap/Table'

function Entrainements() {

    useEffect(() => {
        window.scrollTo({
            // eslint-disable-next-line no-undef
            top: 0,
            behavior: 'smooth',
          })
    }, [])

  return (
    <>
    <h2 className="col-2-small title_section">Les entrainements</h2>
    <div className="d-flex flex-row flex-wrap mb-5 justify-content-around mar">
    <div className='table-wrapper'>
    <Table striped bordered hover className="mobtab">
    <thead><tr style={{ backgroundColor:"#f56a6a", boxShadow: "0px 0px 11px 3px #f56a6a, 0px -5px 4px 0px #f56a6a" }}>
                                                  <td align="center" valign="baseline" scope="col"><span className="style5">Cours</span>                                                    </td>
                                                  <td align="center" valign="baseline" scope="col"><span className="style5">Nombre de séances </span></td>
                                                  <td align="center" valign="baseline" scope="col"><span className="style5">Durée</span></td>
                                                  <td align="center" valign="baseline" scope="col"><span className="style5">Nombre de personnes </span></td>
                             					 <td align="center" valign="baseline" scope="col"><span className="style5">Tarif année / personne </span></td>
												</tr></thead>
                                              <tbody>
                                                 <tr>
                                                   <td height="63" colSpan="5"><div align="center" className="style6">Jeunes</div></td>
                                                 </tr>
                                                 <tr>
                                                  <td height="63"><strong>Baby tennis  (3/4 ans) </strong></td>
                                                  <td><div align="center">25</div></td>
                                                  <td><div align="center">45 Mins </div></td>
                                                  <td><div align="center">6</div></td>
                                                  <td><div align="center">79 € </div></td>
                                                </tr>
                                                <tr>
                                                  <td height="63"><strong>Mini tennis (5/6 ans) </strong></td>
                                                  <td><div align="center">25 </div></td>
                                                  <td><div align="center">1 h </div></td>
                                                  <td><div align="center">8</div></td>
                                                  <td><div align="center">89 € </div></td>
                                                </tr>
                                                <tr>
                                                  <td height="63"><strong>Mini tennis renforcé </strong></td>
                                                  <td><div align="center">20</div></td>
                                                  <td><div align="center">1 h</div></td>
                                                  <td><div align="center">6</div></td>
                                                  <td><div align="center">99 € </div></td>
                                                </tr>
                                                <tr>
                                                  <td height="63"><strong>1 cours mini tennis + <br />
                                                  1 cours mini tennis renforcé </strong></td>
                                                  <td><div align="center">45</div></td>
                                                  <td><div align="center">2 h</div></td>
                                                  <td><div align="center">6</div></td>
                                                  <td><div align="center">179 € </div></td>
                                                </tr>
                                                <tr>
                                                  <td height="63"><strong>Club junior </strong></td>
                                                  <td><div align="center">25</div></td>
                                                  <td><div align="center">1 h 30 </div></td>
                                                  <td><div align="center">8</div></td>
                                                  <td><div align="center">99 € </div></td>
                                                </tr>
                                                <tr>
                                                  <td height="63"><strong>Club junior renforcé </strong></td>
                                                  <td><div align="center">20</div></td>
                                                  <td><div align="center">1 h 30 </div></td>
                                                  <td><div align="center">6</div></td>
                                                  <td><div align="center">109 € </div></td>
                                                </tr>
                                                <tr>
                                                  <td height="63"><strong>1 cours junior +<br /> 
                                                  1 cours junior renforcé </strong></td>
                                                  <td><div align="center">45</div></td>
                                                  <td><div align="center">3 h </div></td>
                                                  <td><div align="center">6</div></td>
                                                  <td><div align="center">199 € </div></td>
                                                </tr>
                                                <tr>
                                                  <td height="63"><strong>1 cours junior vert +<br />
1 cours junior vert renforcé</strong></td>
                                                  <td><div align="center">45</div></td>
                                                  <td><div align="center">3 h</div></td>
                                                  <td><div align="center">6</div></td>
                                                  <td><div align="center">246 € </div></td>
                                                </tr>
                                                <tr>
                                                  <td height="63"><strong>2 cours junior vert renforcé</strong></td>
                                                  <td><div align="center">50</div></td>
                                                  <td><div align="center">3 h</div></td>
                                                  <td><div align="center">6</div></td>
                                                  <td><div align="center">279 € </div></td>
                                                </tr>
                                                <tr>
                                                  <td height="63"><strong>Cours compétition jeunes </strong></td>
                                                  <td><div align="center">25</div></td>
                                                  <td><div align="center">1 h 30 </div>                                                    </td>
                                                  <td><div align="center">6</div></td>
                                                  <td><div align="center">190 € </div></td>
                                                </tr>
                                                <tr>
                                                  <td height="63"><strong>Cours compétition jeunes </strong></td>
                                                  <td><div align="center">25</div></td>
                                                  <td><div align="center">1 h 30 </div></td>
                                                  <td><div align="center">5</div></td>
                                                  <td><div align="center">228 € </div></td>
                                                </tr>
                                                <tr>
                                                  <td height="63"><strong>Cours compétition jeunes</strong></td>
                                                  <td><div align="center">25</div></td>
                                                  <td><div align="center">1 h 30 </div></td>
                                                  <td><div align="center">4</div></td>
                                                  <td><div align="center">285 € </div></td>
                                                </tr>
                                                <tr>
                                                  <td height="63"><strong>Cours compétition jeunes (Mer / Ven) </strong></td>
                                                  <td><div align="center">50</div></td>
                                                  <td><div align="center">3 h</div></td>
                                                  <td><div align="center">6</div></td>
                                                  <td><div align="center">349 € </div></td>
                                                </tr>
                                                <tr>
                                                  <td height="63"><strong>Cours compétition jeunes (Ven / Sam) </strong></td>
                                                  <td><div align="center">45</div></td>
                                                  <td><div align="center">3 h</div></td>
                                                  <td><div align="center">6</div></td>
                                                  <td><div align="center">310 € </div></td>
                                                </tr>
                                                <tr>
                                                  <td height="63"><strong>Cours compétition jeunes (Mer / Sam) </strong></td>
                                                  <td><div align="center">45</div></td>
                                                  <td><div align="center">3 h</div></td>
                                                  <td><div align="center">6</div></td>
                                                  <td><div align="center">310 € </div></td>
                                                </tr>
                                                <tr>
                                                  <td height="63"><strong>Cours compétition jeunes (Sam) </strong></td>
                                                  <td><div align="center">25</div></td>
                                                  <td><div align="center">1 h 30 </div></td>
                                                  <td><div align="center">6</div></td>
                                                  <td><div align="center">190 € </div></td>
                                                </tr>
                                                <tr>
                                                  <td height="63"><strong>Cours physique </strong></td>
                                                  <td><div align="center">20</div></td>
                                                  <td><div align="center">1 h </div></td>
                                                  <td><div align="center">8</div></td>
                                                  <td><div align="center">60 € </div></td>
                                                </tr>
                                                <tr>
                                                  <td height="63" colSpan="5"><div align="center" className="style6">Adultes</div></td>
                                                </tr>
                                                <tr>
                                                  <td height="63"><strong>Cours adultes </strong></td>
                                                  <td><div align="center">20</div></td>
                                                  <td><div align="center">1 h 30 </div></td>
                                                  <td><div align="center">6</div></td>
                                                  <td><div align="center">135 € </div></td>
                                                </tr>
                                                <tr>
                                                  <td height="63"><strong>Cours adultes </strong></td>
                                                  <td><div align="center">20</div></td>
                                                  <td><div align="center">1 h 30 </div></td>
                                                  <td><div align="center">5</div></td>
                                                  <td><div align="center">180 € </div></td>
                                                </tr>
                                                <tr>
                                                  <td height="63"><strong>Cours adultes </strong></td>
                                                  <td><div align="center">20</div></td>
                                                  <td><div align="center">1 h 30 </div></td>
                                                  <td><div align="center">4</div></td>
                                                  <td><div align="center">230 € </div></td>
                                                </tr>
                                                <tr>
                                                  <td height="63"><strong>Fit Tennis </strong></td>
                                                  <td><div align="center">20</div></td>
                                                  <td><div align="center">1 h</div></td>
                                                  <td><div align="center">8 </div></td>
                                                  <td><div align="center">80 € </div></td>
                                                </tr>
                                                
                                                <tr>
                                                  <td height="63"><strong>Binome</strong></td>
                                                  <td><div align="center">20</div></td>
                                                  <td><div align="center">1 h</div></td>
                                                  <td><div align="center">2</div></td>
                                                  <td><div align="center">300 € </div></td>
                                                </tr>
                                                <tr>
                                                  <td height="63"><strong>Individuel</strong></td>
                                                  <td><div align="center">10</div></td>
                                                  <td><div align="center">1 h</div></td>
                                                  <td><div align="center">1</div></td>
                                                  <td><div align="center">250 € </div></td>
                                                </tr>
                                                <tr>
                                                  <td height="63">&nbsp;</td>
                                                  <td>&nbsp;</td>
                                                  <td>&nbsp;</td>
                                                  <td>&nbsp;</td>
                                                  <td>&nbsp;</td>
                                                </tr>
                                              </tbody>
                                              <tfoot>
                                              </tfoot>
        </Table>
    </div>
    </div>
    </>
 );
}

export default Entrainements;
