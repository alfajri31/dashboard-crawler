import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCirclePlus} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import {AttributeComponent} from "../util/AttributeComponent";

function addSelector() {}

export function Model() {
    const [attributes,setAttributes] = useState([{name:'attribute'}])
    return(
        <>
            <div className={"mb-5 mt-2"}>
                <h2>Setup Model</h2>
            </div>
            <form>
                <div className={"form-group row"}>
                    <label className={"col-sm-2 col-form-label"}>Attribute name</label>
                    <div className={"col-sm-9"}>
                        {
                            attributes.map((item, index) => (
                                index === 0 ? <AttributeComponent/> :
                                    <div className={"mt-2"}><AttributeComponent/></div>
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
                                addSelector(setAttributes(
                                    [ // with a new array
                                        ...attributes, // that contains all the old items
                                        {name: "attribute"} // and one new item at the end
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
