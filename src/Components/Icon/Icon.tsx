import IcoMoon from "react-icomoon";
import type { IconProps } from "react-icomoon";
import iconSet from "./selection.json";

const Icon = (props: IconProps) => <IcoMoon iconSet={iconSet} {...props} />;

export default Icon;