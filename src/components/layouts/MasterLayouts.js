import Header from "../header";


const MasterLayouts = ({ children }) => {
    return (
        <>
            <Header/>

            { children }
        </>
    )
}

export default MasterLayouts;