import { Header } from "../Header";
import { Footer } from "../Footer";
import {Outlet} from 'react-router-dom';
import { Toast } from "../Toast";

export const UserLayout = ({title}) => {
  return (
    <div className="generalPageLayout">
      <Header />
      <div className = "generalOutletLayout">
        <Outlet title = {title}/>
      </div>
      <Footer />
      <Toast />
    </div>
  )
}
