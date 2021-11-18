import { Fragment } from "react"


const Item = ({ title, price, pictureUrl, description })=>{

    return(
        <Fragment>
        <p>{title}</p>
        <img src={pictureUrl} alt="" />
        <p>$ {price}</p>
        <p>{description}</p>
        <input type="button" value="Comprar" />
        </Fragment>

    )
}

export default Item;