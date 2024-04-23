import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//sales
import SalesRoutes from './SalesRoutes';

//sales manager

import SalesManagerRoutes from './SalesManagerRoutes';

//inventory
import InventoryRoutes from "./InventoryRoutes";


//supplier
import SupplierRoutes from './SupplierRoutes';

//staff
import StaffRoutes from './StaffRoutes';

//login
import Login from "./components/Login";
import ForgetPassword from "./components/ForgetPassword";

//financial
import AddExpenses from './pages/financialManager/addExpenses';
import Home from './pages/financialManager/expensesHome';
import HomeIn from './pages/financialManager/incomeHome';
import AddIncome from './pages/financialManager/addIncome';
import DeleteEx from './pages/financialManager/deleteExpenses';
import UpdateExpenses from './pages/financialManager/updateExpenses';
import DeleteIn from './pages/financialManager/deleteIncome';
import UpdateIncome from './pages/financialManager/updateIncome';
import BalanceSheet from './pages/financialManager/balanceSheet';
import AddLiabilities from './pages/financialManager/addLiabilities';

//delivery
import AddLocation from "./pages/deliveryManager/AddLocation";
import AllLocation from "./pages/deliveryManager/AllLocation";
import UpdateLocation from "./pages/deliveryManager/UpdateLocation";
import DeleteLocation from "./pages/deliveryManager/DeleteLocation";
import AddDriver from "./pages/deliveryManager/AddDriver";
import AllDriver from "./pages/deliveryManager/AllDriver";
import UpdateDriver from "./pages/deliveryManager/UpdateDriver";
import DeleteDriver from "./pages/deliveryManager/DeleteDriver";
import UploadImage from "./pages/deliveryManager/UploadImage";
import AddReportData from "./pages/deliveryManager/AddReportData";
import AllReportData from "./pages/deliveryManager/AllReportData";
import UpdateReportData from "./pages/deliveryManager/UpdateReportData";
import DeleteReportData from "./pages/deliveryManager/DeleteReportData";
import DeliveryStatus from "./pages/deliveryManager/DeliveryStatus";
import UploadVehicleDetails from "./pages/deliveryManager/UploadVehicleDetails";

function App() {
  return (
    <Router>
      <div className='App'>

        {/* inventory routes */}
        <Routes>
          <Route path="/inventory/*" element={<InventoryRoutes />} />
        </Routes>

        {/* sales routes */}
        <Routes>
          <Route path='/sales/*' element={<SalesRoutes />} />
        </Routes>

        {/* sales manager routes */}
        <Routes>
          <Route path='/salesManager/*' element={<SalesManagerRoutes />} />
        </Routes>

        {/* supplier routes */}
        <Routes>
          <Route path='/supplierManager/*' element={<SupplierRoutes />} />
        </Routes>

        {/* staff routes */}
        <Routes>
          <Route path='/staff/*' element={<StaffRoutes />} />
        </Routes>

        {/* financial manager routes */}
        <Routes>
          <Route path="/add" element={<AddExpenses />} />
        </Routes>

        <Routes>
          <Route path="/HomeExpenses" element={<Home />} />
        </Routes>

        <Routes>
          <Route path="/HomeIncome" element={<HomeIn />} />
        </Routes>

        <Routes>
        <Route path="/addLiabilities" element={<AddLiabilities />} />
        </Routes>


        <Routes>
          <Route path="/addIncome" element={<AddIncome />} />
        </Routes>

        <Routes>
          <Route path="/deleteExpen/:id" element={<DeleteEx />} />
        </Routes>

        <Routes>
          <Route path="/updateExpenses/:id" element={<UpdateExpenses />} />
        </Routes>

        <Routes>
          <Route path="/deleteIncome/:id" element={<DeleteIn />} />
        </Routes>

        <Routes>
          <Route path="/updateIncome/:id" element={<UpdateIncome />} />
        </Routes>

        <Routes>
          <Route path="/balanceSheetHome" element={<BalanceSheet />} />
        </Routes>

        {/* delivery routes */}
        <Routes>
          <Route path="/addlocations" element={<AddLocation />} />
        </Routes>
        <Routes>
          <Route path="/alllocations" element={<AllLocation />} />
        </Routes>
        <Routes>
          <Route path="/updatelocations/:id" element={<UpdateLocation />} />
        </Routes>
        <Routes>
          <Route path="/deletelocations/:id" element={<DeleteLocation />} />
        </Routes>
        <Routes>
          <Route path="/addDrivers" element={<AddDriver />} />
        </Routes>
        <Routes>
          <Route path="/allDrivers" element={<AllDriver />} />
        </Routes>
        <Routes>
          <Route path="/updateDrivers/:id" element={<UpdateDriver />} />
        </Routes>
        <Routes>
          <Route path="/deleteDrivers/:id" element={<DeleteDriver />} />
        </Routes>
        <Routes>
          <Route path="/uploadImage" element={<UploadImage />} />
        </Routes>
        <Routes>
          <Route path="/addReportData" element={<AddReportData />} />
        </Routes>
        <Routes>
          <Route path="/allReportData" element={<AllReportData />} />
        </Routes>
        <Routes>
          <Route path="/updateReportData/:id" element={<UpdateReportData />} />
        </Routes>
        <Routes>
          <Route path="/deleteReportData/:id" element={<DeleteReportData />} />
        </Routes>
        <Routes>
          <Route path="/deliveryStatus" element={<DeliveryStatus />} />
        </Routes>
        <Routes>
          <Route path="/uploadVehicleDetails" element={<UploadVehicleDetails />} />
        </Routes>

        {/* login routes */}
        <Routes>
          <Route path='/' element={<Login />} />
        </Routes>

        <Routes>
          <Route path='/forgetPassword' element={<ForgetPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;