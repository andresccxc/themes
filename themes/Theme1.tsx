import Header from '../components/theme1/Header/Header';
import Footer from '../components/theme1/Footer/Footer';
import Main from '../components/theme1/Main/Main';
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