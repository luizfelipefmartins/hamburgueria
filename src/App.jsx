import { useEffect } from "react";
import { useState } from "react";
import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";
import { Cart } from "./components/Cart";
import { api } from "./service/api";
import { MainContainer } from "./style";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [product, setProduct] = useState([]);
  const [addCart, setAddCart] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    async function loadProduct() {
      try {
        const products = await api.get(
          "https://hamburgueria-kenzie-json-serve.herokuapp.com/products"
        );
        setProduct(products.data);
      } catch (error) {
        toast(error);
      }
    }
    loadProduct();
  }, []);

  const addToCart = (prod) => {
    if (!addCart.some((add) => add.id === prod.id)) {
      const newProduct = [...addCart, prod];
      setAddCart(newProduct);
      toast.success("Item adicionado com sucesso", {
        autoClose: 2000,
      });
    } else {
      toast.error("item já adicionado", {
        autoClose: 2000,
      });
    }
  };

  const removeCart = (prodId) => {
    const removeProd = addCart.filter((rmv) => rmv.id !== prodId);
    setAddCart(removeProd);
    toast.success("Item removido com sucesso", {
      autoClose: 2000,
    });
  };

  const filterProducts = product.filter((prod) =>
    prod.category.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className="App">
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Header setInputValue={setInputValue} />
      <MainContainer>
        <ProductList
          product={product}
          addToCart={addToCart}
          filterProducts={filterProducts}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        <Cart
          addCart={addCart}
          removeCart={removeCart}
          setAddCart={setAddCart}
        />
      </MainContainer>
    </div>
  );
}

export default App;
