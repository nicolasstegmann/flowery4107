import { Header } from "../Header";
import { Footer } from "../Footer";
import {Outlet} from 'react-router-dom';

export const UserLayout = ({title}) => {
  return (
    <div className="generalPageLayout">
      <Header />
      <div className = "generalOutletLayout">
        <Outlet title = {title}/>
      </div>
      <Footer />
    </div>
  )
}
