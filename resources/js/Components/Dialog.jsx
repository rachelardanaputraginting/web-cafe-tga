
import { Dialog } from '@headlessui/react'


function CartDialog({ children, isOpen = false, onClose = false }) {

    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            className="relative z-[99999]"
        >
            {/* The backdrop, rendered as a fixed sibling to the panel container */}
            <div className="fixed inset-0 bg-black/80 blur-md" aria-hidden="true" />

            {/* Full-screen scrollable container */}
            <div className="fixed inset-0 overflow-y-auto">
                {/* Container to center the panel */}
                <div className="flex min-h-full items-center justify-center p-4">
                    {/* The actual dialog panel  */}
                    <Dialog.Panel className="rounded max-h-auto bg-white absolute right-[350px] p-4 top-40 left-[350px]">
                        {children}
                    </Dialog.Panel>
                </div>
            </div>
        </Dialog>
    )
}

function Title({ title }) {
    return (
        <div className='text-primary mt-12 text-center font-semibold'>{title}</div>
    )
}

function Divider() {
    return <div className='bg-gray-300 my-4 w-full h-px px-4' />
}

CartDialog.Title = Title;
CartDialog.Divider = Divider;
export default CartDialog;
