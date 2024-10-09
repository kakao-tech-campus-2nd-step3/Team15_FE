import CommonContainer from "@/components/common/layouts/Container";
import CommonGrid from "@/components/common/Grid";
import CommonCard from "@/components/feature/home/Card";
import CommonModal from "@/components/common/Modal";
import { useState } from "react";


const FeedItems = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalClose = () => {
        setIsModalOpen(false)
    }

    return (
        <CommonContainer
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
    >
        <CommonGrid
            columns={4}
            gap={30}
        >
            <button onClick={() => setIsModalOpen(true)}>
                <CommonCard
                    maxWidth="sm"
                    imageURL="https://blog.kakaocdn.net/dn/dRLhws/btsyMcArENG/7laJloEzfoMo1y7jvZ69a1/img.jpg"
                />                       
            </button>
        </CommonGrid>
        {
            isModalOpen &&
                <CommonModal isModalOpen={isModalOpen} handleModalClose={handleModalClose} />
        }
    </CommonContainer>
    )
}

export default FeedItems;