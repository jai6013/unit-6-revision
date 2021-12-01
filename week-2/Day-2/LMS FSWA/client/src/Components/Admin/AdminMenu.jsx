import { Link } from "react-router-dom";

const AdminMenu = () => {

    return (
        <div className="admin-menu">
            <Link to="/admin">
                <button >Students</button>
            </Link>
            <Link to="/studentform">
                <button>Add Student</button>
            </Link>
            <Link to="/contest">
                <button>Contests</button>
            </Link>
            <Link to="/contestform">
                <button>Add Contest</button>
            </Link>
        </div>
    );
}

export { AdminMenu };