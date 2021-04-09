import { MainContainer, Filters, Products } from './Styles';



const Main = ({ data }: any) => {
    const { content: { title } } = data;

    return (
        <MainContainer className='flex'>
            <Filters className="filters">
                <div className="container-filters flex flex-wrap rounded">
                    <button className='btn-filter rounded'>Precio</button>
                    <button className='btn-filter rounded'>Nuevo</button>
                    <button className='btn-filter rounded'>Destacado</button>
                    <button className='btn-filter rounded'>Promoción</button>
                    <button className='btn-filter rounded'>Popular</button>
                    <button className='btn-filter rounded'>Pirata</button>
                </div>
                <div className='container-filters flex flex-wrap rounded filters-selected'>
                    <button className='btn-filter rounded'>
                        Precio <span className='remove-filter'>x</span>
                    </button>
                </div>
            </Filters>
            <Products className="products-container">
                <h1 className='text-center products-title'>{title}</h1>
            </Products>
        </MainContainer>
    );
}

export default Main;