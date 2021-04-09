import { useState } from 'react';
import { MainContainer, Filters, Products } from './Styles';
import { allfilters } from '../../../data/json';
import Card from './Card';

const Main = ({ data }: any) => {
    const { content: { title, products } } = data;
    const [filters, setFilters] = useState<string[]>(allfilters);
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

    const addFilter = (filter: string) => {
        if (!selectedFilters.includes(filter)) {
            setSelectedFilters([...selectedFilters, filter]);
            setFilters(filters?.filter((ele) => ele !== filter));
        };
    };
    const removeFilter = (filter: string) => {
        setSelectedFilters(selectedFilters?.filter((ele) => ele !== filter));
        setFilters([...filters, filter]);
    };

    return (
        <MainContainer className='flex'>
            <Filters className="filters">
                <div className="container-filters flex flex-wrap rounded">
                    {filters?.map((filter: string) => (
                        <button key={filter} className='btn-filter rounded' onClick={() => addFilter(filter)}>{filter}</button>
                    ))}
                </div>
                <div className='container-filters flex flex-wrap rounded filters-selected'>
                    {selectedFilters?.map((filter: string) => (
                        <button key={`selected-${filter}`} className='btn-filter rounded' onClick={() => removeFilter(filter)}>
                            {filter} <span className='remove-filter'>x</span>
                        </button>
                    ))}
                </div>
            </Filters>
            <Products className="products-container">
                <h1 className='text-center products-title'>{title}</h1>
                <div className='flex flex-wrap p-5'>
                    {products?.map((product: any, index: number) => (
                        <Card key={`product-${index}`} name={product.name} price={product.price} stars={product.qualification}/>
                    ))}
                </div>

            </Products>
        </MainContainer>
    );
}

export default Main;