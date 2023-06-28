import {Home} from "./pages/Home";

const AppStyles = {
  wrapper: "bg-mainRed w-full h-full overflow-hidden px-5 py-8 tablet:px-12 py-20 laptop:px-28 py-28 "
}

function App() {
  return (
      <div className={AppStyles.wrapper}>
          <Home/>
      </div>
  );
}

export default App;
