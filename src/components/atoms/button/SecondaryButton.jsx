import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const SecondaryButton = ({ children }) => {
  return <SButton>{children}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: #11999e;
`;
