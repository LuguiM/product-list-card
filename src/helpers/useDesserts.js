import data from '../../data.json'
import { ref, onMounted } from 'vue'

export default function useDesserts() {
  const desserts = ref(data)
  const cart = ref([])
  const unitProduct = ref(0);

  const getCart = () => {
    cart.value = JSON.parse(localStorage.getItem('cart')) || []
  }

  const updatedCart = () => {
    localStorage.setItem('cart', JSON.stringify(cart.value))
  }

  const addDessert = (item) => {
    const infoDessert = {
      ...item,
      unit: 1,
    }

    const exists = cart.value.some(dessert => dessert.name === infoDessert.name)

    if (exists) {
      const newCart = cart.value.map(dessert => {
        if (dessert.name === infoDessert.name) {
          return { ...dessert, unit: dessert.unit + 1 }
        }
        return { ...dessert }
      })

      cart.value = newCart
    } else {
      cart.value = [...cart.value, infoDessert]
    }

    updatedCart()
  }

  const deleteUnitDessert = (name) => {
    const newCart = cart.value.reduce((acc, dessert) => {
      if (dessert.name === name) {
        const newUnit = dessert.unit - 1;

        if (newUnit > 0) {
          acc.push({ ...dessert, unit: newUnit });
        }
      } else {
        acc.push({ ...dessert });
      }
      return acc;
    }, []);

    cart.value = newCart;
    updatedCart();
  };


  const deleteDessert = (name) => {
    cart.value = cart.value.filter(dessert => dessert.name !== name)
    updatedCart()
  }

  const getUnitFromCart = (name) => {
    const foundItem = cart.value.find(item => item.name === name);
    unitProduct.value = foundItem ? foundItem.unit : 0
    return unitProduct.value
  }

  const getTotalForProduct = (name) => {
    const product = cart.value.find(desserts => desserts.name === name);
    const totalPrice = product.price * product.unit
    
    return {
      selectedUnit: product.unit,
      productPrice: product.price,
      totalPrice
    }
  }

  onMounted(() => {
    getCart()
  })

  return {
    desserts,
    cart,
    addDessert,
    deleteDessert,
    getUnitFromCart,
    deleteUnitDessert,
    getTotalForProduct
  }
}
