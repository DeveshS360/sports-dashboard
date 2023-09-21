import { useAppSelector } from 'src/redux/hooks'
import { Modal } from '../Modal'
import { useDispatch } from 'react-redux'
import { setIsAudienceGraphOpen } from 'src/redux/slices/AudienceGraphSlice'
import { AudienceGraph } from '../AudienceGraph'

export const AudienceGraphModal = () => {
  const open = useAppSelector((state) => state.audienceGraphStore.isOpen)
  const dispatch = useDispatch()
  const handleClose = () => dispatch(setIsAudienceGraphOpen(false))
  return (
    <Modal open={open} onClose={handleClose}>
      <AudienceGraph />
    </Modal>
  )
}
