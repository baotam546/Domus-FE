import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/Checkbox/checkbox";
import { ContractsProps } from "../../types";
import { CRUDDropdownMenu } from "../DropdownMenu/CRUD";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<ContractsProps>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) =>
                    table.toggleAllPageRowsSelected(!!value)
                }
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "id",
        header: "Id",
        cell: ({ row }) => {
            const id: string = row.getValue("id") as string;
            return <h4> {id.slice(0, 3)}..</h4>;
        },
    },
    // {
    //     accessorKey: "contractId",
    //     header: "Contract",
    //     cell: ({ row }) => {
    //         return <h4> Contract {row.index + 1}</h4>;
    //     },
    // },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "signedAt",
        header: "Signed At",
    },
    {
        accessorKey: "staffName",
        header: "Staff",
        cell: ({ row }) => {
            const staffName: string =
                (row.getValue("staffName") as { userName?: string })
                    ?.userName || "";
            const staffAva: string =
                (row.getValue("staffName") as { profileImage?: string })
                    ?.profileImage || "";
            return (
                <div className=" text-right font-medium">
                    {
                        <div className="flex items-center gap-1 ">
                            <Avatar>
                                <AvatarImage src={staffAva} />
                                <AvatarFallback>S</AvatarFallback>
                            </Avatar>
                            <div className="text-blue">{staffName}</div>
                        </div>
                    }
                </div>
            );
        },
    },
    {
        accessorKey: "customerName",
        header: "Customer",
        cell: ({ row }) => {
            const customerName: string =
                (row.getValue("customerName") as { userName?: string })
                    ?.userName || "";
            const customerAva: string =
                (row.getValue("customerName") as { profileImage?: string })
                    ?.profileImage || "";
            return (
                <div className=" text-right font-medium">
                    {
                        <div className="flex items-center gap-1 ">
                            <Avatar>
                                <AvatarImage src={customerAva} />
                                <AvatarFallback>C</AvatarFallback>
                            </Avatar>
                            <div className="text-black">{customerName}</div>
                        </div>
                    }
                </div>
            );
        },
    },
    {
        accessorKey: "status",
        header: () => <div className="text-left">Status</div>,
        cell: ({ row }) => {
            const value: string =
                row.getValue("status") as string || "Pending"
            return (
                <div className="text-left">
                    <Badge variant="outline">{value}</Badge>
                </div>
            );
        },
    },
    {
        accessorKey: "signature",
        header: () => <div className="text-left">Signature</div>,
        cell: ({ row }) => {
            const value: string = (
                row.getValue("signature") as string || "Unsigned"
            ).toUpperCase();
            return (
                <div className="text-left">
                    <Badge variant="outline" className="max-w-20 overflow-hidden">{value}</Badge>
                </div>
            );
        },
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            return <CRUDDropdownMenu id={row.getValue("id")} />;
        },
    },
];
