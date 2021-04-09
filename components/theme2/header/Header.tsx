import Link from 'next/link';
import { useSelector } from 'react-redux';
import { HeaderContainer, Logo, Nav,InputSearch } from './Styles';
import { HeaderProps } from '../../../models/Theme1';


const Header: React.SFC<HeaderProps> = ({ data }) => {
    const { cart: { productsNumber } } = useSelector((state: any) => state);
    const { content: { logo, links }, styles: { height, bgColor } } = data;
    const getCartProducts = (key: string) => key.includes('cart') ? 12 : 0;
    console.log('los links', links)

    return (
        <HeaderContainer bgColor={bgColor} height={height}>
            <Logo>{logo}</Logo>
            <Nav>
                {links.map((link: any, index: number) => {

                    for (const key in link) {

                        if (typeof link[key] === 'string') {
                            return key !== 'icon' ? (<Link key={`link-${index}`} href={link[key]}>{key}</Link>)
                                : (<a key={`link-${index}`} className={link[key]}>
                                    {getCartProducts(link[key]) ? <small>{productsNumber}</small> : ''}
                                </a>);
                        } else {
                            console.log('este', key)
                            return (
                                <div key={`wrapper-${index}`} className='relative link-wrapper'>
                                    <p className='mr-4 link-cont'>{key}<i className="fas fa-chevron-down"></i></p>
                                    <div className='flex flex-col absolute sub-nav'>
                                        {link[key]?.map((link: any, index: number) => {
                                            for (const key in link) {
                                                return <Link key={`link-${index}`} href={link[key]}>{key}</Link>
                                            }
                                        })}
                                    </div>
                                </div>
                            )
                        }
                    }
                })}
              <div className="search-container ml-3 rounded relative ss">
                  <InputSearch type="text" className='rounded px-2 py-1' placeholder='Buscar'/>
                  <i className="fas fa-search search-icon absolute"></i>
              </div>

            </Nav>
        </HeaderContainer>
    );
};

export default Header;