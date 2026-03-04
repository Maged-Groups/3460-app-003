import PageTitle from "../components/atoms/PageTitle";

const api = "https://dummyjson.com/products";

const response = await fetch(api);

const data = await response.json();
console.log('data', data)

const { products: items } = data;
console.log('items', items);

export default function Products() {

    return (
        <div>
            <PageTitle title="Products List" />
            <div className="flex flex-wrap items-center justify-center gap-2">
                {
                    items?.map(item => (
                        <div key={item.id} className="relative rounded-md shadow-md border bg-gray-100 text-gray-800 w-full max-w-75">
                            <div className="border-b-8 border-green-600 p-4">
                                <h3>{item.title}</h3>
                            </div>

                            <div className="">
                                <img src={item.thumbnail} alt="" />
                            </div>

                            <div className={`absolute top-1 right-1 px-2 py-1 rounded-full text-white ${item.discountPercentage > 3 ? 'bg-green-600' : 'bg-sky-600'}`}>
                                ${item.price}
                            </div>

                            <div className="inline-flex gap-2 my-2 p-2">
                                <div className="line-through">${item.price}</div>
                                <div className="px-2 py-1 rounded-full text-white bg-green-600">${(item.price - item.price * item.discountPercentage / 100).toFixed(2)}</div>
                            </div>

                            <div className="text-sky-600 p-3 bg-sky-100 text-center">
                                <a href="">Show Details</a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}