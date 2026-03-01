import { useState } from 'react'
import { LuEyeOff, LuEye } from 'react-icons/lu'

export default function PasswordField() {
    const [showPassword, setShowPassword] = useState(false)

    const handleShowPassword = () => setShowPassword(!showPassword)

    return (
        <div className='m-3 border flex justify-between items-center px-3 py-1 rounded-md border-gray-500'>
            <input type={showPassword ? 'text' : "password"} className='flex-1 outline-0' />

            <div className='' onClick={handleShowPassword}>
                {showPassword ? <LuEyeOff /> : <LuEye />}
            </div>

        </div>
    )
}