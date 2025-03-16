import React from 'react'

type Props = {}

function ProductDescript({}: Props) {
  return (
    <div className='my-[120px] '>
        <div className="flex h-[70px]">
            <div className="flex items-center justify-center text-base font-bold w-[171px]  border border-[#d0d0d0]">Descriptions</div>
            <div className="flex items-center justify-center text-base font-bold w-[171px] border border-[#d0d0d0] bg-[#FBFBFB] text-[#555]">Review (122)</div>
        </div>
        <div className="flex flex-col gap-5 border border-[#d0d0d0]  p-11 pb-18">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores error quae et aliquid fugiat repellat enim nam. Iure vel blanditiis eveniet. Voluptate sunt praesentium necessitatibus animi, placeat enim nobis, commodi non deserunt magni perspiciatis. Unde eos quis nihil, corrupti quas at ad voluptatem, ex, dolore ducimus illum error eligendi rerum?
            </p>
        </div>
    </div>
  )
}

export default ProductDescript