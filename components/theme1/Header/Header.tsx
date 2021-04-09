import Link from 'next/link';
import { useSelector } from 'react-redux';
import { HeaderContainer, Logo, Nav } from './Styles';
import { HeaderProps } from '../../../models/Theme1';


const Header: React.SFC<HeaderProps> = ({ data }) => {
    const { cart: { productsNumber } } = useSelector((state: any) => state);
    const { content: { logo, links }, styles: { height, bgColor } } = data;
    const getCartProducts = (key: string) => key.includes('cart') ? 12 : 0;

    return (
        <HeaderContainer bgColor={bgColor} height={height}>
            <Logo>{logo}</Logo>
            <Nav>
                {links?.map((link: any, index: number) => {
                    for (const key in link) {
                        return key !== 'icon' ? (<Link key={`link-${index}`} href={link[key]}>{key}</Link>)
                            : (<a key={`link-${index}`} className={link[key]}>
                                {getCartProducts(link[key]) ? <small>{productsNumber}</small> : ''}
                            </a>);
                    }
                })}
            </Nav>
        </HeaderContainer>
    );
};

export default Header;