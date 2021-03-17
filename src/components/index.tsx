import React from "react";

interface IJsonCompareViewerProps {
    oldObject: Record<string, any>;
    newObject: Record<string, any>;
}


const JsonCompareViewer:React.FC<IJsonCompareViewerProps> = ({ oldObject, newObject}) => {


    return (
        <pre>
            <div>{JSON.stringify(oldObject)}</div>
        </pre>
    )
}

export default JsonCompareViewer;