import storeItems from "../data/storeItems.json"
import StoreItem from "../components/cart/card/CartCard"

const Home = () => {  
  return (
    <main className="grid gap-5 justify-content-center align-items-center" >
      {storeItems.map(item => (
        <StoreItem key={item.id} {...item}/>
      ))}
    </main>
  )
}

export default Home