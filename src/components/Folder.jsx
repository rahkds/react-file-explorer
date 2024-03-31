
import { useState } from "react";
import Explorer from "./Explorer";


export default function Folder({folder}) {
    const [isExpanded, toggleExpanded] = useState(false);
    let otherClasses= '';
    if(isExpanded) {
        otherClasses = 'folder-expanded'
    }
    if(!folder) return null;    
    return (
        <div className="folder-item">
            <h3 className={`folder-title ${otherClasses}`} onClick={() => toggleExpanded(!isExpanded)}>{folder.name}</h3>
            <div className="expand">
                {
                    folder.items && folder.items.length 
                    && isExpanded &&  folder.items.map(elem => <Explorer files={elem}/>)
                }
            </div>
        </div>
    )
}