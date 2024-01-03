'use client'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table"
import { DatePicker } from "../../ui/datepicker"
import { Input } from "../../ui/input"



const Cows = () => {
    return (
        <>
            <div className="text-3xl mb-4">Cows</div>
            <div className="flex gap-3">
                <Input type="text" placeholder="Search..." />
                <DatePicker />
            </div>
            <div className='bg-white dark:bg-boxdark shadow-2 rounded-lg mt-5'>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Cow ID</TableHead>
                            <TableHead>Cow Image</TableHead>
                            <TableHead>Created Date</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">INV001</TableCell>
                            <TableCell>Paid</TableCell>
                            <TableCell>Credit Card</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </>

    )
}

export default Cows