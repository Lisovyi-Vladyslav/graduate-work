
import { Link } from "shared/UI/Link/Link";
import { Icon } from "shared/UI/Icon/Icon";
import { Button } from "shared/UI/Button/Button";
import { ButtonIcon } from "./ButtonHeader.styled";



export const ButtonHeader = ({ icon, to }) => {
    // const {icon, to} = props;
    return (
<Link to={to} end>
    <ButtonIcon Header={true}>
        <Icon icon={icon}></Icon>
    </ButtonIcon>
 </Link>
    );
  };