import { Footer } from "./components/footer";
import { Header } from "./components/header";

export const IndexT = (props) => {
  const { value } = props;
  return (
    <>
      <Header title={value.title} nav={value.nav} />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
              {value.title}
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              {value.title}
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              {value.description}
            </p>
          </div>
          <div className="flex flex-wrap">
            {value.products.map((product: any, index) => {
              return (
                <div
                  key={index}
                  className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60 cardsProduct"
                >
                  <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                    {product.title}
                  </h2>
                  <div className="rounded-lg h-64 overflow-hidden">
                    <img
                      alt="content"
                      className="object-cover object-center h-full w-full"
                      src={product.filename}
                    />
                  </div>
                  <h5 className="text-lg sm:text-s text-gray-900 mb-2">
                    {product.type}
                  </h5>
                  <p className="leading-relaxed text-base mb-4">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap">
                    <div className="xl:w-1/2">
                      <h3 className="text-2xl sm:text-2xl text-gray-900 font-semibold title-font mb-2">
                        Price: {product.price}
                      </h3>
                    </div>
                    <div className="xl:w-1/2">
                      <h3 className="text-2xl sm:text-2xl text-gray-900 font-semibold title-font mb-2">
                        Rating: {product.rating}/5
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Button
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
};
