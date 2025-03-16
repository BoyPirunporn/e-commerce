import ImageProvider from '@/providers/ImageProvider';
import Image from 'next/image';
type Props = {
    src: string;
};

const CardMedial = ({
    src
}: Props) => {
    return (
        <div className='item-warp relative overflow-hidden mb-2'>
            {/* Container ของรูปภาพ */}
            <div className='relative w-full min-h-[150px] lg:h-[250px] xl:h-[300px] overflow-hidden'>
                {/* รูปภาพที่สามารถซูมได้เมื่อ Hover */}
                <ImageProvider
                    src={src}
                    className='object-cover object-top rounded-tl-sm rounded-tr-sm transition-transform duration-500 ease-out hover:scale-105'
                />

                {/* Special deal detail */}
                <div className="absolute hidden md:block bottom-0 left-0 h-10 w-full">
                    <Image fill src={"/assets/special-deal.jpg"} alt={''} />
                </div>
            </div>
        </div>
    );
};

export default CardMedial;