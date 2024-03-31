import { useState } from "react";
import Folder from "./Folder";
import File from "./File";

const Explorer = ({files}) => {
    if(!files) return null;
    if(files.type == 'file') {
        return <File file={files}/>
    }
    return <Folder folder={files}/>
}

export default Explorer;