import { useEffect, useState } from 'react'
import Spending from './features/Spending'
import SpendingBreakdown from './features/SpendingBreakdown'
import axios from 'axios'

function App() {
  const [chart, setChart] = useState<"Spending Chart"|"Spending Breakdown">("Spending Chart")
  const [period, setPeriod] = useState<"D" | "W" | "M" | "6M">("D")
  const init = async () => {
   await axios.post("http://localhost:8000/api/v1/login", {
      email: "scamm@41nine.com" ,
      password: "ScamMaster3000"
    })
  }
  useEffect(() => {
    init()
    return () => { 
    }
  }, [])
  
  return (
    <main className='min-h-screen w-screen bg-base-100  flex justify-center '>
      <div className="max-w-xl py-20 flex flex-col gap-8 w-full mx-auto px-4">
        <div className="p-0.5 rounded-[9px] h-10 items-center flex w-full bg-base-200">
          <div onClick={() => setChart("Spending Chart")} className={`flex relative items-center h-9 rounded-[7px] text-base-content justify-center font-medium cursor-pointer grow text-sm ${chart === "Spending Chart" ?"bg-[#6E6E6E]":""}`}>
            Spending Chart
          </div>
          
          <div onClick={() => setChart("Spending Breakdown")} className={`flex items-center h-9 rounded-[7px] text-base-content justify-center font-medium cursor-pointer grow text-sm ${chart === "Spending Breakdown" ? "bg-[#6E6E6E]" : ""}`}>
            <div className="h-3 absolute left-0 top-1/2 -translate-y-1/2 bg-[#6E6E6E] w-px rounded-sm"></div>
            Spending Breakdown
          </div>
          
        </div>

        <div className="p-0.5 rounded-[9px] h-10 items-center flex w-full bg-base-200">
          <div onClick={() => setPeriod("D")} className={`flex items-center h-9 grow cursor-pointer rounded-[7px] text-base-content justify-center font-medium text-base ${period === "D" ? "bg-[#6E6E6E]" : ""}`}>
            D
          </div>
          
          <div onClick={() => setPeriod("W")} className={`flex items-center h-9 grow cursor-pointer rounded-[7px] text-base-content justify-center font-medium text-base ${period === "W" ? "bg-[#6E6E6E]" : ""}`}>
            <div className="h-3 absolute left-0 top-1/2 -translate-y-1/2 bg-[#6E6E6E] w-px rounded-sm"></div>
            W
          </div>
          
          <div onClick={() => setPeriod("M")} className={`flex items-center h-9 grow cursor-pointer rounded-[7px] text-base-content justify-center font-medium text-base ${period === "M" ? "bg-[#6E6E6E]" : ""}`}>
            <div className="h-3 absolute left-0 top-1/2 -translate-y-1/2 bg-[#6E6E6E] w-px rounded-sm"></div>
            M
          </div>
          
          <div onClick={() => setPeriod("6M")} className={`flex items-center h-9 grow cursor-pointer rounded-[7px] text-base-content justify-center font-medium text-base ${period === "6M" ? "bg-[#6E6E6E]" : ""}`}>
            <div className="h-3 absolute left-0 top-1/2 -translate-y-1/2 bg-[#6E6E6E] w-px rounded-sm"></div>
            6M
          </div>
        </div>
        {chart == "Spending Chart" && <Spending period={period} />}
        
        {chart == "Spending Breakdown" && <SpendingBreakdown />}
      </div>
    </main>
  )
}

export default App
