"use client"
import UserDropdown from "@/app-components/comp/user-mng/p1/user-dropdown"

export default function TestT3() {
    return (
        <div className="h-screen w-screen bg-amber-200 flex items-center justify-center">
            <UserDropdown user={{
                displayname: "Luffy",
                email: "luffy@onepiece.anime",
                logoutFunc: () => {},
            }} />
        </div>
    )
}