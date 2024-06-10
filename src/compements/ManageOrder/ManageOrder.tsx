import { subMenuManageOrder } from "../../lib/consts/navigation";
import { SideBarLink } from "../shared/SideBar";
export default function SubManageOrderMenu() {
  return (
    <>
      <div className="bg-white w-full py-3  rounded-lg min-h-full flex gap-32 ">
        <div>
          {subMenuManageOrder.map((item) => {
            return (
              <>
                <SideBarLink
                  key={item.key}
                  label={item.label}
                  path={item.path}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
