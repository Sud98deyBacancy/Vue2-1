export default{
    namespaced:true,//cart state module
    state(){
        return{ items: [], total: 0, qty: 0 };
    },
    mutations:{//adding product
        addProductToCart(state,payload) {
            const productData = payload;
            const productInCartIndex = state.items.findIndex(
              (ci) => ci.productId === productData.id
            );
      
            if (productInCartIndex >= 0) {
              state.items[productInCartIndex].qty++;
            } else {
              const newItem = {
                productId: productData.id,
                title: productData.title,
                image: productData.image,
                price: productData.price,
                qty: 1,
              };
              state.items.push(newItem);
            }
            state.qty++;
            state.total += productData.price;
          },
      
          removeProductFromCart(state,payload) {//removing product
            const prodId = payload.productId;  
            const productInCartIndex = state.items.findIndex(
              (cartItem) => cartItem.productId === prodId
            );
            const prodData = state.items[productInCartIndex];
            state.items.splice(productInCartIndex, 1);
            state.qty -= prodData.qty;
            state.total -= prodData.price * prodData.qty;
          }
    },
    actions:{//adding product action
        addToCart(context,payload){
            const prodId = payload.id;
            const products=context.rootGetters['prods/products'];
            const product = products.find(prod => prod.id === prodId);
            context.commit('addProductToCart',product);
        },
        removeFromCart(context,payload){//removing product action
            context.commit('removeProductFromCart',payload)
        }
    },
    getters:{//retreiving the cart 
        products(state){ return state.items;},
        TotalSum(state){ return state.total;},
        Qty(state){ return state.qty;}
    }
}