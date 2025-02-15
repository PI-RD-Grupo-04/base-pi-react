import './Home.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer' 
import ProductCard from '../../components/productCard/ProductCard'

function Home() {
    return (
        <> 
        <Header/> 
        
            <h1>Produtos</h1>
            <ProductCard link='https://i.ibb.co/nP8cZL2/abacaxi.png' nome="abacaxi" 
            peso={1.00} price={12.90} />
            <Footer/>
        </>
    )
}

export default Home