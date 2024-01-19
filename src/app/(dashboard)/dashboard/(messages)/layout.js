import Conversation from "@/components/Conversation/Conversation";


export default function RootLayout({children}) {
    return (
        <div className="bg-gray h-screen flex relative">
            <Conversation/>
            <div className="flex-1 ml-[320px] w-[100vh-320px] h-screen">
                {children}
            </div>
        </div>
    )
}
