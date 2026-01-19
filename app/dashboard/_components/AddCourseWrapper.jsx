    // app/dashboard/_components/SidebarWrapper.jsx
    import { auth } from "@clerk/nextjs/server";
    import AddCourse from "./AddCourse";

    export default async function SidebarWrapper() {
    const { has } = await auth();
    // console.log(has)

    const hasYearly = has({ plan:"yearly_subscription"});

    
    return <AddCourse hasYearly={hasYearly} />;
    
}
