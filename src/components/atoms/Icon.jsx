import * as iconsMap from "lucide-react";

export default function Icon({ name, thin, color = '#950999', size = 30 }) {

    const SelectedIcon = iconsMap[`Lucide${name}`] ?? iconsMap.LucideCat;

    const stroke = thin ? '0.5' : '3';

    return (
        <SelectedIcon color={color} size={size} strokeWidth={stroke} />
    )
}