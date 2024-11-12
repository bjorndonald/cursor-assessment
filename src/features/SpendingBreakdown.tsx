import DoughnutChart from '../components/DoughnutChart'

const SpendingBreakdown = () => {
  return (
      <div className="flex rounded-xl bg-base-200 flex-col">
          <div className="flex flex-col gap-5  px-10 py-10">
              <DoughnutChart />
          </div>
          <div className="border-t p-4 grid grid-cols-2 gap-3 border-base-300">
              <div className="flex gap-1.5 items-center">
                  <div className="w-2 h-1 rounded-xl bg-[#FF8A08]">
                </div>
                <span className="text-base-content uppercase">GROCERIES</span>
              </div>
              <div className="flex gap-1.5 items-center">
                  <div className="w-2 h-1 rounded-xl bg-[#F4A700]">
                  </div>
                  <span className="text-base-content uppercase">restaurant & bars</span>
              </div>
              <div className="flex gap-1.5 items-center">
                  <div className="w-2 h-1 rounded-xl bg-[#30E3DF]">
                  </div>
                  <span className="text-base-content">WATER</span>
              </div>
              <div className="flex gap-1.5 items-center">
                  <div className="w-2 h-1 rounded-xl bg-[#5BC0F8]">
                  </div>
                  <span className="text-base-content uppercase">air travel</span>
              </div>
              <div className="flex gap-1.5 items-center">
                  <div className="w-2 h-1 rounded-xl bg-[#5BC0F8]">
                  </div>
                  <span className="text-base-content uppercase">gift</span>
              </div>
              
          </div>
      </div>
  )
}

export default SpendingBreakdown