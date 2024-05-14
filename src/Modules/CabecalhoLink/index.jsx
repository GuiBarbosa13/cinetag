import { Link } from "react-router-dom";
import styles from "./CabecalhoLink.module.css";

const CabecalhoLink = ({children, path}) => {
    return (
        <Link to={path} className={styles.link}> {children} </Link>
    )
}

export default CabecalhoLink;