import Header from '../components/theme2/header/Header';
import Footer from '../components/theme2/footer/Footer';
import Main from '../components/theme2/main/Main';


const Theme2 = ({ data }: any) => {
    const { header, footer, main } = data;
    return (
        <>
            <Header data={header} />
            <Main data={main} />
            <Footer data={footer} />
        </>
    );
}

export default Theme2;