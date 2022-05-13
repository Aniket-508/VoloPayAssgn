import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="your" element={<HomePage index={0} />} />
          <Route path="all" element={<HomePage index={1} />} />
          <Route path="blocked" element={<HomePage index={2} />} />
          <Route path="/" element={<Navigate to={"all"} replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
