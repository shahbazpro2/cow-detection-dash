'use client'
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


const Dashboard = () => {
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
                            <TableHead>View Output</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">INV001</TableCell>
                            <TableCell>Paid</TableCell>
                            <TableCell>Credit Card</TableCell>
                            <TableCell className="text-right">$250.00</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

            </div>
        </>

    )
}

export default Dashboard