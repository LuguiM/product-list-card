import data from '../../data.json'
import { ref, onMounted } from 'vue'

export default function useDesserts() {

  const desserts = ref(data);
  const cart = ref([])


  const getCart = () => {
    cart.value = JSON.parse(localStorage.getItem('cart')) || []
  }

  const updatedCart = () => {
    localStorage.setItem('cart', JSON.stringify(cart.value));
  }

  const addDessert = (item) => {
    const infoDessert = {
      ...item,
      unit: 1
    }

    const exits = cart.some(dessert => dessert.name === infoDessert.name)

    if (exits) {
      const newDessert = cart.map(dessert => {
        if (dessert.name === infoDessert.name) {
          dessert.unit++;
          return dessert;
        } else {
          return dessert;
        }
      });

      cart.value = [...newDessert];
    } else {
      cart.value = [...cart.value, ...infoDessert]
    }
    updatedCart()
  }

  const deleteDessert = (name) => {
    cart.value = cart.filter(dessert => dessert.name !== name)
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
