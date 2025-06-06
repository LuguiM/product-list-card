import { defineStore } from "pinia";
import { ref, computed } from "vue";
import data from '../../data.json'

export const useDessert = defineStore('dessert', () => {
  const desserts = ref(data)
  const cart = ref([])

  const totalUnits = computed(() =>
    cart.value.reduce((sum, item) => sum + item.unit, 0)
  );

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
        return dessert
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
        const newUnit = dessert.unit - 1
        if (newUnit > 0) {
          acc.push({ ...dessert, unit: newUnit })
        }
      } else {
        acc.push(dessert)
      }
      return acc
    }, [])

    cart.value = newCart
    updatedCart()
  }

  const deleteDessert = (name) => {
    cart.value = cart.value.filter(dessert => dessert.name !== name)
    updatedCart()
  }

  const getUnitFromCart = (name) => {
    const item = cart.value.find(product => product.name === name)
    return item ? item.unit : 0
  }

  const getTotalForProduct = (name) => {
    const product = cart.value.find(dessert => dessert.name === name)
    if (!product) {
      return {
        name,
        selectedUnit: 0,
        productPrice: 0,
        totalPrice: 0,
      }
    }
    const totalPrice = product.price * product.unit

    return {
      name: product.name,
      selectedUnit: product.unit,
      productPrice: product.price,
      totalPrice,
    }
  }



  // Cargar carrito desde localStorage al inicializar el store
  getCart()

  return {
    desserts,
    cart,
    totalUnits,
    addDessert,
    deleteDessert,
    getUnitFromCart,
    deleteUnitDessert,
    getTotalForProduct,
  }
})
