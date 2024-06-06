import {useContext} from "react";
import {ComponentContext} from "../../context/Context";

export function Sidebar() {
    const { setComponentState } = useContext(ComponentContext)
    return(
        <ul>
            <li>Dashboard
                <ul>
                    <li onClick={event => {
                        ChangeComponent(setComponentState('monitoring'))
                    }}>Monitoring</li>
                </ul>
            </li>
            <li onClick={event => {
                ChangeComponent(setComponentState('settings'))
            }}>Settings
                <ul>
                    <li>Lock Management</li>
                    <li>Crawler Management</li>
                </ul>
            </li>
            <li>Setup Project
                <ul>
                    <li>Category</li>
                    <li>Model</li>
                    <li onClick={event => {
                        ChangeComponent(setComponentState('setupCrawler'))
                    }}>Crawler</li>
                </ul>
            </li>
            <li>Tools Project
                <ul>
                    <li>Export Data</li>
                    <li>Import Data</li>
                </ul>
            </li>
        </ul>
    )
}

const ChangeComponent = (name) => {}
