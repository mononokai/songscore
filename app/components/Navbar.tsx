export function Navbar() {
    return (
        <div className="flex justify-between">
            <div>
                <img src="logo.png" alt="" className="w-60 m-2"/>
            </div>
            <div>
                <button className="m-3">Home</button>
                <button className="m-3">Profile</button>
                <button className="m-3">Favorites</button>
            </div>
        </div>
    );
}