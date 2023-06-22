import React from "react";

import { motion } from "framer-motion";

const Logo = () => {
    return (
        <motion.div>
            <a href="https://www.hl7.org/fhir/">
                <motion.img src="/fhir/images/logoFhir.svg" alt="Fhir" width={180} />
            </a>
        </motion.div>
    );
};

export { Logo };
