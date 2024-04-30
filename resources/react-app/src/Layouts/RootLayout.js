import React from "react";
import { Outlet } from "react-router-dom";

function RootLayout() {
    return (
        <>
            <div>
                {/* Buradaki div'e genel container css verilebilir. */}
                <Outlet />
            </div>
            {/* Footer */}
        </>
    );
}

export default RootLayout;
