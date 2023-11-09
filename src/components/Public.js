import { Link } from "react-router-dom";

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>
                    Welcome to <span className="nowrap">Tech Note Project</span>
                </h1>
            </header>
            <main className="public__main">
                <p>
                    This project is create to help manager and employee to
                    tracking their work by create note. Each user in this
                    project is assigned a role. Manager and admin has all the
                    permission to create, edit, delete note and user. Employee
                    can only create and view note.
                </p>
                <br />
                <p>
                    You can start testing by log in from the button at the end
                    of page.
                </p>
                <br />
                <p>Admin account</p>
                <p>Username: Thien</p>
                <p>Password: 123456</p>
                <br />
                <p>Employee account</p>
                <p>Username: Ngoc</p>
                <p>Password: 123456</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>
    );
    return content;
};
export default Public;
