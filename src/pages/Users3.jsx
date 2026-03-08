import PageTitle from "../components/atoms/PageTitle";

const response = await fetch('https://dummyjson.com/users');
// console.log('response ', response);

const data = await response.json();
// console.log('data ', data);

const { users, total } = data;
// console.log('users ', users);

export default function Users3() {



    return (
        <div>
             <PageTitle title="All user" />
        
            <div className="flex flex-wrap gap-3 justify-between items-center m-4">
                USER
            </div>
        </div>
    )
}