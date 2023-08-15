import FrontSection from "../components/common/FrontSection";
import logo from '../assets/img/appFront/productsAppFront.svg';
import ProductsItems from "../components/Products";
import Solution from '../components/Solution';
import ContactForm from '../components/ContactForm';

function Products(){
    return(
        <>
            <FrontSection header={'Stan assets products'} url={logo} alt={'Stan assets products'}/>
            <ProductsItems />
            <Solution />
            <ContactForm />
        </>
    )
}
export default Products;