import { ReactNode } from "react";
import Mantine_Provider from "./mantine-provider";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <Mantine_Provider>
      <>{children}</>
    </Mantine_Provider>
  );
}
