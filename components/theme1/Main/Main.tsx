import { MainProps } from '../../../models/Theme1';
import Card from './Card';
import { MainContainer, Title, Select, ProductsContainer } from './Styles';

const Main: React.SFC<MainProps> = ({ data }) => {
    const { content: { title, products } } = data;
    return (
        <MainContainer className='p-5'>
            <Title className='block'>{title}</Title>
            <div className='text-center flex justify-center items-center mb-5'>
                <p className='mr-2'>Filtrar por</p>
                <Select name="filter">
                    <option value="price">Precio</option>
                    <option value="outstanding">Destacados</option>
                    <option value="order">Alfabéticamente</option>
                </Select>
            </div>
            <ProductsContainer>
                {products?.map((product: any, index: number) => (
                    <Card key={`product-${index}`} name={product.name} price={product.price} img={product.img} />
                ))}
            </ProductsContainer>
        </MainContainer>
    );
}

export default Main;