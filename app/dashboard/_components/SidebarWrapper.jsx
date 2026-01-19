    // app/dashboard/_components/SidebarWrapper.jsx
    import { auth } from "@clerk/nextjs/server";
    import SideBar from "./SideBar";

    export default async function SidebarWrapper() {
    const { has } = await auth();
    // console.log(has)

    const hasYearly = has({ plan:"yearly_subscription"});

    
    return <SideBar hasYearly={hasYearly} />;
    
}
