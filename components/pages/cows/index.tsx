/* eslint-disable @next/next/no-img-element */
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
import { useApi } from "use-hook-api"
import { useEffect, useState } from "react"
import { getCowsApi } from "@/api/cows"
import { FaRegObjectGroup } from "react-icons/fa6";
import { Gallery } from "react-grid-gallery";
import ImagesModal, { imagesMKey } from "./ImagesModal"
import { useOpenCloseModal } from "@/jotai/modal"

const CowImagesGroup = ({ images }: { images: string[] }) => {
    const [showOverlay, setShowOverlay] = useState<boolean>(false)
    const openCloseModal = useOpenCloseModal()

    return (
        <div
            className={`flex flex-wrap border border-gray-900 relative gap-2`}
            onMouseEnter={() => setShowOverlay(true)}
            onMouseLeave={() => setShowOverlay(false)}
        >
            {
                images.slice(0, 20).map((item: string, index: number) => (
                    <img key={index} src={`${apiurl}/${item}`} alt={`Cow Image`} className="size-20 object-cover" />
                ))
            }
            {
                showOverlay &&
                <div className="absolute bg-black/70 top-0 w-full h-full justify-center items-center cursor-pointer flex" onClick={() => openCloseModal({
                    key: imagesMKey,
                    status: true,
                    data: {
                        images
                    }
                })}>
                    <FaRegObjectGroup className="text-white size-7" />
                </div>
            }
        </div>
    );
};


const apiurl = process.env.NEXT_PUBLIC_API_URL
const Cows = () => {
    const [callApi, { data }] = useApi({})

    useEffect(() => {
        callApi(getCowsApi())
    }, [])



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
                            <TableHead>Cow Images</TableHead>
                            {/* <TableHead>Created Date</TableHead> */}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            data?.map((item: any, index: number) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{item['Cow-ID']}</TableCell>
                                    <TableCell className="w-[90%]">
                                        <CowImagesGroup images={item["Image-Paths"]} />
                                    </TableCell>
                                    {/*   <TableCell>{item['Created-Date']}</TableCell> */}
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </div>
            <ImagesModal />
        </>

    )
}

export default Cows