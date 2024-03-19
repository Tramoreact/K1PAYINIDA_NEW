import { Suspense, lazy, ElementType } from "react";
// components
import LoadingScreen from "../components/loading-screen";

// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

// ----------------------------------------------------------------------

//login page
export const LoginPage = Loadable(
  lazy(() => import("../pages/auth/LoginPage"))
);

//Registration Page
export const RegisterPage = Loadable(
  lazy(() => import("../pages/auth/RegisterPage"))
);

//Registration Steps
export const RegisterStepPage = Loadable(
  lazy(() => import("../pages/auth/RegisterSteps"))
);

//esignature
export const Esignature = Loadable(
  lazy(() => import("../pages/auth/Esignature"))
);

//npin
export const NpinOtp = Loadable(lazy(() => import("../pages/auth/NpinOtp")));
export const CreateNpin = Loadable(
  lazy(() => import("../pages/auth/CreateNpin"))
);

//ResetPassword Page
export const ResetPage = Loadable(
  lazy(() => import("../pages/auth/ResetPage"))
);
export const ResetPassVerifyOtp = Loadable(
  lazy(() => import("../sections/auth/ResetPassVerifyCode"))
);

//DashBoard
export const MyStats = Loadable(lazy(() => import("../pages/MyStats")));

//services
export const Services = Loadable(lazy(() => import("../pages/Services")));
export const Recharge = Loadable(
  lazy(() => import("../sections/services/recharge/Recharges"))
);
export const DMT = Loadable(lazy(() => import("../sections/services/DMT/DMT")));
export const DMT1 = Loadable(
  lazy(() => import("../sections/services/DMT1/DMT1"))
);
export const DMT2 = Loadable(
  lazy(() => import("../sections/services/DMT2/DMT2"))
);
export const AEPS = Loadable(
  lazy(() => import("../sections/services/AEPS/AEPS"))
);
export const BillPayment = Loadable(
  lazy(() => import("../sections/services/billPayments/BillPayment"))
);
export const AadhaarPay = Loadable(
  lazy(() => import("../sections/services/aadharpay/AadharPay"))
);
//Network
export const Network = Loadable(lazy(() => import("../pages/Network")));

//transactions
export const MyTransaction = Loadable(
  lazy(() => import("../pages/MyTransactions"))
);
export const FundFlow = Loadable(
  lazy(() => import("../sections/MyTransaction/FundFlow"))
);
export const WalletLadger = Loadable(
  lazy(() => import("../pages/WalletLadger"))
);

//schemes
export const Scheme = Loadable(lazy(() => import("../pages/SchemePage")));
export const BBPSScheme = Loadable(
  lazy(() => import("../pages/BBPSSchemePage"))
);
export const LoanScheme = Loadable(
  lazy(() => import("../pages/LoanSchemePage"))
);

//Fund Requests
export const MyFundDeposits = Loadable(
  lazy(() => import("../sections/FundManagement/MyFundDeposite"))
);

export const MyBankAccount = Loadable(
  lazy(() => import("../sections/FundManagement/MyBankAccount"))
);
export const AEPSsettlement = Loadable(
  lazy(() => import("../sections/FundManagement/AEPSsettlement"))
);
export const MyFundRequest = Loadable(
  lazy(() => import("../sections/FundManagement/MyFundRequest"))
);
export const ManageFundFlow = Loadable(
  lazy(() => import("../sections/FundManagement/ManageFundFlow"))
);
export const MyNetwrokFunds = Loadable(
  lazy(() => import("../sections/FundManagement/MyNetworkFunds"))
);

//settings
export const Setting = Loadable(lazy(() => import("../pages/Setting")));

//help and support
export const HelpAndSupport = Loadable(
  lazy(() => import("../pages/HelpAndSupport"))
);

export const Page404 = Loadable(lazy(() => import("../pages/Page404")));

//extra
export const UserProfilePage = Loadable(
  lazy(() => import("../pages/UserProfilePage"))
);
