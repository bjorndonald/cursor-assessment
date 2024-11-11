import StackedBarChart from '../components/StackedBarChart'
import NotificationIcon from '../icons/Notification.icon'

const data = {
        "D": [
            { name: '1-4', value1: 0, value2: 0, value3: 0, value4: 0, },
            { name: '4-8', value1: 0, value2: 0, value3: 0, value4: 0 },
            { name: '9-15', value1: 86000, value2: 0, value3: 0, value4: 0 },
            { name: '16-21', value1: 40000, value2: 40000, value3: 40000, value4: 0, },
            { name: '21-25', value1: 120000, value2: 30000, value3: 30000, value4: 30000 },
        ],
        "W": [
            { name: 'Week 1', value1: 0, value2: 0, value3: 0, value4: 0, },
            { name: 'Week 2', value1: 0, value2: 0, value3: 0, value4: 0 },
            { name: 'Week 3', value1: 86000, value2: 0, value3: 0, value4: 0 },
            { name: 'Week 4', value1: 40000, value2: 40000, value3: 40000, value4: 0, }
        ],
        "M": [
            { name: 'Aug', value1: 0, value2: 0, value3: 0, value4: 0, },
            { name: 'Sep', value1: 0, value2: 0, value3: 0, value4: 0 },
            { name: 'Oct', value1: 86000, value2: 0, value3: 0, value4: 0 },
            { name: 'Nov', value1: 40000, value2: 40000, value3: 40000, value4: 0, },
            { name: 'Dec', value1: 120000, value2: 30000, value3: 30000, value4: 30000 },
        ],
        "6M": [
            { name: '1st', value1: 0, value2: 0, value3: 0, value4: 0, },
            { name: '2nd', value1: 0, value2: 0, value3: 0, value4: 0 },
            { name: '3rd', value1: 86000, value2: 0, value3: 0, value4: 0 },
            { name: '4th', value1: 40000, value2: 40000, value3: 40000, value4: 0, }
        ],
    }

const Spending = ({period}:{period: "D"|"W"|"M"|"6M"}) => {
  return (
      <div className="flex rounded-xl bg-base-200 flex-col">
          <div className="flex flex-col gap-5  px-3.5 py-5">
              <div className="flex flex-col">
                  <span className='text-accent-content font-medium text-base tracking-wide'>01 - 25 JUL</span>
                  <div className="flex items-center gap-1.5">
                      <h1 className='text-[60px]/[66.3px] font-bold text-base-content'>297,000</h1>
                      <div className="bg-[#292929] text-sm font-bold rounded-[3px] px-1.5 py-[3px]">
                          NGN
                      </div>
                  </div>

              </div>

              <StackedBarChart data={data[period]} />


          </div>
        <div className="border-t px-1.5 flex items-center gap-2 py-2.5 border-base-300">
            <NotificationIcon />
              <p className='text-base-content my-2.5 text-lg'>You’ve spent most on Groceries so far this Month</p>
        </div>
      </div>
  )
}

export default Spending