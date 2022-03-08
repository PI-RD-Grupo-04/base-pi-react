import './Address.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import CustomerMenu from '../../components/customerMenu/CustomerMenu'



function Address() {

    return (
        <>
            <Header />
            <CustomerMenu />
            {/* ************* COMEÇO DIREITA da pagina começo  **********************/}
            <div className="col-12 col-md-9 order-md-last  mb-3">
                {/*  inicio pag lado direito Meus Endereços */}
                <h3 className="text-center title-main">Meus Endereços</h3>
                {/*  Primeiro campo */}
                <div className="row mb-3 pb-3 pt-3 ">
                    <div className="col-12 border">
                        <input type="checkbox" id="end-01" name="end-01" value="end-01" />
                            <label for="end-01">Rua: Coelho da Fonseca</label>
                            <label for="end-01">N°: 1040</label>
                            <label for="end-01">complemento: Casa </label>
                            <label for="end-01">Bairro: Industrial </label>
                            <label for="end-01">CEP: 12390-045 </label>
                            <label for="end-01">Cidade: São Paulo </label>
                            <label for="end-01">Estado: São Paulo </label>
                            <label for="end-01">País: Brasil . </label>
                    </div>

                    {/*  Segundo campo meus endereços */}

                    <div className="row mb-3 pb-3 pt-3">
                        <div className="col-12 border">
                            <input type="checkbox" id="end-02" name="end-02" value="end-02" />
                                <label for="end-02">Avenida: Dom Bosco</label>
                                <label for="end-02">N°: 3090</label>
                                <label for="end-02">complemento: Prédio 3 </label>
                                <label for="end-02">Bairro: Industrial </label>
                                <label for="end-02">CEP: 12390-045 </label>
                                <label for="end-02">Cidade: Alta </label>
                                <label for="end-02">Estado: Rio de Janeiro </label>
                                <label for="end-02">País: Brasil . </label>
                        </div>
                    </div>
                    {/*  Final dos Inputs Label */}
                    {/*  CADASTRAR NOVOS ENDEREÇOS */}

                    {/*  ************************MODEL PARA CADASTRO DE CARTÃO ********************* */}

                    {/*  DIVISÃO DOS BUTTONS */}
                    <div className="row">
                        {/*  BUTTON DO MODAL */}
                        <div className="col-6">
                            <button type="button" className="btn btn-suport" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Cadastrar Endereço
                            </button>
                        </div>
                        {/*  BUTTON DO EXCLUIR CARTÃO */}
                        <div className="col-6">
                            <button className=" btn btn-delete " type="submit">Excluir Cartão</button>
                        </div>

                    </div>

                    {/*  ****************** CAMPO DO MODAL ****************** */}

                
                        



                </div>
            </div>



        <Footer />

                    </>
                    )


}

export default Address;