import React,{useState,useEffect} from 'react';

function Product(props) {
    async function getProduct(products){
        await fetch("https://fakestoreapi.com/products")
                .then((responce)=>responce.json())
                .then((data)=>{
                    // console.log(Object.values(data));
                    setProducts(data)
                })
    }
    const [products,setProducts] = useState([])
    useEffect(()=>{
        getProduct()
    },[])
    return (
        <>
            <div
                class="row justify-content-center align-items-center g-2"
            >
                {products.map((product,index)=>{
                    return (
                      <>
                        <div class="card col-4 bg-dark text-primary">
                          <img
                            class="card-img-top"
                            src={product.image}
                            alt="Title"
                            height={300}
                            width=""
                          />
                          <div class="card-body">
                            <h4 class="card-title">
                              {index +1 }. {product.title}
                            </h4>
                            <p class="card-text">
                              {product.price}   
                              .    {product.category}
                            </p>
                          </div>
                        </div>
                      </>
                    );
                })}
            </div>
            
        </>
    );
}

export default Product;