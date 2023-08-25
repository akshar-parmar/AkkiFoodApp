import React from 'react'
import { Image, Breathing   } from 'react-shimmer'
export const ShimmerUI= () =>{
    return (
        <div>
            <Image
                src='https://csshint.com/wp-content/uploads/2022/01/Css-Skeleton-Loader-Animation.jpg'
                fallback={<Breathing  width={1500} height={600} />}
            />
        </div>
    )
}

export default ShimmerUI;