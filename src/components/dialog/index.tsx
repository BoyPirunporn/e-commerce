import useStoreModal from '@/zustandStore/store-modal';
import Modal from '../ui/modal';

const DialogComponent = () => {
    const storeModel = useStoreModal();

    
    return (
        <Modal
            title={storeModel.title}
            isOpen={storeModel.open}
            onClose={storeModel.closeModal}
            description={storeModel.description!}
        >
            {storeModel.content}
        </Modal>
    )
}

export default DialogComponent