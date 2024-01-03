
import { ReactNode } from 'react'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "./dialog"

interface Props {
    children: ReactNode
    title?: string
    open: boolean
    footer?: ReactNode
    onClose?: () => void
}

const BasicModal = ({ children, title, footer, open, onClose }: Props) => {
    return (
        <Dialog open={open} onOpenChange={onClose} >
            <DialogContent disableCross>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                {children}
                <DialogFooter>
                    {footer}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}


export default BasicModal
