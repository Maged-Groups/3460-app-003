export default function Users2() {
    const usersList = [
        {
            id: 1,
            name: 'Soso',
            title: 'Sales Rep'
        },
        {
            id: 2,
            name: 'Lolo',
            title: 'Area Sales Manager'
        },
        {
            id: 3,
            name: 'Toto',
            title: 'Accountant'
        },
        {
            id: 4,
            name: 'Mimi',
            title: 'Team Leader'
        },
        {
            id: 5,
            name: 'Zizi',
            title: 'Designer'
        },
        {
            id: 6,
            name: 'Koka',
            title: 'Full Stack Developer'
        },
    ];


    return (
        <div>
            <h1>All user</h1>
            <div className="flex flex-wrap gap-3 justify-between items-center m-4">
                {usersList.map(({ name, title, id }) => (
                    <div key={id} className="border p-4 rounded-md">
                        <h2 className="text-2xl font-bold uppercase">{name}</h2>
                        <p>{title}</p>
                    </div>
                ))}
            </div>
        </div>

    );
}