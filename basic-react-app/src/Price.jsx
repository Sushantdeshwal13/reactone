export default function Price({oldprice, newprice}){
    let oldstyles = {
        textDecorationLine:"line-through",
    }
    let newstyles={
        fontSize:"bold",
    }
    let styles={
        backgroundColor:"yellow",
        height:"30px",
        borderBottomLeftRadius:"20px",
        borderBottomRightRadius:"20px",
    }
    return(
        <div style={styles}>
            <span style={oldstyles}>{oldprice}</span>
            &nbsp; &nbsp; &nbsp;
            <span style={newstyles}>{newprice}</span>
        </div>
    )
}