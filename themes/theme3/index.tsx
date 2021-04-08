import { Footer } from "./components/footer";
import { Header } from "./components/header";

export const IndexTTwo = (props) => {
  const { value } = props;
  return (
    <>
      <Header title={value.title} nav={value.nav} />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-3">
            {value?.products.map((item:any,index)=>{
              return <div key={index} className="lg:w-1/3 md:w-1/2 p-3 w-full cardsProduct">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={item.filename}
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  {item.type}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {item.title}
                </h2>
                <p className="mt-1">${item.price}</p>
              </div>
            </div>
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
