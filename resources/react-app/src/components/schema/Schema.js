import React from "react";
import { useTranslation } from "react-i18next";
import engtema from "../../assets/schema/engtema.png";
import trsema from "../../assets/schema/trsema.png";
function Schema() {
    const { t, i18n } = useTranslation();

    return (
        <div className="w-full h-full">
            <img src={i18n.language === "tr" ? trsema : engtema} alt="Schema" />
        </div>
    );
}

export default Schema;
