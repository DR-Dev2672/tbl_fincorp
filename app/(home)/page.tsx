import { Content } from "@/components/Content";
import {Header} from "./_components/Header"
import { Footer } from "./_components/Footer";


export default function Page() {
    return (
        <div className="w-full ">
        <Header/>
        <Content/>
        <Footer/>
        </div>
    );
}