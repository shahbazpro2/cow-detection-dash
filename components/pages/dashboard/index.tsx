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
import { useEffect } from 'react'
import { useApi } from 'use-hook-api'


const Dashboard = () => {
    const [callApi, { data }] = useApi({})

    useEffect(() => {
        callApi(getDashboardVideoApi())
    }, [])

    return (
        <>
            <div className="text-3xl mb-4">Dashboard</div>
            <div className="flex gap-3">
                <Input type="text" placeholder="Search..." />
                <DatePicker />
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Activity Type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Activity Type</SelectLabel>
                            <SelectItem value='payment' >Payment</SelectItem>
                            <SelectItem value="refund">Refund</SelectItem>
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
                            data?.map((item: any, index: number) => (
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