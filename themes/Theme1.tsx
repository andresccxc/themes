import Header from '../components/theme1/header/Header';
import Footer from '../components/theme1/footer/Footer';
import Main from '../components/theme1/main/Main';
import { Theme1Props } from '../models/Theme1';

const Theme1: React.SFC<Theme1Props> = ({ data }) => {
    const { header, footer, main } = data;
    return (
        <>
            <Header data={header} />
            <Main data={main} />
            <Footer data={footer} />
        </>
    );
}

export default Theme1;