import React, { useState } from "react"


export const StatsContext = React.createContext()


function StatsProvider({children}) {
    const baseStats = {
        hp:44,
        attack:48,
        def:65,
        spAtk:50,
        spDef:64,
        speed:43
      }

    const [stats, setStats] = useState(baseStats)

    return (
        <>
            <StatsContext.Provider value={{stats, setStats}} >
                {children}
            </StatsContext.Provider>
        </>
    )


}

export default StatsProvider
