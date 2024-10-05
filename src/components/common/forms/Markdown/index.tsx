import React from "react";
import MDEditor from "@uiw/react-md-editor";
import styled from "@emotion/styled";


const CommonMDEditor = () => {
    const [value, setValue] = React.useState<string | undefined>("");

    return (
    <Wrapper>
        <div data-color-mode="light">     {/* 항상 흰 바탕으로 나오게 */}
            <MDEditor
                value={value}
                onChange={setValue}
                height={'40vh'}
                tabSize={2}
                color={'white'}
                hideToolbar={true}
                preview={"live"}    // 마크다운 프리뷰 설정   {"live" | "edit" | "preview"}
                autoFocus={true}  // Can be used to make Markdown Editor focus itself on initialization.
                textareaProps={{
                    placeholder: 'Markdown을 이용해보세요.',        
                    maxLength: 1300                                   // 최대 글자 수
                }}
        />
        </div>
    </Wrapper>
    )
}
export default CommonMDEditor;
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`