'use client'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table"
import { useOpenCloseModal } from '@/jotai/modal'
import { FaUpload } from "react-icons/fa"
import { Button } from '../../ui/button'
import UploadModal, { uploadMKey } from './UploadModal'


const Videos = () => {
    const openCloseModal = useOpenCloseModal()
    return (
        <>
            <div className="text-3xl mb-4">Videos</div>
            <div className="flex gap-3 justify-end">
                <Button className='flex items-center gap-2' onClick={() => openCloseModal({
                    key: uploadMKey,
                    status: true
                })}>
                    <FaUpload />
                    Upload Video</Button>
            </div>
            <div className='bg-white dark:bg-boxdark shadow-2 rounded-lg mt-5'>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Video Name</TableHead>
                            <TableHead>Uploaded Date</TableHead>
                            <TableHead>Uploaded Time</TableHead>
                            <TableHead>Preview</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">INV001</TableCell>
                            <TableCell>Paid</TableCell>
                            <TableCell>Credit Card</TableCell>
                            <TableCell className="text-right">$250.00</TableCell>
                            <TableCell className="text-right">
                                <Button variant='outline' className='!bg-transparent !border !border-green-700 dark:text-white'>
                                    Start Inference
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <UploadModal />
            </div>
        </>

    )
}

export default Videos