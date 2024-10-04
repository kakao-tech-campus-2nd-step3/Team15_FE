import CommonContainer from "@/components/common/layouts/Container";
import Logo from "@/assets/Main/Rebit.svg?react";

const Mainlogo = () => {
    return(
        <CommonContainer
        maxWidth={"100vw"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"baseline"}
        >
            <Logo />
        </CommonContainer>
    )
}

export default Mainlogo;