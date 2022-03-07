import './Footer.css' 
import iconWhatsapp from './assets/Footer/icon-whatsapp'

function Footer() {

    return (
        <div>
            <footer classname="footertext fluid">
  <div classname="container-fluid mt-4 mb-4">
    <div classname="row justify-content-around">

      <div classname="col-6 col-md-8 col-lg-7">
        <div classname="row text-justif">
          <div classname="col-sm-6 col-md-4 col-lg-4 col-12">
            <ul classname="list-unstyled ">
              <li><strong>Institucional</strong></li>
              <li classname="btn-link"> <a href="./Faq-politicas.html">FAQs e Política da Empresa </a>
              </li>
              <li classname="btn-link"> <a href="./comoComprar.html">Como Comprar</a> </li>
              <li classname="btn-link"> <a href="./seguranca.html">Segurança</a> </li>
              <li classname="btn-link"> <a href="./politicaFrete.html">Políticas de Frete</a> </li>
              <li classname="btn-link"> <a href="./contato.html">Contato</a> </li>
            </ul>
          </div>
          <div classname="col-sm-6 col-md-4 col-lg-4 col-12">
            <ul classname="list-unstyled">
              <li><strong>Atendimento</strong></li>
              <li classname="btn-link"> <a href="#"><img src={iconWhatsapp} width="20px"/> (11)
                  98765-1243</a>
              <li>
              <li classname="btn-link"> <a href="#"><img src="../images/Footer/icon-email.png" width="20px">
                  Ved@sac.com.br</a>
              </li>
            </ul>
          </div>
          <div classname="col-sm-6 col-md-4 col-lg-4 col-12">
            <ul classname="list-unstyled">
              <li><strong>Minha Conta</strong></li>
              <li classname="btn-link"> <a href="#">Meus Dados</a> </li>
              <li classname="btn-link"> <a href="#">Meus Pedidos</a> </li>
              <li classname="btn-link"> <a href="#">Meus Favoritos</a> </li>
              <li classname="btn-link"> <a href="#">Criar uma conta</a> </li>
            </ul>
          </div>
        </div>
      </div>
      <div classname="col-3 text-center">
        <ul classname="list-unstyled">
          <li><strong>Certificados e Pagamentos</strong></li>
          <li classname="btn-link"> <img src="../images/Footer/selo-organic.png" width="60px"/> </li>
          <li><strong>Formas de Pagamentos</strong></li>
          <li><img src="../images/Footer/icon-pix.png" width="30px"/> <img src="../images/Footer/icon-visa.png"
              width="30px"/> <img src="../images/Footer/icon-elo.png" width="30px"/>
            <img src="../images/Footer/icon-mastercard.png" width="30px"><img src="../images/Footer/icon-boleto.jpg"
              width="30px">
          </li>
          <li><strong>Bancos</strong></li>
          <li> <img src="../images/Footer/icon-itau.png" width="30px"><img src="../images/Footer/icon-nu.png"
              width="30px"><img src="../images/Footer/icon-bc.png" width="30px"><img
              src="../images/Footer/icon-bradesco.png" width="30px"></li>
          <li classname="btn-link"> <a href="#"></a> </li>
        </ul>
      </div>
    </div>
  </div>
  <div classname="row  text-center  col-12 rodape">
    <p>©️ 2022 VED - Alimentos Orgânicos. Todos os direitos reservados.</p>
  </div>
</footer>
        </div>
    )</ul>
}

export default Footer