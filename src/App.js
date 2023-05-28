import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Screen1 from "./pages/Screen1";
import Screen5 from "./pages/Screen5";
import Screen4 from "./pages/Screen4";
import ProductDetailPageMockup from "./pages/ProductDetailPageMockup";
import Screen3 from "./pages/Screen3";
import Desktop1 from "./pages/Desktop1";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/screen-5":
        title = "";
        metaDescription = "";
        break;
      case "/screen-4":
        title = "";
        metaDescription = "";
        break;
      case "/product-detail-page-mockup":
        title = "";
        metaDescription = "";
        break;
      case "/screen-3":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Screen1 />} />
      <Route path="/screen-5" element={<Screen5 />} />
      <Route path="/screen-4" element={<Screen4 />} />
      <Route
        path="/product-detail-page-mockup"
        element={<ProductDetailPageMockup />}
      />
      <Route path="/screen-3" element={<Screen3 />} />
      <Route path="/desktop-1" element={<Desktop1 />} />
    </Routes>
  );
}
export default App;
