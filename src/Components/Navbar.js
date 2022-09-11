const Navbar = ({ unCompletedTodos }) => {
    return (
        <header>

            {
                unCompletedTodos ?
                    <>
                        <span>{unCompletedTodos}</span>
                        <h2> are not completed</h2>
                    </>

                    :
                    <h2>set your todos !</h2>
            }

        </header>
    );
}

export default Navbar;