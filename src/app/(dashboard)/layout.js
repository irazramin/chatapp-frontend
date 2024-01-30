import TopSidebar from "../../components/TopSidebar"
export default function RootLayout({children}) {
    return (
        <div className="bg-gray h-screen flex relative ">
            <div className="w-screen h-screen">
                <TopSidebar />
               <div className="md:ml-[96px]">
                    {children}
               </div>
            </div>
        </div>
    )
}
