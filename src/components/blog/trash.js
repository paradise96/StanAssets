import { useState } from "react";
function Trash() {
    const [data, setData] = useState({ username: '', password: '' });

    function handleFormSubmit(event) {
        event.preventDefault()
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="">Username:
                <input type="text" value={data.username} onChange={(e) => setData({...data, username: e.target.value})} />
            </label>
            <label htmlFor="">Password:
                <input type="password" value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
            </label>
            <button type='submit'>Login</button>
        </form>
    )
}
export default Trash;