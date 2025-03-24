import { getNewProduct } from "@/service/product.service";
import Link from "next/link";
import { Suspense } from "react";
import BestSeller from "./components/BestSeller";
import CategoryClient from "./components/CategoryClient";
import HeroV2 from "./components/HeroV2";
import NewProductClient from "./components/NewProductClient";
import NewsLetters from "./components/NewsLetters";
import Offers from "./components/Offers";

export default async function Page() {
    const products = await getNewProduct();
    // const categories = await getCategories();
    return (
        <Suspense>
            <div className='mt-[80px]  bg-bray-200'>
                <HeroV2 />
                <div className="bg-white pb-10">
                    <div className="pt-5 pb-2 px-3 md:px-0 md:container ">
                        <h1 className="text-xl lg:text-2xl xl:text-3xl">Categories</h1>
                        <CategoryClient categories={[]} />
                    </div>
                </div>
                <div className="bg-[#d9d9d980]">
                    <div className="pt-5 pb-10 px-3 md:px-0 md:container ">
                        <div className="flex flex-row justify-between items-center">
                            <h1 className="text-xl lg:text-2xl xl:text-3xl">New Products</h1>
                            <Link href={"#"} className="text-sm  underline font-[400] cursor-pointer">See more</Link>
                        </div>
                        <NewProductClient products={products} />
                    </div>
                </div>
                <Offers />

                <div className="bg-white ">
                    <div className="pt-5 pb-10 px-3 md:px-0 md:container  ">
                        <div className="flex flex-row justify-between items-center">
                            <h1 className="text-xl lg:text-2xl xl:text-3xl">Best Sellers</h1>
                            <Link href={"#"} className="text-sm  underline font-[400] cursor-pointer">See more</Link>
                        </div>
                        <BestSeller products={products} />
                    </div>
                </div>
                <NewsLetters />

            </div>
        </Suspense>
    );
}