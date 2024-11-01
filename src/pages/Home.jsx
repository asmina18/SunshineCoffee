import { InfoCart } from "../comonents/InfoCart/InfoCart"
import{ ShopNow }from "../comonents/ShopNow/ShopNow"
import {Testimonies }from "../comonents/Testimonies/Testimonies"


export const Home = () => {
  return (
    <div>
      <InfoCart/>
      <ShopNow/>
      <Testimonies/>
    </div>
  )
}
