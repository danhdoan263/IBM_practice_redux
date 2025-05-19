import Search from '@/Components/Search'
import ProductsCard from '@/Components/Card/ProductsCard'
import plants from '@/mockdata/mockdata'
import styles from './styles.module.scss'
import { useState } from 'react'
import { addToCart } from '@/features/cartSlice'
import { useDispatch } from 'react-redux'

const Content = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPlants = plants.filter(plant => 
    plant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    plant.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const dispatch = useDispatch()
  return (
    <div className='md:grid-cols-12 grid-cols-7 w-full'>
      <div className='sm:w-[367px] w-325px lg:pt-[78px] pt-[200px]'>
        <h1>Plants Store</h1>
        <Search onSearch={setSearchTerm} />
      </div>
      <div className='mt-[50px] mb-[100px]'>
        <div className='text-[48px] font-bold'>
          DanhDoan-GreenStore
        </div>
        <div className='text-[16px] '>
          Summer
          2025
        </div>
      </div>
      <div className={styles.productsContainer}>
        {filteredPlants.map(value => {
          return (
            <ProductsCard
              key={value.id}
              image={value.path}
              name={value.name}
              price={value.price}
              className='flex-shrink-0'
              width='300px'
              height='300px'
            />
          )
        })}
      </div>
      <div className='flex flex-wrap w-full justify-center gap-2.5 mt-20'>
        {filteredPlants.map(value => {
          return (
            <ProductsCard
              key={value.id}
              image={value.path}
              name={value.name}
              price={value.price}
              className='flex-shrink-0  bg-emerald-200 p-6 rounded-2xl'
              width='300px'
              height='300px'
              buy={true}
              buyClassName='bg-red-400 w-full rounded-[5px]'
              onClick={()=>{
                dispatch(addToCart(value))
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Content