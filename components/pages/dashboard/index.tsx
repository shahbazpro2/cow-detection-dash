'use client'
import { getDashboardVideoApi } from '@/api/dashboard'
import { DatePicker } from '@/components/ui/datepicker'
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table"
import { useEffect, useState } from 'react'
import { useApi } from 'use-hook-api'
import moment from 'moment'
import { RxCross1 } from "react-icons/rx";


const Dashboard = () => {
    const [filters, setFilters] = useState<any>({
        search: '',
        date: '',
        activityType: ''
    })
    const [origData, setOrigData] = useState<any>([])
    const [filterData, setFilterData] = useState<any>([])
    const [callApi, { data }] = useApi({})

    useEffect(() => {
        callApi(getDashboardVideoApi(), ({ data }) => {
            setOrigData(data)
            setFilterData(data)
        })
    }, [])

    useEffect(() => {
        let tempData = origData
        if (filters.search) {
            tempData = tempData.filter((item: any) => item['cow-id'].includes(filters.search))
        }
        if (filters.date) {
            tempData = tempData.filter((item: any) => item['Uploaded-Date'] === moment(filters.date).format('YYYY-MM-DD'))
        }
        if (filters.activityType) {
            tempData = tempData.filter((item: any) => item['Activity-Type'] === filters.activityType)
        }
        setFilterData(tempData)
    }, [filters])


    console.log('filtere', filters)
    return (
        <>
            <div className="flex justify-between items-center">
                <div className="text-3xl mb-4">Dashboard</div>
                {
                    Object.keys(filters).some((item: any) => filters[item]) &&
                    <div className='flex items-center gap-1 cursor-pointer bg-white/20 text-white/70 rounded px-3 py-1' onClick={
                        () => setFilters({
                            search: '',
                            date: '',
                            activityType: ''
                        })

                    }>
                        Clear All Filters
                        <RxCross1 />
                    </div>
                }
            </div>
            <div className="flex gap-3">
                <Input type="text" placeholder="Search..." value={filters.search} onChange={
                    (e) => setFilters({
                        ...filters,
                        search: e.target.value
                    })
                } />
                <DatePicker date={
                    filters.date
                }
                    setDate={
                        (e: any) => setFilters({
                            ...filters,
                            date: e
                        })
                    } />
                <Select value={filters.activityType} onValueChange={
                    (value) => {
                        setFilters({
                            ...filters,
                            activityType: value || filters.activityType
                        })
                    }
                }>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Activity Type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Activity Type</SelectLabel>
                            <SelectItem value='Brushing' >Brushing</SelectItem>
                            <SelectItem value="Drinking">Drinking</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <div className='bg-white dark:bg-boxdark shadow-2 rounded-lg mt-5'>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Cow ID</TableHead>
                            <TableHead>Video Name</TableHead>
                            <TableHead>Uploaded Date</TableHead>
                            <TableHead>Uploaded Time</TableHead>
                            <TableHead>Activity Type</TableHead>
                            <TableHead>Duration</TableHead>
                            {/*        <TableHead>View Output</TableHead> */}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            filterData?.map((item: any, index: number) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{item['cow-id']}</TableCell>
                                    <TableCell className="font-medium">{item['Video-Name']}</TableCell>
                                    <TableCell>{item['Uploaded-Date']}</TableCell>
                                    <TableCell>{item['Uploaded-Time']}</TableCell>
                                    <TableCell >{item['Activity-Type']}</TableCell>
                                    <TableCell>{item['Duration']}</TableCell>
                                </TableRow>

                            ))
                        }
                    </TableBody>
                </Table>

            </div>
        </>

    )
}

export default Dashboard