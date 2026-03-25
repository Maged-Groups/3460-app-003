import Icon from "./Icon";

export default function Alert({ children, type, icon }) {

    let classList = '';

    switch (type) {
        case 'success':
            classList = 'bg-green-200 text-green-800';
            break;
        case 'danger':
            classList = 'bg-red-200 text-red-800';
            break;
        case 'warning':
            classList = 'bg-yellow-200 text-yellow-800';
            break;
        case 'info':
            classList = 'bg-sky-200 text-sky-800';
            break;
        default:
            classList = 'bg-gray-200 text-gray-800';
            break;
    }

    return (
        <div className={`p-3 my-3 border-2 shadow-md rounded-md flex gap-2 items-center ${classList}`}>
            {
                icon && <Icon name={icon} />
            }
            {children}
        </div>
    )
}