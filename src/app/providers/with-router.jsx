import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Spin } from "antd";

export const withRouter = (component) => () =>
  (
    <BrowserRouter basename="/react-homework-template">
      <Suspense
        fallback={<Spin delay={300} className="overlay" size="large" />}
      >
        {component()}
      </Suspense>
    </BrowserRouter>
  );
