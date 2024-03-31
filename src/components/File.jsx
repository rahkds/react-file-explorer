
import { useState } from "react";
import Explorer from "./Explorer";


export default function File({file}) {
    if(!file) return null;    
    return (
        <div className="file-item">
            <h3 className="file-name">{file.name}</h3>
        </div>
    )
}