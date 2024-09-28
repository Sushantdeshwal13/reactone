import Product from "./Product"
function Producttab(){
    let styles = {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexWrap:"wrap",
    }
    return(
        <div style={styles}>
            <Product title="Logitech" idx={0}/>
            <Product title="Hengseng" idx={1}/>
            <Product title="Indian Tech Market" idx={2}/>
        </div>
    )
}
export default Producttab;