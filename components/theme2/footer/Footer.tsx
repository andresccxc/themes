import { FooterContainer } from './Styles';


const Footer = ({ data }: any) => {

    const { content: { columns, copyright }, styles: { bgColor } } = data;

    return (
        <FooterContainer bgColor={bgColor}>
            <div className='columns-container flex justify-center'>
                {columns?.map((col: any, index: number) => (
                    <div key={`col-${index}`} className="footer-col flex justify-center flex-col items-center">
                        <img src={col.img} alt="col-image" />
                        <h3>{col.title}</h3>
                        <p className='text-center text-sm column-text pt-2 description'>{col.description}</p>
                    </div>
                ))}
            </div>
            <p className='text-xs  text-center font-bold'>{copyright}</p>
        </FooterContainer>
    );
}

export default Footer;