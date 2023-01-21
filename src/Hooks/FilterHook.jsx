import React, { useState } from 'react'

export const FilterHook = () => {
    const [filterData, setFilterData] = useState({
        type:1,
        room: 2,
        monthlPrice: 1,
        district: 1,
        region: 1,
    })

    const onRoomChange = (e) => { 
        setFilterData({...filterData, [filterData[0].room]:e.target.value})
    }

    return { onRoomChange, filterData }
}
export default FilterHook;
