
import new_collection from '../../../../../public/assets/Frontend_Assets/new_collections';
import Item from '../../../../components/Item';

const NewCollections = () => {
    return (
        <div className=' flex flex-col items-center gap-[10px] mb-20'>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-8">
                {new_collection.map((item) => {
                    return (
                        <Item key={item.id} id={item.id} image={item.image.src} name={item.name} newPrice={item.new_price} oldPrice={item.old_price} />
                    )
                })}
            </div>
        </div>
    );
}

export default NewCollections;
