import { useTranslation, Trans } from "react-i18next";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./compements/shared/Layout";
import Dashboard from "./compements/Dashboard/Dashboard";
import New from "./compements/New/New";
import ManageOrder from "./compements/ManageOrder/ManageOrder";
import Payement from "./compements/Payement/Payement";
import Review from "./compements/Reviews/Review";
import Returns from "./compements/Returns/Returns";
import DriverManager from "./compements/DriverManager/DriverManager";
import SmsLogs from "./compements/SmsLogs/SmsLogs";
import BranchManage from "./compements/BranchManage/BranchManage";
import Transfer from "./compements/Transfer/Transfer";
import DriverShift from "./compements/DriverShift/DriverShift";
import AllOrder from "./compements/ManageOrder/ManageOrderLink/AllOrder";
import OldestUnassigned from "./compements/ManageOrder/ManageOrderLink/OldestUnassigned";
import LastestUnassigned from "./compements/ManageOrder/ManageOrderLink/LastestUnassigned";
import InProgress from "./compements/ManageOrder/ManageOrderLink/InProgress/InProgress";
import Delivered from "./compements/ManageOrder/ManageOrderLink/Delivered";

const lngs: Record<string, { nativeName: string }> = {
  en: { nativeName: "English" },
  fr: { nativeName: "Français" },
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="new" element={<New />} />
          <Route path="manageOrder" element={<ManageOrder />} />
          <Route path="/manageOrder/AllOrders" element={<AllOrder />} />
          <Route
            path="/manageOrder/oldestUnassigned"
            element={<OldestUnassigned />}
          />
          <Route path="payement" element={<Payement />} />
          <Route
            path="/manageOrder/lastestUnassigned"
            element={<LastestUnassigned />}
          />

          <Route path="/manageOrder/InProgress" element={<InProgress />} />
          <Route path="/manageOrder/Delivered" element={<Delivered />} />
          <Route path="review" element={<Review />} />
          <Route path="return" element={<Returns />} />
          <Route path="driverManager" element={<DriverManager />} />
          <Route path="smsLogs" element={<SmsLogs />} />
          <Route path="branchManage" element={<BranchManage />} />
          <Route path="transfer" element={<Transfer />} />
          <Route path="driverShift" element={<DriverShift />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
