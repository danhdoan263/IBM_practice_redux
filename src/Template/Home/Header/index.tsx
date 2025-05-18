import MenuLeft from '@/Components/Header/MenuLeft'
import MenuRight from '@/Components/Header/MenuRight'
const Header = () => {
  return (
    <div className='flex justify-between sticky top-0 z-10 bg-white'>
      <MenuLeft />
      <MenuRight />
    </div>
  )
}

export default Header