import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCirclePlus} from "@fortawesome/free-solid-svg-icons";
import {SelectorComponent} from "../util/SelectorComponent";
import {useState} from "react";
import {Monitoring} from "../dashboard/Monitoring";

function addSelector() {}

export function SetupCrawler() {
    const [selectors,setSelectors] = useState([{name:'selector'}])
    return(
            <>
                <div className={"mb-5 mt-2"}>
                    <h1>Setup Crawler</h1>
                </div>
                <form>
                    <div className={"form-group row"}>
                        <label className={"col-sm-2 col-form-label"}>Target URL</label>
                        <div className={"col-sm-10"}>
                            <input className={"form-control"}/>
                        </div>
                    </div>
                    <div className={"form-group row"}>
                        <label className={"col-sm-2 col-form-label"}>Selector</label>
                        <div className={"col-sm-9"}>
                            {
                                selectors.map((item,index) => (
                                    index===0 ? <SelectorComponent/> : <div className={"mt-2"}><SelectorComponent/></div>
                                ))
                            }
                        </div>
                        <div className={"col-sm-1"}>
                            <div className={""} style={
                                {cursor:"pointer"}
                            }><FontAwesomeIcon
                                icon={faCirclePlus}
                                size="lg"
                                onClick={event=> {
                                    addSelector(setSelectors(
                                        [ // with a new array
                                            ...selectors, // that contains all the old items
                                            { name: "selector" } // and one new item at the end
                                        ]
                                    ))
                                }}
                            /></div>
                        </div>
                    </div>
                    <div className={"form-group row mt-5 text-center"}>
                        <div className="col-sm-10">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>
            </>
    )
}
