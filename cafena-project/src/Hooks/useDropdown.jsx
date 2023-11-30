import { useState } from 'react'

function useDropdown() {

    const [isOpen, setIsOpen] = useState(false)

    return [isOpen, setIsOpen]
}

export default useDropdown