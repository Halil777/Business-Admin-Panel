import { Route, Routes } from "react-router-dom";
import AdminLayout from "./components/app/AdminLayout";
import Dashboard from "./page/Dashboard";
import Data from "./page/Data";
import Login from "./page/Login";
import Assets from "./page/Assets";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
const Admin = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/manager" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="home" element={<Data type="home" title="Baş saypa" />} />
          <Route
            path="about"
            element={<Data type="about" title="Biz barada" />}
          />
          <Route
            path="service_slide"
            element={<Data type="service_slide" title="Biziň hyzmatlarymyz" />}
          />
          <Route
            path="service_item"
            element={<Data type="service_item" title="Hyzmatlarymyz Kardlar" />}
          />
          <Route
            path="portfolia"
            element={<Data type="portfolia" title="Portfolia" />}
          />
          <Route
            path="contact"
            element={<Data type="contact" title="Kontakt temasy" />}
          />
          <Route
            path="social_media"
            element={<Data type="social_media" title="Sosial ulgam" />}
          />
          {/* <Route
            path="other"
            element={<Data type="other" title="Sazlamalar" />}
          /> */}
          <Route
            path="file"
            element={<Assets selectable={false} onSelect={() => {}} />}
          />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
};

export default Admin;
