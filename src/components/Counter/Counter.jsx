import { Fragment, useState } from "react";

function Counter() {

const [ number, setNumber ] = useState(10);

const onClick = () => {
    setNumber(20)
}

return (
    <Fragment>
        <button onClick={onClick}>{number}</button>
    </Fragment>
)
}

export default Counter;