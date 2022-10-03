import React, { useEffect } from 'react';
import './styles.scss';
import Table from 'react-bootstrap/Table'
import ancv from "../../../public/img/ancv.jpg"

function Cotisations() {

    useEffect(() => {
        window.scrollTo({
            // eslint-disable-next-line no-undef
            top: 0,
            behavior: 'smooth',
          })
    }, [])
    

  return (
//    <div className="cotisations">
      <>
          
          <h2 className="col-2-small title_section">Les tarifs des cotisations</h2>
          <div className="d-flex flex-row flex-wrap mb-5 justify-content-around mar">
          <div className='table-wrapper'>
              <Table striped bordered hover>
                  {/* <table> */}
                  <tbody>
                      <tr>
                          <td width="723">Adultes</td>
                          <td width="723">99 € </td>
                      </tr>
                      <tr>
                          <td>Jeunes</td>
                          <td>69 € </td>
                      </tr>
                      <tr>
                          <td>Etudiants</td>
                          <td>79 € </td>
                      </tr>
                      <tr>
                          <td>Chomeurs</td>
                          <td>79 €</td>
                      </tr>
                      <tr>
                          <td>Adhésion sans licences </td>
                          <td>120 € </td>
                      </tr>
                  </tbody>
                  <tfoot>
                  </tfoot>
                  {/* </table> */}
              </Table>
              </div>
              </div>
              <h3 className="col-2-small title_section">Moyens de paiement acceptés pour la licence</h3>

              {/* <div className="container_fl"> */}
              {/* <div className="flex1"></div> */}
              
              
              <div className="cotisations"><img className="ancv" src={ancv} /></div>
              {/* </div> */}
          </>


 );
}

export default Cotisations;
