import { Outlet } from "react-router-dom";

function ShoppingLayout() {
    return ( 
        <div className='flex flex-col bg-white min-h-screen w-full'>
            {/* header component */}
            shopin header 
            <shopingHeader/>
             {/* main content */}
            <main className =' flex flex-col w-full'>
                <Outlet/>

            </main>

        </div>
     );
}

export default ShoppingLayout;