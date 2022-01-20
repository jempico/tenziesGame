import "./rollBtn.css"

export default function RollBtn (prop) {
    return(
        <button className="btn" onClick={prop.handleClick}>Roll</button>

    )
}