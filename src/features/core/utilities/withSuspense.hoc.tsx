import React, {ComponentType, FC, Suspense} from "react";

function withSuspenseHoc <P extends object>(Cmp: ComponentType): FC<P> {
    return (props) => {
        return (
            <Suspense fallback={<span>Loading...</span>}>
                <Cmp {...props} />
            </Suspense>
        )
    }
}

export default withSuspenseHoc
