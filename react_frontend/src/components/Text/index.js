import React from "react";


const Text = ({tag: Tag, children, ...props}) => {
    return <Tag {...props}>{children}</Tag>
}

export default Text