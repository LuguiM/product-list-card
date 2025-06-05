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

  }

  const deleteDessert = (name) => {
    cart.value = cart.value.filter(dessert => dessert.name !== name)
    updatedCart()
  }

  const getUnitFromCart = (name) => {
    const foundItem = cart.value.find(item => item.name === name);
    unitProduct.value = foundItem ? foundItem.unit : 0
    return unitProduct.value
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
  }
}
