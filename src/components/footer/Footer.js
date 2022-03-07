import './Footer.css'
import iconWhatsapp from './assets/Footer/icon-whatsapp'

function Footer() {

  return (
  <>
   <footer className="footertext fluid">
  <div className="container-fluid mt-4 mb-4">
    <div className="row justify-content-around">

      <div className="col-6 col-md-8 col-lg-7">
        <div className="row text-justif">
          <div className="col-sm-6 col-md-4 col-lg-4 col-12">
            <ul className="list-unstyled ">
              <li><strong>Institucional</strong></li>
              <li className="btn-link"> <a href="./Faq-politicas.html">FAQs e Política da Empresa </a>
              </li>
              <li className="btn-link"> <a href="./comoComprar.html">Como Comprar</a> </li>
              <li className="btn-link"> <a href="./seguranca.html">Segurança</a> </li>
              <li className="btn-link"> <a href="./politicaFrete.html">Políticas de Frete</a> </li>
              <li className="btn-link"> <a href="./contato.html">Contato</a> </li>
            </ul>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4 col-12">
            <ul className="list-unstyled">
              <li><strong>Atendimento</strong></li>
              <li className="btn-link"> <a href="#"><img src="../images/Footer/icon-whatsapp.png" width="20px"> (11)
                  98765-1243</a>
              <li>
              <li className="btn-link"> <a href="#"><img src="../images/Footer/icon-email.png" width="20px">
                  Ved@sac.com.br</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4 col-12">
            <ul className="list-unstyled">
              <li><strong>Minha Conta</strong></li>
              <li className="btn-link"> <a href="#">Meus Dados</a> </li>
              <li className="btn-link"> <a href="#">Meus Pedidos</a> </li>
              <li className="btn-link"> <a href="#">Meus Favoritos</a> </li>
              <li className="btn-link"> <a href="#">Criar uma conta</a> </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-3 text-center">
        <ul className="list-unstyled">
          <li><strong>Certificados e Pagamentos</strong></li>
          <li className="btn-link"> <img src="../images/Footer/selo-organic.png" width="60px"> </li>
          <li><strong>Formas de Pagamentos</strong></li>
          <li><img src="../images/Footer/icon-pix.png" width="30px"> <img src="../images/Footer/icon-visa.png"
              width="30px"> <img src="../images/Footer/icon-elo.png" width="30px">
            <img src="../images/Footer/icon-mastercard.png" width="30px"><img src="../images/Footer/icon-boleto.jpg"
              width="30px">
          </li>
          <li><strong>Bancos</strong></li>
          <li> <img src="../images/Footer/icon-itau.png" width="30px"><img src="../images/Footer/icon-nu.png"
              width="30px"><img src="../images/Footer/icon-bc.png" width="30px"><img
              src="../images/Footer/icon-bradesco.png" width="30px"></li>
          <li className="btn-link"> <a href="#"></a> </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="row  text-center  col-12 rodape">
    <p>©️ 2022 VED - Alimentos Orgânicos. Todos os direitos reservados.</p>
  </div>
</footer>
  
  </>
  
  
  
  
  );
}

                export default Footer