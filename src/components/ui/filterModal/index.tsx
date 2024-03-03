import { FC } from 'react'
import { CartModalLayout } from '../CartModal/styled'
import { FilterModalContainer } from './styled'
import ShopFilter from 'pages/shop/components/shopFilter'

interface IProps {
  open: boolean
  onClose: () => void
}

const FilterModal: FC<IProps> = ({ open, onClose }) => {
  return (
    <FilterModalContainer className={open ? 'open' : ''}>
      <CartModalLayout onClick={() => onClose()}></CartModalLayout>
      <div className={open ? 'open filter' : 'filter'}>
        <ShopFilter />
      </div>
    </FilterModalContainer>
  )
}

export default FilterModal
