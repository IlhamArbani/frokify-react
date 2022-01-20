const Bookmarks = (props) => {
    return (
        <div className="relative">
            <button className={props.Style}>Bookmarks</button>
            <div className="hidden absolute right-0 -bottom-5 bg-white w-52 rounded-lg h-6">
                <h1>Book Marks</h1>
            </div>
        </div>
    )
}

export default Bookmarks;