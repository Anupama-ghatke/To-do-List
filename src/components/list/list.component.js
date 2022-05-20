import React from "react";

const List = ({Task}) => {
    return (
    <div>
        {
            Task.map((item) => {
                return <h1 key={item}>{item}</h1>
            })
        }
    </div>
    )
}
export default List;