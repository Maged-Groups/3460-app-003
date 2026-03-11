import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router'

export default function Product() {

    const arr = Array(10);
    console.log('arr', arr)
    const arr2 = [...arr];
    console.log('arr2', arr2)

    arr.forEach(itm=> console.log('itm', itm))
    arr2.forEach(itm=> console.log('itm arr2', itm))

    console.log('Product Component Rendered')

    // let product = {}; // JS
    const [product, setProduct] = useState(null); // RJS
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [photos, setPhotos] = useState([]);

    console.log('product', product);

    const { id } = useParams();
    const api = `https://dummyjson.com/products/${id}`;

    console.log('id', id);
    console.log('api', api);

    console.log('Before Use Effect')
    useEffect(() => {
        console.log('Use Effect fired');
        getProduct();
    }, []);
    console.log('After Use Effect')

    const getProduct = async () => {
        try {

            const res = await fetch(api);

            console.log('res', res);

            if (res.status === 404)
                return setError(`Product with ID ${id} was not found`);

            const data = await res.json();
            // data = await res.json(); // JS
            setProduct(data); // RJS

            const photosArr = [data.thumbnail, ...data.images]; // Spread operator (...)
            console.log('photosArr', photosArr)
            setPhotos(photosArr)

            console.log('product', product);

        } catch (e) {
            console.log('catch fired')
            setError('Product not found!!!');
        } finally {
            setIsLoading(false);
        }
    }

    // Loading...
    if (isLoading) return (
        <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        </div>
    )

    // Has Error
    if (error) return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-center">
                <h2 className="text-2xl text-red-600 mb-4">Error: {error}</h2>
                <button
                    onClick={() => window.location.reload()}
                    className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
                >
                    Try Again
                </button>
            </div>
        </div>
    );

    // Product Found
    return (
        <div className="container mx-auto px-4 py-8">
            {/* Breadcrumb */}
            <nav className="text-sm breadcrumbs mb-6">
                <ul className="flex space-x-2 text-gray-600">
                    <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
                    <li><span className="mx-2">/</span></li>
                    <li><Link to="/products" className="hover:text-blue-600">Products</Link></li>
                    <li><span className="mx-2">/</span></li>
                    <li className="text-gray-800 font-semibold">{product.title}</li>
                </ul>
            </nav>

            {/* Product */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Product Images Section */}
                <div className="space-y-4">
                    <div className="border rounded-lg overflow-hidden h-96">
                        <img
                            src={photos[selectedImage]}
                            alt={product.title}
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Thumbnail Images */}
                    {photos.length > 1 && (
                        <div className="grid grid-cols-5 gap-2">
                            {photos.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    className={`border rounded-lg overflow-hidden h-20 ${selectedImage === index ? 'ring-2 ring-blue-500' : ''
                                        }`}
                                >
                                    <img
                                        src={image}
                                        alt={`${product.title} ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Product Info Section */}
                <div className="space-y-6">
                    {/* Title and Description */}
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.title}</h1>
                        <p className="text-gray-600 text-lg">{product.description}</p>
                    </div>

                    {/* Ratings */}
                    <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                            {[...Array(5)].map((_, index) => (
                                <svg
                                    key={index}
                                    className={`w-5 h-5 ${index < Math.floor(product.rating)
                                        ? 'text-yellow-400'
                                        : 'text-gray-300'
                                        }`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <span className="text-gray-600">({product.rating} out of 5)</span>
                        <span className="text-gray-400">|</span>
                        <span className="text-gray-600">{product.stock} in stock</span>
                    </div>

                    {/* Price */}
                    <div className="space-y-2">
                        <div className="flex items-center space-x-4">
                            <span className="text-3xl font-bold text-gray-900">
                                ${product.price}
                            </span>
                            {product.discountPercentage && (
                                <>
                                    <span className="text-lg text-gray-500 line-through">
                                        ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
                                    </span>
                                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-semibold">
                                        {product.discountPercentage}% OFF
                                    </span>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Category and Brand */}
                    <div className="grid grid-cols-2 gap-4 py-4 border-y border-gray-200">
                        <div>
                            <span className="text-gray-500">Brand:</span>
                            <span className="ml-2 font-semibold">{product.brand}</span>
                        </div>
                        <div>
                            <span className="text-gray-500">Category:</span>
                            <span className="ml-2 font-semibold capitalize">{product.category}</span>
                        </div>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center space-x-4">
                        <span className="text-gray-700">Quantity:</span>
                        <div className="flex items-center border rounded-lg">
                            <button
                                onClick={() => setQuantity(Math.max(0, quantity - 1))}
                                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-l-lg"
                            >
                                -
                            </button>
                            <span className="px-6 py-2 border-x">{quantity}</span>
                            <button
                                onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-r-lg"
                            >
                                +
                            </button>
                        </div>
                        <span className="text-sm text-gray-500">
                            {product.stock} available
                        </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4">
                        <button className="flex-1 bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition duration-200">
                            Buy Now
                        </button>
                    </div>

                    {/* Additional Info */}
                    <div className="mt-8 space-y-4">
                        <h3 className="text-xl font-semibold">Product Details</h3>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <span className="text-gray-500">SKU:</span>
                                <span className="ml-2">{product.sku || 'N/A'}</span>
                            </div>
                            <div>
                                <span className="text-gray-500">Weight:</span>
                                <span className="ml-2">{product.weight || 'N/A'} g</span>
                            </div>
                            <div>
                                <span className="text-gray-500">Warranty:</span>
                                <span className="ml-2">{product.warrantyInformation || 'N/A'}</span>
                            </div>
                            <div>
                                <span className="text-gray-500">Shipping:</span>
                                <span className="ml-2">{product.shippingInformation || 'N/A'}</span>
                            </div>
                        </div>
                    </div>

                    {/* Reviews Section */}
                    {product.reviews && product.reviews.length > 0 && (
                        <div className="mt-8">
                            <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
                            <div className="space-y-4">
                                {product.reviews.slice(0, 3).map((review, index) => (
                                    <div key={index} className="border-b pb-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="font-semibold">{review.reviewerName}</span>
                                            <span className="text-sm text-gray-500">{review.date}</span>
                                        </div>
                                        <div className="flex items-center mb-2">
                                            {[...Array(5)].map((_, i) => (
                                                <svg
                                                    key={i}
                                                    className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                                                        }`}
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <p className="text-gray-600">{review.comment}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>

    )
}
