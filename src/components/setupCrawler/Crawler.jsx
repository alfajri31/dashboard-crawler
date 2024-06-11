import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCirclePlus} from "@fortawesome/free-solid-svg-icons";
import {SelectorComponent} from "../util/SelectorComponent";
import {useState} from "react";

function addSelector() {}

export function Crawler() {
    const [selectors,setSelectors] = useState([{name:'selector'}])
    return(
            <>
                <div className={"mb-5 mt-2"}>
                    <h2>Setup Crawler</h2>
                </div>
                <form>
                    <div className={"form-group row"}>
                        <label className={"col-sm-2 col-form-label"}>Model</label>
                        <div className="col-sm-10 input-group mb-3">
                            <select className="custom-select" id="inputGroupSelect01">
                                <option selected>Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-12 mb-4" style={
                        {
                            paddingLeft: "10.4rem"
                        }
                    }>
                        <button type="submit" className="btn btn-danger text-white">Sync</button>
                    </div>
                    <div className={"form-group row"}>
                        <label className={"col-sm-2 col-form-label"}>Target URL</label>
                        <div className={"col-sm-10"}>
                            <input className={"form-control"} placeholder={"https://example.com"}/>
                        </div>
                    </div>
                    <div className={"form-group row"}>
                        <label className={"col-sm-2 col-form-label"}>Attribute</label>
                        <div className={"col-sm-3"}>
                            {
                                selectors.map((item, index) => (
                                    index === 0 ? <SelectorComponent/> :
                                        <div className={"mt-2"}><SelectorComponent/></div>
                                ))
                            }
                        </div>
                        <label className={"col-sm-1 col-form-label"}>Selector</label>
                        <div className={"col-sm-5"}>
                            {
                                selectors.map((item, index) => (
                                    index === 0 ? <SelectorComponent/> :
                                        <div className={"mt-2"}><SelectorComponent/></div>
                                ))
                            }
                        </div>
                        <div className={"col-sm-1"}>
                            <div className={"mt-1"} style={
                                {cursor: "pointer"}
                            }><FontAwesomeIcon
                                icon={faCirclePlus}
                                size="lg"
                                onClick={event => {
                                    addSelector(setSelectors(
                                        [ // with a new array
                                            ...selectors, // that contains all the old items
                                            {name: "selector"} // and one new item at the end
                                        ]
                                    ))
                                }}
                            /></div>
                        </div>
                    </div>
                    <div className={"form-group row mt-5 text-center"}>
                        <div className="col-sm-12">
                            <button type="submit" className="btn btn-info">Validate</button>
                        </div>
                    </div>
                </form>
            </>
    )
}
