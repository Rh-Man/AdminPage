import { HiOutlineViewGrid, HiOutlineAnnotation } from "react-icons/hi";
import { IoIosAddCircleOutline } from "react-icons/io";
import { TbClipboardText } from "react-icons/tb";
import { LiaWalletSolid } from "react-icons/lia";
import { FiEdit } from "react-icons/fi";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "new",
    label: "New",
    path: "/new",
    icon: <IoIosAddCircleOutline />,
  },
  {
    key: "manageOrder",
    label: "Manage Order",
    path: "/manageOrder",
    icon: <TbClipboardText />,
  },
  {
    key: "review",
    label: "Review",
    path: "/review",
    icon: <FiEdit />,
  },
  {
    key: "payement",
    label: "Payement",
    path: "/payement",
    icon: <LiaWalletSolid />,
  },
  {
    key: "return",
    label: "Return",
    path: "/return",
    icon: <HiOutlineAnnotation />,
  },
  {
    key: "driverManager",
    label: "Drivers Manager",
    path: "/driverManager",
    icon: <HiOutlineAnnotation />,
  },
  {
    key: "smsLogs",
    label: "Sms Logs",
    path: "/smsLogs",
    icon: <HiOutlineAnnotation />,
  },
  {
    key: "branchManage",
    label: "Branch Manage",
    path: "/branchManage",
    icon: <HiOutlineAnnotation />,
  },
  {
    key: "transfer",
    label: " Transfer",
    path: "/transfer",
    icon: <HiOutlineAnnotation />,
  },
  {
    key: "driverShift",
    label: " Driver Shift",
    path: "/driverShift",
    icon: <HiOutlineAnnotation />,
  },
];

export const subMenuManageOrder = [
  {
    key: "allOrder",
    label: "All Order",
    path: "/manageOrder/AllOrders",
  },
  {
    key: "oldestUnassigned",
    label: "Oldest Unassigned",
    path: "/manageOrder/oldestUnassigned",
  },
  {
    key: "latesUnassigned",
    label: "Latest Unassigned",
    path: "/manageOrder/lastestUnassigned",
  },
  {
    key: "InProgress",
    label: "In Progress",
    path: "/manageOrder/InProgress",
  },
  {
    key: "Delivered",
    label: "Delivered",
    path: "/manageOrder/Delivered",
  },
];
