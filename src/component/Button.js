const Button = (props) => {
    return (
        <button style={{
            width: "10rem",
            height: "2.2rem",
            border: "none",
            backgroundColor: "#276BF0",
            color: "#FFFFFF",
            fontSize: "1.2rem",
            fontWeight: "600",
            borderRadius: "50px"

        }} type={props.type}>{props.text}</button>
    )
}

export default Button;