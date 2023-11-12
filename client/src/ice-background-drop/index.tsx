import { memo, ReactNode } from "react";
import { PageContainer } from "./index.styles";

export interface IceBackgroundDropProps {
  children: ReactNode;
}

export const IceBackgroundDrop = memo(
  ({ children }: IceBackgroundDropProps) => {
    return <PageContainer>{children}</PageContainer>;
  }
);
