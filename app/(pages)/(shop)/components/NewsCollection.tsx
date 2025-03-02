
import new_collection from '@/public/assets/Frontend_Assets/new_collections';
import Item from '../../../../components/Item';

const NewCollections = () => {
    return (
        <div className='container flex flex-col items-center gap-[10px] mb-20'>
            <h1 className='text-4xl text-text'>NEW COLLECTIONS</h1>
            <hr className='w-[200px] h-[6px] rounded-2xl bg-[#252525]'/>
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
