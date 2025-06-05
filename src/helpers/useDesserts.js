import data from '../../data.json'
import { ref, onMounted } from 'vue'

export default function useDesserts() {
  const desserts = ref(data)
  const cart = ref([])

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
        return {...dessert}
      })

      cart.value = newCart
    } else {
      cart.value = [...cart.value, infoDessert]
    }

    updatedCart()
  }

  const deleteDessert = (name) => {
    cart.value = cart.value.filter(dessert => dessert.name !== name)
    updatedCart()
  }

  onMounted(() => {
    getCart()
  })

  return {
    desserts,
    cart,
    addDessert,
    deleteDessert,
  }
}
