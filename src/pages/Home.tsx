import storeItems from "../data/storeItems.json"
import StoreItem from "../components/store-item/StoreItem"
import { useAppDispatch, useAppSelector } from "../context/hooks/hooks"

const Home = () => {  
  return (
    <main className="grid gap-5 justify-content-center align-items-center" >
      {storeItems.map(item => (
        <StoreItem {...item}/>
      ))}
    </main>
  )
}

export default Home