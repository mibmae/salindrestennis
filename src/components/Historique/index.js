import React, { useEffect } from 'react';
import './styles.scss';
import Table from 'react-bootstrap/Table'

function Historique() {

	useEffect(() => {
        window.scrollTo({
            // eslint-disable-next-line no-undef
            top: 0,
            behavior: 'smooth',
          })
    }, [])

  return (
    <>        
    <h2 className="col-2-small title_section">Historique du club</h2>
     <div className="d-flex flex-row flex-wrap mb-5 justify-content-around mar">
        <div className='table-wrapper'>
                      <Table striped bordered hover>
                      <thead>
																<tr>
																	<th className="nbr">Date</th>
																	<th className="nbl">Ev&eacute;nement</th>
																</tr>
															</thead>
															<tbody>
																<tr>
																	<td className="nbr">1975</td>
																	<td className="nbl">Construction des courts au sein du complexe sportif (Pr&eacute;sident fondateur Bruno Bianchin)</td>
																</tr>
																<tr>
																	<td className="nbr">1995</td>
																	<td className="nbl"> Jean-Claude Mo&euml;s est &eacute;lu pr&eacute;sident </td>
																</tr>
																<tr>
																	<td className="nbr">2002</td>
																	<td className="nbl">Le club poss&egrave;de 5 courts </td>
																</tr>
																<tr>
																	<td className="nbr">2004</td>
																	<td className="nbl">Inauguration du Club house, l'agrandissement de celui-ci et la cr&eacute;ation de gradin </td>
																</tr>
																<tr>
																	<td className="nbr">2006</td>
																	<td className="nbl">Premi&egrave;re saison en Nationale 4 </td>
																</tr>
																<tr>
																  <td className="nbr">2007</td>
																  <td className="nbl">Mont&eacute;e en Nationale 2 </td>
															  </tr>
																<tr>
																  <td className="nbr">2012</td>
																  <td className="nbl">Mont&eacute;e en Nationale 1A </td>
															  </tr>
																<tr>
																  <td className="nbr">2014</td>
																  <td className="nbl">Incendie du Club House </td>
															  </tr>
																<tr>
																  <td className="nbr">2017/2018</td>
																  <td className="nbl">Reconstruction du club et r&eacute;am&eacute;nagement du Club House par les b&eacute;n&eacute;voles</td>
															  </tr>
																<tr>
																  <td className="nbr">2018</td>
																  <td className="nbl">Inauguration du nouveau Club House </td>
															  </tr>
																<tr>
																	<td className="nbr">2019</td>
																	<td className="nbl">Delphine Garr&eacute; est &eacute;lue Pr&eacute;sidente du club </td>
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

export default Historique;
