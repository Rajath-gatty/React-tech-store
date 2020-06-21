import React, { Component } from 'react';
import { LinkData } from './LinkData';
// import { items } from './productData';
import { client } from './Contentful';

const ProductContext = React.createContext();

class ProductProvider extends Component {

    state = {
        sidebarOpen: false,
        closeSidebar: false,
        cartOpen: false,
        links: LinkData,
        cart: [],
        cartItems: 0,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
        storeProducts: [],
        filteredProducts: [],
        featuredProducts: [],
        singleProduct: {},
        loading: true,
        search: '',
        price: 0,
        min: 0,
        max: 0,
        company: 'all',
        shipping: false
    }

    componentDidMount() {
        // this.setProducts(items);

        client.getEntries({
            content_type: "techStoreProducts"
        })
            .then(res => this.setProducts(res.items))
            .catch(err => console.log(err));
    }

    //set Products
    setProducts = products => {
        let storeProducts = products.map(item => {
            const { id } = item.sys;
            const image = item.fields.image.fields.file.url
            const product = { id, ...item.fields, image };
            return product;
        });
        //Featured PRoducts
        let featuredProducts = storeProducts.filter(item => item.featured === true);
        let maxPrice = Math.max(...storeProducts.map(item => item.price));

        this.setState({
            storeProducts,
            filteredProducts: storeProducts,
            featuredProducts,
            cart: this.getStorageCart(),
            singleProduct: this.getStorageProduct(),
            loading: false,
            price: maxPrice,
            max: maxPrice
        }, () => {
            this.addTotals();
        })
    }

    //Get cart from local storage
    getStorageCart = () => {
        let cart;
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"))
        } else {
            cart = []
        }
        return cart;
    }

    //get products from local storage
    getStorageProduct = () => {
        return localStorage.getItem('singleProduct') ? JSON.parse(localStorage.getItem('singleProduct')) : {}
    }

    //get totals
    getTotals = () => {
        let subTotal = 0;
        let cartItems = 0;
        this.state.cart.forEach(item => {
            subTotal += item.total;
            cartItems += item.count;
        })
        subTotal = parseFloat(subTotal.toFixed(2));
        let tax = subTotal * 0.2;
        tax = parseFloat(tax.toFixed(2));
        let total = subTotal + tax;
        total = parseFloat(total.toFixed(2));
        return {
            cartItems,
            subTotal,
            tax,
            total
        }
    }


    //add totals
    addTotals = () => {
        const totals = this.getTotals();
        this.setState({
            cartItems: totals.cartItems,
            cartSubTotal: totals.subTotal,
            cartTax: totals.tax,
            cartTotal: totals.total
        })
    }

    //sync storage
    syncStorage = () => {
        localStorage.setItem("cart", JSON.stringify(this.state.cart));
    };

    // add to cart
    addToCart = (id) => {
        let tempCart = [...this.state.cart];
        let tempProducts = [...this.state.storeProducts];
        let tempItem = tempCart.find(item => item.id === id);
        if (!tempItem) {
            tempItem = tempProducts.find(item => item.id === id);
            let total = tempItem.price;
            let cartItem = { ...tempItem, count: 1, total };
            tempCart = [...tempCart, cartItem];
        } else {
            tempItem.count++;
            tempItem.total = tempItem.price * tempItem.count;
            tempItem.total = parseFloat(tempItem.total.toFixed(2));
        }
        this.setState(() => {
            return { cart: tempCart }
        }, () => {
            this.addTotals();
            this.syncStorage();
            this.openCart();
        })
    }

    //set Single Product
    setSingleProduct = (id) => {
        let product = this.state.storeProducts;
        product = product.find(item => item.id === id);
        localStorage.setItem('singleProduct', JSON.stringify(product));
        this.setState({
            singleProduct: { ...product },
            loading: false
        })
    }

    handleSideBar = () => {
        this.setState((prevState) => {
            return {
                sidebarOpen: !prevState.sidebarOpen
            }
        })
    }

    closeSidebar = () => {
        this.setState({ closeSidebar: true })
    }


    handleCart = () => {
        this.setState((prevState) => {
            return {
                cartOpen: !prevState.cartOpen
            }
        })
    }

    closeCart = () => {
        this.setState({ cartOpen: false })
    }

    openCart = () => {
        this.setState({ cartOpen: true })
    }

    //Cart Increment
    increment = (id) => {
        let tempItem = [...this.state.cart];
        const cartItem = tempItem.find(item => item.id === id);
        cartItem.count++;
        cartItem.total = cartItem.count * cartItem.price;
        cartItem.total = parseFloat(cartItem.total.toFixed(2));
        this.setState(() => {
            return {
                cart: [...tempItem]
            }
        }, () => {
            this.addTotals();
            this.syncStorage();
        })
    }

    //Decrement
    decrement = (id) => {
        let tempItem = [...this.state.cart];
        const cartItem = tempItem.find(item => item.id === id);
        if (cartItem.count === 1) {
            return this.removeItem(id);
        } else {
            cartItem.count--;
        }
        cartItem.total = cartItem.count * cartItem.price;
        cartItem.total = parseFloat(cartItem.total.toFixed(2));
        this.setState(() => {
            return {
                cart: [...tempItem]
            }
        }, () => {
            this.addTotals();
            this.syncStorage();
        })
    }

    //remove Item
    removeItem = (id) => {
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item => item.id !== id);
        this.setState({
            cart: [...tempCart]
        }, () => {
            this.addTotals();
            this.syncStorage();
        })
    }

    //Clear Cart
    clearCart = () => {
        this.setState({
            cart: []
        }, () => {
            this.addTotals();
            this.syncStorage();
        });
    }

    //Filtering Products
    handleChange = (e) => {
        console.log(e)
    }

    sortData = () => {

    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleSideBar: this.handleSideBar,
                handleCart: this.handleCart,
                closeCart: this.closeCart,
                openCart: this.openCart,
                addToCart: this.addToCart,
                setSingleProduct: this.setSingleProduct,
                increment: this.increment,
                decrement: this.decrement,
                clearCart: this.clearCart,
                removeItem: this.removeItem,
                handleChange: this.handleChange
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer }