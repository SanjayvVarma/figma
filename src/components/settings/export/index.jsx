import { Button } from "@nextui-org/react";
import { exportToPdf } from "../../../lib/utils";

const Export = () => (
  <div className="flex flex-col gap-3 px-5 py-3">
    <h3 className="text-[10px] uppercase">Export</h3>
    <Button
      variant="outline"
      className="w-full border border-grey-100 hover:bg-green-500 hover:text-black"
      onClick={exportToPdf}
      color="success"
    >
      Export to PDF
    </Button>
  </div>
);

export default Export;