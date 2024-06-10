import { Skeleton } from "@mui/material";
import { range } from "lodash-es";

type LoadingTableProps = {
  rowCount?: number;
};

export const LoadingTable: React.FC<LoadingTableProps> = ({ rowCount = 2 }) => (
  <div className="overflow-x-auto mt-8">
    <table>
      <thead>
        <tr>
          <th>
            <Skeleton variant="rectangular" className="bg-grey-200 dark:bg-grey-600 rounded-lg" />
          </th>
        </tr>
      </thead>
      <tbody>
        {range(rowCount).map((number) => (
          <tr key={number}>
            <td>
              <Skeleton variant="rectangular" className="bg-grey-200 dark:bg-grey-600 rounded-lg my-[1px]" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
