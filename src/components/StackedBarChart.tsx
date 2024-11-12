
// Colors for each bar on stack
const colors = [
    { key: "value1", color: "#FF8A08"  },
    { key: "value2", color: "#30E3DF" },
    { key: "value3", color: "#ADF4B5" },
    { key: "value4", color: "#8576FF" }
]

/**
 * Component for creating a stacked bar using HTML and CSS.
 *
 * @component
 * @example
 * const data = [
            { name: '1-4', value1: 0, value2: 0, value3: 0, value4: 0, },
            { name: '4-8', value1: 0, value2: 0, value3: 0, value4: 0 },
            { name: '9-15', value1: 86000, value2: 0, value3: 0, value4: 0 },
            { name: '16-21', value1: 40000, value2: 40000, value3: 40000, value4: 0, },
            { name: '21-25', value1: 120000, value2: 30000, value3: 30000, value4: 30000 },
        ]
 * return (
 *   <StackedBarChart data={data} />
 * )
 */
const StackedBarChart = ({data}: {
    data:{
    name: string;
    value1: number;
    value2: number;
    value3: number;
    value4: number;
}[]
}) => {
    return (
        <div className='w-full'>
            <div className="bar-chart flex  ">
                <div className="chart grow flex flex-col py-3">
                    <div className="chart-grid h-[200px] relative flex justify-between items-end grow px-3 border-b border-base-300 w-full pb-0">
                        <div className="grid-x absolute top-0 left-0 w-full border-b h-0 border-base-300 border-dashed"></div>
                        <div className="grid-x absolute top-[calc(50%+1px)] left-0 w-full border-b h-0 border-base-300 border-dashed"></div>
                        {data.map((x, i) => {
                            const sum = x.value1 + x.value2 + x.value3 + x.value4
                            return <div key={i} className="bar-col w-14 items-center flex flex-col gap-1">
                                {!!sum && <span className='text-sm font-medium text-neutral-content'>{(sum / 1000).toFixed(0)}k</span>}
                                
                                <div className="stack w-[48px] flex flex-col">
                                    {!!x.value4 &&
                                        <div style={{
                                        backgroundColor: colors.find(x => x.key === "value4")?.color,
                                            height: ((x.value4) / 300000) * 200
                                        }} className={`cell  bottom-0 left-0 z-[1] w-full`}>
                                        </div>
                                    }
                                    {!!x.value3 &&
                                        <div style={{
                                            backgroundColor: colors.find(x => x.key === "value3")?.color,
                                            height: ((x.value3) / 300000) * 200
                                        }} className={`cell  bottom-0 left-0 z-[1] w-full`}>
                                        </div>}
                                    {!!x.value2 &&<div style={{
                                        backgroundColor: colors.find(x => x.key === "value2")?.color,
                                        height: ((x.value2) / 300000) * 200
                                    }} className={`cell  bottom-0 left-0 z-[1] w-full`}>
                                    </div>}
                                    {!!x.value1 && <div style={{
                                        backgroundColor: colors.find(x => x.key === "value1")?.color,
                                        height: ((x.value1) / 300000) * 200
                                    }} className={`cell bottom-0 left-0 z-[1] w-full`}>
                                    </div>}
                                </div>
                            </div>
})}
                    </div>
                    <div className='x-axis w-full flex mt-4 px-3 justify-between gap-4'>
                        {data.map((x, i) => (
                            <span className='w-14 text-center' key={i}>{x.name}</span>
                        ))}
                    </div>
                </div>
                <div className="y-axis shrink-0 pl-4 pb-10 flex flex-col justify-between">
                    <span>300k</span>
                    <span>150k</span>
                    <span>0</span>
                </div>

            </div>
        </div>
    )
}

export default StackedBarChart