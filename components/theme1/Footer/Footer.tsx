import { FooterContainer } from './Styles';
import { FooterProps } from '../../../models/Theme1';


const Footer: React.SFC<FooterProps> = ({ data }) => {

    const { content: { socialMedia, copyright }, styles: { bgColor, height } } = data;

    return (
        <FooterContainer bgColor={bgColor} height={height}>
            <div className="flex flex-col center items-center">
                <h1 className="mb-1">Siguenos</h1>
                <div className="flex">
                    {socialMedia?.map((social: any, index: number) => {
                        for (const key in social) {
                            return <a key={`social-${index}`} href={social[key]} className={`${key} text-sm`}></a>
                        }
                    })}
                </div>
            </div>
            <small className="pt-5">{copyright}</small>
        </FooterContainer>
    );
}

export default Footer;