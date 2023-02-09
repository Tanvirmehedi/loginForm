const Input = (props) => {
    return (
        <input style={
            {

                width: "80%",
                height: "1.5rem",
                paddingBottom: ".3rem",
                border: "none",
                borderBottom: "1px solid #C4C4C4",
                fontSize: "1.1rem",
                letterSpacing: "1px",
                borderStartEndRadius: "2px"
            }

        } type={props.type} placeholder={props.placeholder} />
    )
}

export default Input;