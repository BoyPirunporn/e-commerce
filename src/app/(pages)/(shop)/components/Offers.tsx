import { Button } from '../../../../components/ui/button';

const Offers = () => {
    return (
        <div className="bg-custom-gradient">
            <div className="offers md:w-[65%]  flex m-auto flex-col md:flex-row mb-[30px]">
                <div className="my-10 px-10 offers-left flex-1 flex gap-3 flex-col justify-center leading-[1.1]">
                    <h1 className='text-text text-5xl font-bold'>Exclusive</h1>
                    <h1 className='text-text text-5xl font-bold'>Offers For You</h1>
                    <p className='text-text text-2xl'>ONLY ON BEST SELLERS PRODUCTS</p>
                    <Button className='max-w-[282px] h-[70px] rounded-[35px] bg-red text-white text-[22px] mt-[30px] font-[500] cursor-pointer'>Check Now</Button>
                </div>
                <div className="offers-right flex-1 flex items-center justify-center pt-[50px]">
                    <img src="/assets/Frontend_Assets/exclusive_image.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Offers;
