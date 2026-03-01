const Users1 = () => {

    const usersList = [
        'Marleen',
        'Fatema',
        'Haneen',
        'May',
        'Mohamed',
        'Ahmed',
        'Mahmoud',
        'Seif'
    ];

    console.log('usersList', usersList)

    
    return (
        <div>
            <h1>All user</h1>
            <div className="flex flex-wrap gap-3 justify-between items-center m-4">
                {usersList.map(user => <div className="border p-4 rounded-md">{user.toUpperCase()} </div>)}
            </div>
        </div>
    )
}

export default Users1;