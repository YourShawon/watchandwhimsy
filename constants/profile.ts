import { createId } from "@paralleldrive/cuid2";
import { TokensIcon } from "@radix-ui/react-icons";
import { Key, MapPin, Package, Truck } from "lucide-react";

export const tabsData = [

    {
        id: createId(),
        name: "Dashboard",
        value: "dashboard",
        icon: TokensIcon
    },
    {
        id: createId(),
        name: "Orders",
        value: "orders",
        icon: Package
    },
    {
        id: createId(),
        name: "Track Your Order",
        value: "trackYourOrder",
        icon: Truck
    },
    {
        id: createId(),
        name: "Change Password",
        value: "changePass",
        icon: Key
    },
    {
        id: createId(),
        name: "Address",
        value: "address",
        icon: MapPin
    },
]