import PositionPageLoader from "./PositionPageLoader";
import ScalePageLoader from "./ScalePageLoader";
import NoPageLoader from "./NoPageLoader";

const PageLoaderConfigs = {
  Position: PositionPageLoader,
  Scale: ScalePageLoader,
  None: NoPageLoader,
};

export default PageLoaderConfigs;
