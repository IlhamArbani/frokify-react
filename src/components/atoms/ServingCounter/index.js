import { useState } from "react";

const ServingCounter = () => {
    const [servingCount,setServingCount] = useState(4);

    const incraseServing = () => {
        setServingCount(servingCount + 1)
    }

    const decraseServing = () => {
        setServingCount(servingCount - 1)
    }

    return (
        <div className="flex items-center">
            <p className="mr-4">{servingCount} Servings</p>
            <button onClick={incraseServing} className="rounded-full w-4 h-4 bg-orange-300 mr-2"></button>
            <button onClick={decraseServing} className="rounded-full w-4 h-4 bg-orange-300"></button>
        </div>
    )
}

export default ServingCounter;