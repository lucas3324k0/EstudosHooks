import HookCustom from "../components/HookCustom/HookCustom";
import HookUserEffect from "../components/HookUserEffect/HookUserEffect";
import HookUserReducer from "../components/HookUserReducer/HookUserReducer";
import HookUseCallback from "../components/HookuseCallback/HookUseCallback";
import HookUseImperativeHandle from "../components/HookuseImperativehandle/HookUseImperativeHandle";
import HookUseLayoutEffect from "../components/HookuseLayoutEffect/HookUseLayoutEffect";
import HookUseMemo from "../components/HookuseMemo/HookUseMemo";
import HookUseRef from "../components/HookuseRef/HookUseRef";
import HookUseState from "../components/useState/HookUseState";

const Home = () => {
  return (
    <div>
      <h1>Pagina Home</h1>
      <HookUseState />
      <HookUserReducer />
      <HookUserEffect />
      <HookUseRef />
      <HookUseCallback />
      <HookUseMemo />
      <HookUseLayoutEffect />
      <HookUseImperativeHandle />
      <HookCustom />
    </div>
  );
};

export default Home;
