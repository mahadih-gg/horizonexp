
import FlagshipProvider from "./FlagshipProvider";
const Provides = ({ children }: { children: React.ReactNode }) => {

  return (
    <FlagshipProvider>
      {children}
    </FlagshipProvider>
  );
};

export default Provides;