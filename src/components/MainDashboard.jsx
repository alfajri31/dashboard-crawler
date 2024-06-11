import {useEffect, useState} from "react";
import {ComponentContext} from "../context/Context";
import {Crawler} from "./setupCrawler/Crawler";
import {Settings} from "./settings/Settings";
import {Monitoring} from "./dashboard/Monitoring";
import {Sidebar} from "./sidebar/Sidebar";
import {Model} from "./setupCrawler/Model";



function DynamicComponentBoxed({box}) {
    if(box.component ==="monitoring") {
        return (
            <>
                {<Monitoring/>}
            </>
        )
    }
    if(box.component ==="settings") {
        return (
            <>
                {<Settings/>}
            </>
        )
    }
    if(box.component ==="setupCrawler") {
        return (
            <>
                {<Crawler/>}
            </>
        )
    }
    if(box.component ==="model") {
        return (
            <>
                {<Model/>}
            </>
        )
    }
}

export function MainDashboard() {
    const [componentState, setComponentState] = useState("monitoring")
    useEffect((event) => {
        window.onbeforeunload = function() {
            //logic when page is not refreshed/reloaded
            return true;
        };
        return () => {
            window.onbeforeunload = null;
            //logic when page is refreshed/reloaded
        };
    }, []);
    return(
        <ComponentContext.Provider value={{ componentState,setComponentState}}>
            <>
                <div className={"row"}>
                    <div className={"col-6 bg-danger"}>test</div>
                    <div className={"col-6 bg-primary"}>test</div>
                </div>
                <div className={"row vh-100"}>
                    <div className={"col-2 bg-success"}>
                        <Sidebar/>
                    </div>
                    <div className={"col-10 bg-secondary"}>
                        <DynamicComponentBoxed box={{component: componentState}}></DynamicComponentBoxed>
                    </div>
                </div>
            </>
        </ComponentContext.Provider>

    )
}
