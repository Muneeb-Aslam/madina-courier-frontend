import { ColumnDef } from "@tanstack/react-table";
import Button from "@repo/ui/button";

export const userColumns: ColumnDef<any>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "userName",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const user = row.original;
      return (
        <div className="flex gap-2">
          <Button size="sm" onClick={() => console.log("Edit", user)}>
            Edit
          </Button>
          <Button
            size="sm"
            variant="destructive"
            onClick={() => console.log("Delete", user)}
          >
            Delete
          </Button>
        </div>
      );
    },
  },
];
