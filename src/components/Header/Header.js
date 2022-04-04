import React, {
    useEffect,
    useState
} from "react";

import { Link,useLocation } from "react-router-dom"

import { Head } from "../../styles/components/stylesHeader.js";

const Header = () => {
    const [activeTab,setActiveTab] = useState("Home")

    const location = useLocation();

    useEffect(()=>{
        if(location.pathname === "/"){
            setActiveTab("Home")
        }else if(location.pathname === "/add"){
            setActiveTab("AddContact")
        }
    },[location])
    return(
        <Head>
            <div>
                <Link to="/">
                    <p 
                        className={`${activeTab === "Home" ? "active": ""}`} 
                        onClick={()=>setActiveTab("Home")}>
                        Página Inicial
                    </p>
                </Link>
                <Link to="/add" >
                    <p 
                        className={`${activeTab === "AddContact" ? "active": ""}`} 
                        onClick={()=>setActiveTab("AddContact")}>
                        Adicionar Linha
                    </p>
                </Link>
            </div>
        </Head>
    )
}

export default Header;