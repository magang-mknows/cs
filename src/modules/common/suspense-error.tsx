import { FC, ReactElement, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { TCommonProps } from "./types";

const SuspenseError: FC<TCommonProps> = (props): ReactElement => {
  return (
    <ErrorBoundary fallback={props.error}>
      <Suspense fallback={props.loading}>{props.children}</Suspense>
    </ErrorBoundary>
  );
};

export default SuspenseError;
