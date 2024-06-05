import {useContext} from "react";
import {ComponentContext} from "../context/Context";

export function GetDashboard(name) {
    return {
        component:name
    }
}


export function Sidebar() {
    const { setComponentState } = useContext(ComponentContext)
    return(
        <ul>
            <li onClick={event => {
                ChangeComponent(setComponentState('dashboard'))
            }}>Dashboard
                <ul>
                    <li>Monitoring</li>
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
            <li onClick={event => {
                ChangeComponent(setComponentState('setupCrawler'))
            }}>Setup Project
                <ul>
                    <li>Category</li>
                    <li>Model</li>
                    <li>Crawler</li>
                </ul>
            </li>
            <li onClick={event => {
                ChangeComponent(setComponentState('setupCrawler'))
            }}>Tools Project
                <ul>
                    <li>Export Data</li>
                    <li>Import Data</li>
                </ul>
            </li>
        </ul>
    )
}

const ChangeComponent = (name) => {
}
