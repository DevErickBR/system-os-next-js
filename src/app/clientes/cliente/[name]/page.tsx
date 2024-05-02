import React from "react";

type Props = {
    params: {
        name: string
    }
}

const Page = ({ params }: Props): React.ReactNode => {

    return (
        <>
            <div>
                {params.name}
            </div>
        </>
    );
};

export default Page;